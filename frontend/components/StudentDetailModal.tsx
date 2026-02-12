import { useState, useEffect } from "react";
import {
	Phone,
	Mail,
	Cake,
	MessageSquare,
	Trash2,
	Save,
	X,
} from "lucide-react";
import { Student, FeedbackEvent, Post } from "../lib/types";
import EmojiPicker from "./EmojiPicker";
import { api } from "../lib/api";
import { toast } from "sonner";
import { Modal } from "./ui/Modal";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { getAnimalAvatar } from "@/utils/getAnimalAvatar";

interface StudentDetailModalProps {
	isOpen: boolean;
	onClose: () => void;
	student: Student | null;
	onUpdate: (data: Partial<Student>) => void;
	onDelete?: () => void;
	onFeedbackChange?: () => void; // New callback for sync
}

export default function StudentDetailModal({
	isOpen,
	onClose,
	student,
	onUpdate,
	onDelete,
	onFeedbackChange,
}: StudentDetailModalProps) {
	const [activeTab, setActiveTab] = useState<"timeline" | "contact">(
		"timeline",
	);
	const [feedbacks, setFeedbacks] = useState<FeedbackEvent[]>([]);
	const [posts, setPosts] = useState<Post[]>([]);
	const [loadingTimeline, setLoadingTimeline] = useState(false);
	const [newMessage, setNewMessage] = useState("");
	const [sendingMessage, setSendingMessage] = useState(false);

	// Contact Form State
	const [name, setName] = useState("");
	const [animalAvatar, setAnimalAvatar] = useState("Leão");
	const [avatarColor, setAvatarColor] = useState("#FFFFFF");
	const [whatsapp, setWhatsapp] = useState("");
	const [email, setEmail] = useState("");
	const [birthday, setBirthday] = useState("");
	const [showEmojiPicker, setShowEmojiPicker] = useState(false);

	useEffect(() => {
		if (isOpen && student) {
			setName(student.name);
			setAnimalAvatar(student.animalAvatar);
			setAvatarColor(student.avatarColor || "#FFFFFF");
			setWhatsapp(student.whatsapp || "");
			setEmail(student.email || "");
			setBirthday(student.birthday || "");
			setBirthday(student.birthday || "");
			setActiveTab("timeline"); // Default tab

			// Fetch Timeline
			fetchTimeline(student.id);
		}
	}, [isOpen, student]);

	const fetchTimeline = async (studentId: string) => {
		setLoadingTimeline(true);
		try {
			const token = localStorage.getItem("token");
			if (!token) return;

			const [feedbacksData, postsData] = await Promise.all([
				api.get<FeedbackEvent[]>(`/feedback/${studentId}`),
				api.getStudentPosts(token, studentId),
			]);

			setFeedbacks(feedbacksData);
			setPosts(postsData);
		} catch {
			toast.error("Erro ao carregar histórico");
		} finally {
			setLoadingTimeline(false);
		}
	};

	const handleSendMessage = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!newMessage.trim() || !student) return;

		setSendingMessage(true);
		try {
			const token = localStorage.getItem("token");
			if (!token) return;

			const newPost = await api.createPost(token, newMessage, student.id);
			setPosts([newPost, ...posts]);
			setNewMessage("");
			toast.success("Mensagem enviada!");
		} catch (error) {
			toast.error("Erro ao enviar mensagem");
		} finally {
			setSendingMessage(false);
		}
	};

	const handleDeletePost = async (postId: string) => {
		const token = localStorage.getItem("token");
		if (!token) return;

		try {
			await api.deletePost(token, postId);
			setPosts(posts.filter((p) => p.id !== postId));
			toast.success("Post removido!");
		} catch (error) {
			toast.error("Erro ao remover post");
		}
	};

	const handleSaveContact = (e: React.FormEvent) => {
		e.preventDefault();
		onUpdate({
			name,
			animalAvatar,
			avatarColor,
			whatsapp,
			email,
			birthday,
		});
		toast.success("Informações atualizadas!");
	};

	const handleDeleteFeedback = (feedbackId: string) => {
		if (window.confirm("Tem certeza que deseja apagar este feedback?")) {
			executeDeleteFeedback(feedbackId);
		}
	};

	const executeDeleteFeedback = async (feedbackId: string) => {
		console.log("[Delete Feedback] Executing delete for:", feedbackId);

		const token = localStorage.getItem("token");
		if (!token) {
			console.error("[Delete Feedback] No token found");
			toast.error("Sessão expirada. Faça login novamente.");
			return;
		}

		try {
			await api.deleteFeedbackEvent(token, feedbackId);

			console.log("[Delete Feedback] Success! Removing from local state");
			setFeedbacks((prev) => prev.filter((f) => f.id !== feedbackId));
			toast.success("Feedback removido!");

			// Notify parent to refresh data (sync card badge)
			if (onFeedbackChange) {
				onFeedbackChange();
			}
		} catch (error) {
			console.error("[Delete Feedback] Error details:", {
				error,
				message: error instanceof Error ? error.message : "Unknown",
				feedbackId,
			});
			const errorMessage =
				error instanceof Error ? error.message : "Erro desconhecido";
			toast.error(`Erro ao remover feedback: ${errorMessage}`);
		}
	};

	if (!isOpen || !student) return null;

	return (
		<Modal isOpen={isOpen} onClose={onClose} title={student.name} maxWidth="md">
			{/* Content Container with Standard Padding */}
			<div className="p-6">
				{/* Avatar Section */}
				<div className="flex flex-col items-center mb-6">
					<div
						className="relative group cursor-pointer"
						onClick={() => setShowEmojiPicker(!showEmojiPicker)}
					>
						<div
							className="w-24 h-24 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-5xl bg-white"
							style={{ backgroundColor: avatarColor }}
						>
							{getAnimalAvatar(animalAvatar)}
						</div>

						{/* Edit Badge - Adjusted for white background */}
						<div className="absolute -bottom-2 -right-2 bg-[var(--safari-green)] text-white px-3 py-1 rounded-full shadow-md text-xs font-bold border-2 border-white">
							Mudar
						</div>
					</div>

					{showEmojiPicker && (
						<div className="absolute top-40 z-50 mt-2">
							<EmojiPicker
								onSelectEmoji={(emoji) => {
									setAnimalAvatar(emoji);
									setShowEmojiPicker(false);
								}}
								onSelectColor={setAvatarColor}
								onClose={() => setShowEmojiPicker(false)}
								currentColor={avatarColor}
							/>
						</div>
					)}
				</div>

				{/* Tabs */}
				<div className="flex gap-4 relative z-10 shrink-0 px-2 mb-4">
					<button
						onClick={() => setActiveTab("timeline")}
						className={`tab ${
							activeTab === "timeline" ? "tab-neutral" : "tab-inactive"
						}`}
					>
						Diário
					</button>
					<button
						onClick={() => setActiveTab("contact")}
						className={`tab ${
							activeTab === "contact" ? "tab-neutral" : "tab-inactive"
						}`}
					>
						Perfil
					</button>
				</div>

				{/* Content Area */}
				<div className="min-h-[300px]">
					{activeTab === "timeline" && (
						<div className="space-y-6">
							{/* New Message Input */}
							<form onSubmit={handleSendMessage} className="relative">
								<Textarea
									placeholder={`Escrever mensagem para ${student.name}...`}
									value={newMessage}
									onChange={(e) => setNewMessage(e.target.value)}
									className="pr-12 min-h-[80px] resize-none"
								/>
								<Button
									type="submit"
									variant="primary"
									disabled={sendingMessage || !newMessage.trim()}
									className="absolute bottom-3 right-3 h-8 w-8 !p-0 rounded-full"
								>
									<MessageSquare size={16} />
								</Button>
							</form>

							{/* Timeline */}
							{loadingTimeline ? (
								<div className="text-center py-10 text-gray-400">
									Carregando...
								</div>
							) : feedbacks.length === 0 && posts.length === 0 ? (
								<div className="text-center py-10 text-gray-400 flex flex-col items-center gap-2">
									<MessageSquare size={40} className="opacity-20" />
									<p>Nenhum registro no diário.</p>
								</div>
							) : (
								<div className="space-y-4">
									{[...feedbacks, ...posts]
										.sort((a, b) => {
											const dateA = new Date(
												"createdAt" in a ? a.createdAt : a.date,
											).getTime();
											const dateB = new Date(
												"createdAt" in b ? b.createdAt : b.date,
											).getTime();
											return dateB - dateA;
										})
										.map((item) => {
											// Check if it's a FeedbackEvent (has 'type' and 'description')
											if ("type" in item && "description" in item) {
												const event = item as FeedbackEvent;
												// ... render feedback card ...
												return (
													<div key={event.id} className="list-card relative">
														<div className="flex items-start gap-3">
															<div
																className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-xl ${
																	event.type === "positive"
																		? "bg-[var(--safari-green-light)]"
																		: "bg-orange-100"
																}`}
															>
																{event.description.includes("Tarefa")
																	? "📝"
																	: event.description.includes("Equipe")
																		? "🧩"
																		: event.description.includes("Ajudando")
																			? "🤝"
																			: event.description.includes(
																						"Participando",
																				  )
																				? "🙋"
																				: event.description.includes(
																							"Esforçando",
																					  )
																					? "💪"
																					: "📋"}
															</div>
															<div className="flex-1">
																<div className="flex justify-between items-start">
																	<div>
																		<h4 className="font-bold text-[var(--text-primary)] leading-tight">
																			{event.description}
																		</h4>
																		<span className="text-xs text-[var(--text-muted)] font-medium block mt-1">
																			{new Date(event.date).toLocaleDateString(
																				"pt-BR",
																				{
																					day: "numeric",
																					month: "long",
																					hour: "2-digit",
																					minute: "2-digit",
																				},
																			)}
																		</span>
																	</div>
																	<div
																		className={`font-black text-white rounded-[var(--radius-inner)] h-6 px-2 text-xs flex items-center justify-center ${
																			event.type === "positive"
																				? "bg-[var(--safari-green)]"
																				: "bg-[var(--safari-orange)]"
																		}`}
																	>
																		{event.type === "positive" ? "+1" : "-1"}
																	</div>
																</div>
																{event.comment && (
																	<div className="mt-2 bg-[var(--surface-sunken)] p-2 rounded-lg text-sm text-[var(--text-secondary)]">
																		&quot;{event.comment}&quot;
																	</div>
																)}
															</div>
															<Button
																variant="ghost"
																onClick={(e: React.MouseEvent) => {
																	e.stopPropagation();
																	handleDeleteFeedback(event.id);
																}}
																className="text-[var(--text-muted)] hover:text-red-500 !p-1 h-auto"
															>
																<Trash2 size={16} />
															</Button>
														</div>
													</div>
												);
											} else {
												// It's a Post
												const post = item as Post;
												return (
													<div
														key={post.id}
														className="bg-white border-2 border-[var(--safari-sand-200)] rounded-[var(--radius-outer)] p-4 shadow-sm"
													>
														<div className="flex justify-between items-start mb-2">
															<div className="flex items-center gap-2">
																<div className="w-8 h-8 rounded-full bg-[var(--safari-blue-light)] flex items-center justify-center text-[var(--safari-blue)] font-bold">
																	P
																</div>
																<div>
																	<span className="text-sm font-bold block text-[var(--text-primary)]">
																		Professor(a)
																	</span>
																	<span className="text-xs text-[var(--text-muted)]">
																		{new Date(
																			post.createdAt,
																		).toLocaleDateString("pt-BR", {
																			day: "numeric",
																			month: "long",
																			hour: "2-digit",
																			minute: "2-digit",
																		})}
																	</span>
																</div>
															</div>
															<Button
																variant="ghost"
																onClick={() => handleDeletePost(post.id)}
																className="text-[var(--text-muted)] hover:text-red-500 !p-1 h-auto"
															>
																<Trash2 size={16} />
															</Button>
														</div>
														<p className="text-[var(--text-primary)]">
															{post.content}
														</p>
													</div>
												);
											}
										})}
								</div>
							)}
						</div>
					)}

					{activeTab === "contact" && (
						<form onSubmit={handleSaveContact} className="space-y-6 pt-2">
							<Input
								label="Nome Completo"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="border-[var(--safari-green)]"
							/>

							<div>
								<label
									htmlFor="student-whatsapp"
									className="text-sm font-bold text-[var(--safari-green)] mb-2 block"
								>
									WhatsApp
								</label>
								<div className="relative">
									<Phone
										className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
										size={20}
									/>
									<input
										id="student-whatsapp"
										type="text"
										value={whatsapp}
										onChange={(e) => setWhatsapp(e.target.value)}
										placeholder="+55 (99) 9 9999-9999"
										className="input-field pl-12 border-[var(--safari-green)]"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="student-email"
									className="text-sm font-bold text-[var(--safari-green)] mb-2 block"
								>
									E-mail
								</label>
								<div className="relative">
									<Mail
										className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
										size={20}
									/>
									<input
										id="student-email"
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder="email@exemplo.com"
										className="input-field pl-12 border-[var(--safari-green)]"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="student-birthday"
									className="text-sm font-bold text-[var(--safari-green)] mb-2 block"
								>
									Aniversário
								</label>
								<div className="relative">
									<Cake
										className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
										size={20}
									/>
									<input
										id="student-birthday"
										type="text"
										value={birthday}
										onChange={(e) => setBirthday(e.target.value)}
										placeholder="Ex: 14 fevereiro 2019"
										className="input-field pl-12 border-[var(--safari-green)]"
									/>
								</div>
							</div>

							<div className="flex gap-3 pt-6">
								{onDelete && (
									<Button
										type="button"
										variant="accent"
										onClick={() => {
											if (confirm("Tem certeza que deseja excluir este aluno?"))
												onDelete();
										}}
										className="p-4 rounded-xl"
									>
										<Trash2 size={24} />
									</Button>
								)}
								<Button
									type="submit"
									variant="primary"
									className="flex-1 font-bold text-lg p-4 h-auto"
								>
									<Save size={24} /> Salvar Alterações
								</Button>
							</div>
						</form>
					)}
				</div>
			</div>
		</Modal>
	);
}
