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
import { Student, FeedbackEvent } from "../lib/types";
import EmojiPicker from "./EmojiPicker";
import { api } from "../lib/api";
import { toast } from "sonner";
import { Modal } from "./ui/Modal";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
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
	const [activeTab, setActiveTab] = useState<"feedback" | "contact">(
		"feedback",
	);
	const [feedbacks, setFeedbacks] = useState<FeedbackEvent[]>([]);
	const [loadingFeedbacks, setLoadingFeedbacks] = useState(false);

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
			setActiveTab("feedback"); // Default tab

			// Fetch Feedbacks
			fetchFeedbacks(student.id);
		}
	}, [isOpen, student]);

	const fetchFeedbacks = async (studentId: string) => {
		setLoadingFeedbacks(true);
		try {
			const data = await api.get<FeedbackEvent[]>(`/feedback/${studentId}`);
			setFeedbacks(data);
		} catch {
			toast.error("Erro ao carregar histórico de feedback");
		} finally {
			setLoadingFeedbacks(false);
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
		toast("Tem certeza que deseja apagar este feedback?", {
			action: {
				label: "Apagar",
				onClick: () => executeDeleteFeedback(feedbackId),
			},
			cancel: {
				label: "Cancelar",
				onClick: () => {},
			},
			duration: 5000,
		});
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
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			headerColorClass="hidden" // Hiding default header to use Custom Green Header
			maxWidth="md"
			hideCloseButton={true}
		>
			{/* Content Container with Standard Padding */}
			<div className="p-6">
				{/* Custom Header - Safari Green */}
				<div className="bg-[var(--safari-green)] pt-8 pb-12 px-6 flex flex-col items-center relative shrink-0 -mx-6 -mt-6 rounded-b-[2.5rem] shadow-lg mb-6">
					<Button
						variant="accent"
						onClick={onClose}
						className="absolute top-5 right-5 p-3 rounded-[var(--radius-inner)] !border-b-4 active:!border-b-0 shadow-lg z-20"
						aria-label="Fechar"
					>
						<X size={26} strokeWidth={3} />
					</Button>

					<div
						className="relative group cursor-pointer"
						onClick={() => setShowEmojiPicker(!showEmojiPicker)}
					>
						<div
							className="w-28 h-28 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-6xl bg-white"
							style={{ backgroundColor: avatarColor }}
						>
							{getAnimalAvatar(animalAvatar)}
						</div>
						<div className="absolute -bottom-3 -right-2 bg-white px-3 py-1 rounded-full shadow-md text-xs font-bold text-[var(--safari-green)]">
							Mudar
						</div>
					</div>

					{showEmojiPicker && (
						<div className="absolute top-full z-50 mt-2">
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

					<h2 className="text-2xl font-black text-white mt-4 text-center leading-tight tracking-wide drop-shadow-md px-8">
						{name}
					</h2>
				</div>

				{/* Tabs */}
				<div className="flex gap-4 relative z-10 shrink-0 px-2 mb-4">
					<button
						onClick={() => setActiveTab("feedback")}
						className={`tab ${
							activeTab === "feedback" ? "tab-neutral" : "tab-inactive"
						}`}
					>
						Feedback
					</button>
					<button
						onClick={() => setActiveTab("contact")}
						className={`tab ${
							activeTab === "contact" ? "tab-neutral" : "tab-inactive"
						}`}
					>
						Contato
					</button>
				</div>

				{/* Content Area */}
				<div className="min-h-[300px]">
					{activeTab === "feedback" && (
						<div className="space-y-4">
							{loadingFeedbacks ? (
								<div className="text-center py-10 text-gray-400">
									Carregando...
								</div>
							) : feedbacks.length === 0 ? (
								<div className="text-center py-10 text-gray-400 flex flex-col items-center gap-2">
									<MessageSquare size={40} className="opacity-20" />
									<p>Nenhum feedback registrado.</p>
								</div>
							) : (
								feedbacks.map((event) => (
									<div key={event.id} className="list-card">
										<div className="flex items-center gap-3">
											<div
												className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${event.type === "positive" ? "bg-[var(--safari-green-light)]" : "bg-orange-100"}`}
											>
												{event.description.includes("Tarefa")
													? "📝"
													: event.description.includes("Equipe")
														? "🧩"
														: event.description.includes("Ajudando")
															? "🤝"
															: event.description.includes("Participando")
																? "🙋"
																: event.description.includes("Esforçando")
																	? "💪"
																	: "📋"}
											</div>
											<div>
												<h4 className="font-bold text-[var(--text-primary)] leading-tight">
													{event.description}
												</h4>
												<span className="text-xs text-[var(--text-muted)] font-medium">
													{new Date(event.date).toLocaleDateString("pt-BR", {
														day: "numeric",
														month: "short",
														year: "numeric",
													})}
												</span>
											</div>
										</div>
										<div className="flex gap-2 items-center">
											<div
												className={`font-black text-white rounded-[var(--radius-inner)] h-9 w-12 flex items-center justify-center ${event.type === "positive" ? "bg-[var(--safari-green)]" : "bg-[var(--safari-orange)]"}`}
											>
												{event.type === "positive" ? "+1" : "-1"}
											</div>
											<Button
												variant="accent"
												onClick={(e) => {
													e.stopPropagation();
													e.preventDefault();
													handleDeleteFeedback(event.id);
												}}
												className="!p-0 h-9 w-12"
												title="Apagar"
											>
												<Trash2 size={20} strokeWidth={3} />
											</Button>
										</div>
									</div>
								))
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
