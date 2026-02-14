"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { FamilyStudent } from "@/lib/types";
import { getAnimalAvatar } from "@/utils/getAnimalAvatar";
import {
	LogOut,
	Trophy,
	AlertCircle,
	Calendar,
	MessageCircle,
	Baby,
	Clock,
	CheckCircle2,
	AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function FamilyPage() {
	const router = useRouter();
	const [students, setStudents] = useState<FamilyStudent[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchFamilyData = async () => {
			const token = localStorage.getItem("token");
			if (!token) {
				router.push("/login");
				return;
			}

			try {
				const response = await api.getFamilyView(token);
				setStudents(response.students);
			} catch (err: any) {
				console.error("Erro ao carregar dados da família:", err);
				if (err.status === 401 || err.message === "Invalid token") {
					localStorage.removeItem("token");
					localStorage.removeItem("userRole");
					router.push("/login");
					return;
				}
				setError("Falha ao carregar dados. Tente novamente.");
			} finally {
				setLoading(false);
			}
		};

		fetchFamilyData();
	}, [router]);

	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("userRole");
		router.push("/login");
	};

	if (loading) {
		return (
			<div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--safari-green)]"></div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="min-h-screen bg-[var(--background)] flex items-center justify-center p-4">
				<div className="bg-[var(--surface-raised)] border border-red-200 rounded-lg p-6 max-w-md w-full text-center shadow-lg">
					<AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
					<h3 className="text-lg font-bold text-gray-900 mb-2">Erro</h3>
					<p className="text-gray-600 mb-4">{error}</p>
					<Button onClick={() => window.location.reload()} variant="primary">
						Tentar Novamente
					</Button>
				</div>
			</div>
		);
	}

	const selectedDate = new Date();

	return (
		<div className="min-h-screen bg-[var(--background)] pb-10">
			{/* Sticky Glass Header */}
			<header className="sticky top-0 z-50 bg-[var(--surface-glass)] backdrop-blur-[var(--blur-glass)] border-b border-[var(--border-glass)] shadow-[var(--shadow-glass)] mb-8 transition-all">
				<div className="layout-container py-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<div className="text-2xl">🦁</div>
							<div>
								<h1 className="text-xl font-bold text-[var(--safari-green)] leading-none">
									Safari Escolar
								</h1>
								<p className="text-xs text-[var(--safari-green)] opacity-80 font-medium">
									Área da Família
								</p>
							</div>
						</div>

						<div className="flex items-center gap-3">
							<div className="hidden sm:flex items-center gap-2 bg-[var(--surface-raised)] rounded-[var(--radius-inner)] px-3 py-1.5 shadow-sm border border-[var(--safari-stone-200)]">
								<Calendar size={16} className="text-[var(--safari-green)]" />
								<span className="font-bold text-[var(--safari-green)] text-sm">
									{selectedDate.toLocaleDateString("pt-BR", {
										weekday: "short",
										day: "2-digit",
										month: "short",
									})}
								</span>
							</div>
							<Button
								variant="ghost"
								onClick={handleLogout}
								className="text-red-500 hover:bg-red-50 hover:text-red-600"
								title="Sair"
							>
								<LogOut size={20} />
							</Button>
						</div>
					</div>
				</div>
			</header>

			<main className="layout-container space-y-8">
				{students.length === 0 ? (
					<div className="text-center py-12">
						<Baby className="mx-auto h-16 w-16 text-gray-300 mb-4" />
						<h2 className="text-xl font-semibold text-gray-600">
							Nenhum aluno vinculad
						</h2>
						<p className="text-gray-500">
							Entre em contato com a escola para vincular seus filhos.
						</p>
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
						{students.map((student) => (
							<div
								key={student.id}
								className="card bg-white rounded-[var(--radius-outer)] shadow-[var(--shadow-card)] overflow-hidden border border-[var(--safari-stone-200)] hover:shadow-lg transition-shadow duration-300"
							>
								{/* Card Header - Student Info */}
								<div className="bg-[var(--surface-raised)] p-6 border-b border-[var(--safari-stone-200)]">
									<div className="flex items-center gap-4">
										<div
											className="relative flex items-center justify-center w-20 h-20 rounded-full text-4xl shadow-md border-4 border-white"
											style={{
												backgroundColor: student.avatarColor || "#e2e8f0",
											}}
										>
											{getAnimalAvatar(student.animalAvatar)}
											<div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm">
												<div
													className={`w-4 h-4 rounded-full border-2 border-white ${
														student.recentAttendances[0]?.status === "PRESENT"
															? "bg-green-500"
															: student.recentAttendances[0]?.status ===
																  "ABSENT"
																? "bg-red-500"
																: "bg-gray-300"
													}`}
													title={
														student.recentAttendances[0]?.status === "PRESENT"
															? "Presente hoje"
															: "Ausente hoje"
													}
												/>
											</div>
										</div>
										<div className="flex-1">
											<h2 className="text-2xl font-bold text-[var(--safari-green)] tracking-tight">
												{student.name}
											</h2>
											<p className="text-sm text-gray-500 font-medium">
												{student.className} • Prof. {student.teacherName}
											</p>
										</div>
									</div>

									{/* Stats Row */}
									<div className="flex items-center gap-3 mt-6">
										<div className="flex-1 bg-white rounded-lg p-2 border border-gray-100 shadow-sm flex flex-col items-center">
											<span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">
												Presença
											</span>
											<span className="text-lg font-black text-gray-700">
												{student.attendanceRate}%
											</span>
										</div>
										<div className="flex-1 bg-green-50 rounded-lg p-2 border border-green-100 shadow-sm flex flex-col items-center">
											<span className="text-[10px] uppercase text-green-600 font-bold tracking-wider">
												Elogios
											</span>
											<span className="text-lg font-black text-green-700">
												{student.positiveEvents}
											</span>
										</div>
										<div className="flex-1 bg-orange-50 rounded-lg p-2 border border-orange-100 shadow-sm flex flex-col items-center">
											<span className="text-[10px] uppercase text-orange-600 font-bold tracking-wider">
												Atenção
											</span>
											<span className="text-lg font-black text-orange-700">
												{student.negativeEvents}
											</span>
										</div>
									</div>

									{/* Attendance Visual History */}
									<div className="px-6 pb-2 mt-4">
										<h3 className="text-[10px] uppercase text-gray-400 font-bold tracking-wider mb-2">
											Histórico de Frequência (30 dias)
										</h3>
										<div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
											{student.recentAttendances.length > 0 ? (
												student.recentAttendances.map((att, index) => (
													<div
														key={index}
														className="flex flex-col items-center min-w-[3rem]"
													>
														<div
															className={`w-8 h-8 rounded-full flex items-center justify-center text-white mb-1 shadow-sm ${
																att.status === "PRESENT"
																	? "bg-green-500"
																	: att.status === "ABSENT"
																		? "bg-red-500"
																		: "bg-yellow-500"
															}`}
															title={
																att.status === "PRESENT"
																	? "Presente"
																	: att.status === "ABSENT"
																		? "Ausente"
																		: "Atrasado"
															}
														>
															{att.status === "PRESENT" && (
																<CheckCircle2 size={16} />
															)}
															{att.status === "ABSENT" && (
																<AlertCircle size={16} />
															)}
															{att.status === "LATE" && <Clock size={16} />}
														</div>
														<span className="text-[10px] font-medium text-gray-500 uppercase">
															{new Date(att.date)
																.toLocaleDateString("pt-BR", {
																	weekday: "short",
																})
																.replace(".", "")}
														</span>
														<span className="text-[9px] text-gray-400">
															{new Date(att.date).toLocaleDateString("pt-BR", {
																day: "2-digit",
																month: "2-digit",
															})}
														</span>
													</div>
												))
											) : (
												<span className="text-sm text-gray-400 italic">
													Sem dados recentes
												</span>
											)}
										</div>
									</div>
								</div>

								{/* Content Body */}
								<div className="divide-y divide-gray-100">
									{/* Feedback History */}
									<div className="p-5">
										<h3 className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
											<Clock size={16} className="text-[var(--safari-green)]" />
											Histórico de Feedbacks
										</h3>
										<div className="space-y-2 max-h-52 overflow-y-auto pr-2 custom-scrollbar">
											{student.recentFeedbackEvents.length > 0 ? (
												student.recentFeedbackEvents.map((event) => (
													<div
														key={event.id}
														className={`p-3 rounded-lg border flex gap-3 ${
															event.type === "positive"
																? "bg-green-50/50 border-green-100"
																: "bg-orange-50/50 border-orange-100"
														}`}
													>
														<div
															className={`mt-0.5 ${
																event.type === "positive"
																	? "text-green-600"
																	: "text-orange-600"
															}`}
														>
															{event.type === "positive" ? (
																<CheckCircle2 size={16} />
															) : (
																<AlertTriangle size={16} />
															)}
														</div>
														<div className="flex-1">
															<div className="flex justify-between items-start">
																<span className="text-sm font-semibold text-gray-800">
																	{event.description}
																</span>
																<span className="text-[10px] text-gray-400 whitespace-nowrap ml-2">
																	{new Date(event.date).toLocaleDateString(
																		"pt-BR",
																		{ day: "2-digit", month: "2-digit" },
																	)}
																</span>
															</div>
															{event.comment && (
																<p className="text-xs text-gray-600 mt-1 italic leading-relaxed">
																	&quot;{event.comment}&quot;
																</p>
															)}
														</div>
													</div>
												))
											) : (
												<div className="py-6 text-center text-gray-400 text-sm italic">
													Nenhum feedback registrado recentemente.
												</div>
											)}
										</div>
									</div>

									{/* Mural & Diário */}
									<div className="p-5 bg-gray-50/30">
										<h3 className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
											<MessageCircle
												size={16}
												className="text-[var(--safari-blue)]"
											/>
											Mural & Diário
										</h3>
										<div className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
											{student.recentPosts && student.recentPosts.length > 0 ? (
												student.recentPosts.map((post) => (
													<div
														key={post.id}
														className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:border-[var(--safari-blue)] transition-colors group"
													>
														<div className="flex justify-between items-center mb-2">
															<span
																className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${
																	post.type === "MURAL"
																		? "bg-blue-100 text-blue-700"
																		: "bg-purple-100 text-purple-700"
																}`}
															>
																{post.type === "MURAL"
																	? "Mural da Turma"
																	: "Diário do Aluno"}
															</span>
															<span className="text-[10px] text-gray-400 font-medium">
																{new Date(post.createdAt).toLocaleDateString(
																	"pt-BR",
																)}
															</span>
														</div>
														<p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
															{post.content}
														</p>
														<div className="mt-3 flex items-center justify-end text-[10px] text-gray-400 font-medium">
															<span>Prof. {post.teacher?.name}</span>
														</div>
													</div>
												))
											) : (
												<div className="py-6 text-center text-gray-400 text-sm italic">
													Nenhuma postagem no mural.
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</main>
		</div>
	);
}
