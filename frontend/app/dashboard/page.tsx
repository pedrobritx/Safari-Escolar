"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { User, Student, DashboardData } from "@/lib/types";
import FeedbackModal, { FeedbackItem } from "@/components/FeedbackModal";
import FeedbackEditorModal from "@/components/FeedbackEditorModal";
import StudentDetailModal from "@/components/StudentDetailModal";
import StudentFormModal from "@/components/StudentFormModal";
import Calendar from "@/components/Calendar";
import {
	LayoutGrid,
	List,
	Plus,
	Trash,
	Download,
	GraduationCap,
	Settings,
	CheckSquare,
} from "lucide-react";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { toast } from "sonner";
import { useDashboard } from "@/hooks/useDashboard";
import { StudentCard } from "@/components/StudentCard";
import { ManageClassTeachersModal } from "@/components/ManageClassTeachersModal";

const DEFAULT_POSITIVE_FEEDBACKS: FeedbackItem[] = [
	{ id: "task_ok", label: "Tarefa em Dia", icon: "📝", points: 1 },
	{ id: "participating", label: "Participando", icon: "🙋", points: 1 },
	{ id: "helping", label: "Ajudando os Outros", icon: "🤝", points: 1 },
	{ id: "teamwork", label: "Trabalho em Equipe", icon: "🧩", points: 1 },
	{ id: "effort", label: "Se Esforçando", icon: "💪", points: 1 },
];

const DEFAULT_NEGATIVE_FEEDBACKS: FeedbackItem[] = [
	{ id: "no_collab", label: "Não Colabora", icon: "🚫", points: -1 },
	{ id: "late_task", label: "Tarefa Atrasada", icon: "⏰", points: -1 },
	{ id: "disrupting", label: "Atrapalhando a Aula", icon: "🗣️", points: -1 },
];

export default function DashboardPage() {
	const router = useRouter();
	const [user, setUser] = useState<User | null>(null);
	const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
	const [sortOption, setSortOption] = useState<
		"firstNameAsc" | "firstNameDesc" | "lastNameAsc" | "lastNameDesc"
	>("firstNameAsc");
	const [currentDashboardData, setCurrentDashboardData] =
		useState<DashboardData | null>(null);
	const [isManageTeachersModalOpen, setIsManageTeachersModalOpen] =
		useState(false);

	// Custom Hook
	const {
		dashboardData,
		classes,
		selectedClass,
		setSelectedClass,
		loading,
		selectedDate,
		setSelectedDate,
		refreshData,
		setClasses,
		setDashboardData,
	} = useDashboard(user);

	// Estado do Modal de Comportamento
	const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
	const [currentFeedbackStudent, setCurrentFeedbackStudent] = useState<{
		id: string;
		name: string;
	} | null>(null);

	// Estado do Editor de Feedback
	const [feedbackEditorOpen, setFeedbackEditorOpen] = useState(false);
	const [positiveFeedbacks, setPositiveFeedbacks] = useState<FeedbackItem[]>(
		DEFAULT_POSITIVE_FEEDBACKS,
	);
	const [negativeFeedbacks, setNegativeFeedbacks] = useState<FeedbackItem[]>(
		DEFAULT_NEGATIVE_FEEDBACKS,
	);

	// Estado do Formulário de Aluno
	const [studentFormOpen, setStudentFormOpen] = useState(false);
	const [studentFormMode, setStudentFormMode] = useState<"create" | "edit">(
		"create",
	);
	const [editingStudentData, setEditingStudentData] = useState<Student | null>(
		null,
	);

	useEffect(() => {
		// Carregar comportamentos personalizados do armazenamento local se disponível
		const savedPositive = localStorage.getItem("safari_positive_feedbacks");
		const savedNegative = localStorage.getItem("safari_negative_feedbacks");

		if (savedPositive) setPositiveFeedbacks(JSON.parse(savedPositive));
		if (savedNegative) setNegativeFeedbacks(JSON.parse(savedNegative));
	}, []);

	const handleUpdateFeedbacks = (
		type: "positive" | "negative",
		updatedList: FeedbackItem[],
	) => {
		if (type === "positive") {
			setPositiveFeedbacks(updatedList);
			localStorage.setItem(
				"safari_positive_feedbacks",
				JSON.stringify(updatedList),
			);
		} else {
			setNegativeFeedbacks(updatedList);
			localStorage.setItem(
				"safari_negative_feedbacks",
				JSON.stringify(updatedList),
			);
		}
	};

	useEffect(() => {
		const token = localStorage.getItem("token");
		const userData = localStorage.getItem("user");

		if (!token || !userData) {
			router.push("/login");
			return;
		}

		const parsedUser = JSON.parse(userData);
		if (parsedUser.role === "FAMILY") {
			router.push("/family");
			return;
		}

		setUser(parsedUser);
	}, [router]);

	//Updates class summary when dahboard has any update
	useEffect(() => {
		const currentClassDashboard = dashboardData.find(
			(dashboard) => dashboard.classId === selectedClass?.id,
		);

		if (currentClassDashboard) setCurrentDashboardData(currentClassDashboard);
	}, [dashboardData, selectedClass]);

	const sortStudents = (students: Student[] | undefined) => {
		if (!students) return [];

		return [...students].sort((a, b) => {
			const getLastName = (name: string) => {
				const parts = name.trim().split(" ");
				return parts.length > 1 ? parts[parts.length - 1] : parts[0];
			};

			switch (sortOption) {
				case "firstNameAsc":
					return a.name.localeCompare(b.name);
				case "firstNameDesc":
					return b.name.localeCompare(a.name);
				case "lastNameAsc":
					return getLastName(a.name).localeCompare(getLastName(b.name));
				case "lastNameDesc":
					return getLastName(b.name).localeCompare(getLastName(a.name));
				default:
					return 0;
			}
		});
	};

	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		router.push("/login");
	};

	const handleMarkAttendance = async (
		studentId: string,
		status: "PRESENT" | "ABSENT" | "LATE" | "CLEARED",
	) => {
		const token = localStorage.getItem("token");
		if (!token) return;

		// Save previous state for rollback
		const previousClass = selectedClass;
		const previousClasses = classes;

		// Direct assignment, no toggling
		const newStatus = status === "CLEARED" ? null : status;
		const apiStatus = status;

		// Optimistic Update: Update UI immediately
		if (selectedClass) {
			const updatedStudents = selectedClass.students.map((s) =>
				s.id === studentId ? { ...s, todayStatus: newStatus } : s,
			);

			const updatedClass = { ...selectedClass, students: updatedStudents };
			setSelectedClass(updatedClass);

			// Update classes list as well ensure consistency if switching views
			setClasses((prev) =>
				prev.map((c) => (c.id === selectedClass.id ? updatedClass : c)),
			);
		}

		try {
			const formattedDate = selectedDate.toISOString().split("T")[0];
			await api.markAttendance(token, studentId, apiStatus, formattedDate);

			// Show success feedback
			toast.success("Presença marcada!");

			// Fetch only dashboard data to update counts without reloading student list (avoiding race conditions)
			const dashboard = await api.getDashboard(token, formattedDate);
			setDashboardData(dashboard);
		} catch (error) {
			console.error("Error marking attendance:", error);
			// Rollback to previous state
			setSelectedClass(previousClass);
			setClasses(previousClasses);
			toast.error("Erro ao marcar presença. Tente novamente.");
		}
	};

	const handleCreateStudent = async (data: {
		name: string;
		animalAvatar?: string;
		avatarColor?: string;
	}) => {
		const token = localStorage.getItem("token");
		if (!token || !selectedClass) return;

		try {
			await api.createStudent(token, { ...data, classId: selectedClass.id });
			toast.success("Aluno adicionado com sucesso!");
			setStudentFormOpen(false);
			refreshData();
		} catch (error) {
			console.error("Error creating student:", error);
			toast.error("Erro ao adicionar aluno. Tente novamente.");
		}
	};

	const handleDeleteStudent = async () => {
		const token = localStorage.getItem("token");
		if (!token || !editingStudentData) return;

		try {
			await api.deleteStudent(token, editingStudentData.id);
			toast.success("Aluno removido com sucesso!");
			setStudentFormOpen(false);
			setEditingStudentData(null);
			refreshData();
		} catch (error) {
			console.error("Error deleting student:", error);
			toast.error("Erro ao remover aluno. Tente novamente.");
		}
	};

	const openFeedbackModal = (studentId: string, studentName: string) => {
		setCurrentFeedbackStudent({ id: studentId, name: studentName });
		setFeedbackModalOpen(true);
	};

	const handleAddFeedback = async (
		studentId: string,
		type: "positive" | "negative",
		description?: string,
	) => {
		const token = localStorage.getItem("token");
		if (!token) return;

		const finalDescription = description;

		if (!finalDescription) {
			return;
		}

		try {
			const formattedDate = selectedDate.toISOString().split("T")[0];
			await api.addFeedbackEvent(
				token,
				studentId,
				type,
				finalDescription,
				formattedDate,
			);
			toast.success("Feedback registrado!");
			setFeedbackModalOpen(false);
			refreshData();
		} catch (error) {
			console.error("Error adding feedback:", error);
			toast.error("Erro ao registrar feedback. Tente novamente.");
		}
	};

	const handleResetDay = async () => {
		if (
			!confirm(
				"ATENÇÃO: Isso apagará TODOS os registros de presença e feedback desta turma para a data selecionada. Deseja continuar?",
			)
		)
			return;

		const token = localStorage.getItem("token");
		if (!token || !selectedClass) return;

		try {
			const formattedDate = selectedDate.toISOString().split("T")[0];
			await api.resetDay(token, formattedDate, selectedClass.id);
			toast.success("Dados do dia reiniciados com sucesso!");
			refreshData();
		} catch (error) {
			console.error("Error resetting day:", error);
			toast.error("Erro ao reiniciar o dia");
		}
	};

	const handleUpdateStudent = async (data: {
		name?: string;
		animalAvatar?: string;
		avatarColor?: string;
		whatsapp?: string;
		email?: string;
		birthday?: string;
	}) => {
		const token = localStorage.getItem("token");
		if (!token || !editingStudentData) return;

		try {
			await api.updateStudent(token, editingStudentData.id, data);
			toast.success("Aluno atualizado com sucesso!");
			setStudentFormOpen(false);
			setEditingStudentData(null);
			refreshData();
		} catch (error) {
			console.error("Error updating student:", error);
			toast.error("Erro ao atualizar aluno. Tente novamente.");
		}
	};

	const handleMarkAllPresent = async () => {
		if (!selectedClass) return;

		const confirm = window.confirm(
			`Marcar todos os ${selectedClass.students.length} alunos como PRESENTES?`,
		);
		if (!confirm) return;

		const token = localStorage.getItem("token");
		if (!token) return;

		try {
			const formattedDate = selectedDate.toISOString().split("T")[0];
			const promises = selectedClass.students.map((student) =>
				api.markAttendance(token, student.id, "PRESENT", formattedDate),
			);

			await Promise.all(promises);
			toast.success("Todos marcados como presentes!");
			refreshData();
		} catch (error) {
			console.error("Error marking all present:", error);
			toast.error("Erro ao marcar presenças. Tente novamente.");
		}
	};

	if (loading) {
		return (
			<div className="min-h-screen bg-background flex items-center justify-center">
				<div className="text-xl font-bold text-primary animate-pulse">
					Carregando Mapa do Safari...
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			{/* 🦁 NEW STICKY HEADER (Skeuo-Glass) */}
			<header className="sticky top-0 z-50 bg-[var(--surface-glass)] backdrop-blur-[var(--blur-glass)] border-b border-[var(--border-glass)] shadow-[var(--shadow-glass)] transition-all mb-8">
				<div className="layout-container py-3 space-y-3">
					{/* Top Row: Brand + Controls */}
					<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
						{/* Left: Brand & Class Selector */}
						<div className="flex items-center gap-4 w-full sm:w-auto">
							<div className="hidden md:flex items-center gap-2 text-[var(--safari-green)] opacity-80 hover:opacity-100 transition-opacity">
								<span className="text-xl">🦁</span>
							</div>

							<div className="flex-1 sm:w-[280px]">
								<Select
									value={selectedClass?.id || ""}
									onChange={(val) => {
										const cls = classes.find((c) => c.id === val);
										setSelectedClass(cls || null);
									}}
									options={classes.map((cls) => ({
										value: cls.id,
										label: cls.name,
									}))}
									placeholder="Selecione a turma..."
								/>
							</div>
						</div>

						<div className="flex w-full items-center justify-between gap-2 sm:contents">
							{/* Center: Date Display (Loud) */}
							<div className="flex flex-col sm:flex-row items-center gap-1 bg-[var(--surface-raised)] rounded-[var(--radius-inner)] px-4 py-1.5 shadow-[var(--shadow-hardware)] border border-[var(--safari-stone-200)] flex-1 sm:flex-none justify-center sm:justify-start min-h-[42px]">
								<span className="font-bold text-[var(--safari-green)] text-lg whitespace-nowrap leading-none">
									{selectedDate.toLocaleDateString("pt-BR", {
										day: "2-digit",
										month: "short",
									})}
								</span>
								{/* Mobile Stats (Compact) */}
								{currentDashboardData && (
									<div className="flex sm:hidden gap-2 text-[10px] font-medium opacity-80 mt-1 sm:mt-0">
										<span className="text-[var(--safari-green)]">
											{currentDashboardData.todayAttendance} P
										</span>
										<span className="text-[var(--safari-orange)]">
											{currentDashboardData.todayLate} A
										</span>
										<span className="text-[var(--safari-stone-400)]">
											{currentDashboardData.totalStudents -
												currentDashboardData.todayAttendance}{" "}
											F
										</span>
									</div>
								)}
							</div>

							{/* Right: Hardware Controls & User */}
							<div className="flex items-center gap-3">
								{/* Hardware Control Cluster */}
								<div className="flex items-center bg-[var(--safari-stone-100)] rounded-[var(--radius-inner)] p-1 shadow-[var(--shadow-hardware)] border border-[var(--safari-stone-200)]">
									<Button
										variant="ghost"
										className="h-8 w-8 p-0 rounded-full hover:bg-white hover:text-[var(--safari-green)] hover:shadow-sm"
										title="Exportar CSV"
										onClick={async () => {
											const token = localStorage.getItem("token");
											if (token) {
												try {
													await api.exportStudents(token);
													toast.success("Alunos exportados!");
												} catch {
													toast.error("Erro ao exportar");
												}
											}
										}}
									>
										<Download size={16} />
									</Button>

									<div className="w-[1px] h-4 bg-[var(--safari-stone-300)] mx-1"></div>

									{user?.role &&
										["COORDINATOR", "ADMIN"].includes(user.role) && (
											<>
												<Button
													variant="ghost"
													onClick={() => setIsManageTeachersModalOpen(true)}
													className="h-8 w-8 p-0 rounded-full hover:bg-white hover:text-[var(--text-primary)] hover:shadow-sm"
													title="Professores"
												>
													<GraduationCap size={16} />
												</Button>
												<div className="w-[1px] h-4 bg-[var(--safari-stone-300)] mx-1"></div>
											</>
										)}

									<Button
										variant="ghost"
										onClick={handleResetDay}
										className="h-8 w-8 p-0 rounded-full hover:bg-[var(--safari-orange-light)] hover:text-[var(--safari-orange)]"
										title="Reiniciar Dia"
									>
										<Trash size={16} />
									</Button>
								</div>

								{/* User Profile */}
								<div className="flex items-center gap-3 pl-3 border-l border-[var(--safari-stone-300)]/50">
									<div className="text-right hidden sm:block">
										<p className="text-xs font-bold text-[var(--text-primary)] leading-tight">
											{user?.name}
										</p>
										<p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
											{user?.role}
										</p>
									</div>
									<Button
										onClick={handleLogout}
										variant="ghost"
										className="h-8 w-8 p-0"
									>
										<div className="w-8 h-8 rounded-full bg-[var(--safari-stone-200)] flex items-center justify-center border border-[var(--safari-stone-300)] hover:border-[var(--safari-orange)] transition-colors">
											<span className="text-xs">🚪</span>
										</div>
									</Button>
								</div>
							</div>
						</div>
					</div>

					{/* Bottom Row: Attendance Status Strip */}
					{currentDashboardData && (
						<div className="hidden sm:flex flex-col sm:flex-row items-center gap-4 bg-[var(--surface-raised)]/50 rounded-[var(--radius-outer)] p-2 px-4 border border-[var(--safari-stone-200)]/50">
							<span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wide min-w-fit hidden sm:inline">
								Status do Dia:
							</span>

							{/* Progress Bar */}
							<div className="flex-1 w-full bg-[var(--safari-stone-200)] h-2.5 rounded-full overflow-hidden shadow-inner relative group">
								<div
									className="bg-[var(--safari-green)] h-full transition-all duration-500 rounded-full"
									style={{ width: `${currentDashboardData.attendanceRate}%` }}
								></div>
								{/* Tooltip on hover */}
								<div className="absolute top-[-24px] left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
									{currentDashboardData.attendanceRate.toFixed(1)}% Presentes
								</div>
							</div>

							{/* Counters */}
							{/* Counters (Desktop Only) */}
							<div className="hidden sm:flex items-center gap-4 text-xs font-medium">
								<div className="flex items-center gap-1.5" title="Presentes">
									<div className="w-2 h-2 rounded-full bg-[var(--safari-green)]"></div>
									<span className="text-[var(--text-primary)]">
										{currentDashboardData.todayAttendance}{" "}
										<span className="text-[var(--text-muted)]">Pres.</span>
									</span>
								</div>
								<div className="flex items-center gap-1.5" title="Atrasados">
									<div className="w-2 h-2 rounded-full bg-[var(--safari-orange)]"></div>
									<span className="text-[var(--text-primary)]">
										{currentDashboardData.todayLate}{" "}
										<span className="text-[var(--text-muted)]">Atras.</span>
									</span>
								</div>
								<div className="flex items-center gap-1.5" title="Faltantes">
									<div className="w-2 h-2 rounded-full bg-[var(--safari-stone-400)]"></div>
									<span className="text-[var(--text-primary)]">
										{currentDashboardData.totalStudents -
											currentDashboardData.todayAttendance}{" "}
										<span className="text-[var(--text-muted)]">Falt.</span>
									</span>
								</div>
							</div>
						</div>
					)}
				</div>
			</header>

			<main className="layout-container py-8">
				{/* Seleção de Turma */}

				{/* Cartões do Dashboard e Calendário */}
				<div className="grid-dashboard mb-8">
					{/* Cartão de Resumo */}
					<div className="lg:col-span-1">
						{currentDashboardData && (
							<Card
								key={currentDashboardData.classId}
								className="h-full bg-[var(--surface-raised)]"
							>
								<CardBody>
									<h3 className="text-xl font-bold text-[var(--safari-green)] mb-4 flex items-center gap-2">
										🏕️ {currentDashboardData.className}
									</h3>
									<div className="space-y-3 text-sm font-medium">
										<div className="flex justify-between p-3 bg-[var(--surface-raised)] rounded-[var(--radius-outer)] border border-[var(--safari-stone-200)]">
											<span className="text-[var(--text-muted)]">
												Total de Alunos:
											</span>
											<span className="font-bold text-[var(--safari-green)]">
												{currentDashboardData.totalStudents}
											</span>
										</div>
										<div className="flex justify-between p-3 bg-[var(--surface-raised)] rounded-[var(--radius-outer)] border border-[var(--safari-stone-200)]">
											<span className="text-[var(--text-muted)]">
												Presentes:
											</span>
											<span className="font-bold text-[var(--safari-green)]">
												{currentDashboardData.todayAttendance}
											</span>
										</div>
										<div className="flex justify-between p-3 bg-[var(--surface-raised)] rounded-[var(--radius-outer)] border border-[var(--safari-stone-200)]">
											<span className="text-[var(--text-muted)]">
												Atrasados:
											</span>
											<span className="font-bold text-[var(--safari-orange)]">
												{currentDashboardData.todayLate}
											</span>
										</div>
										<div className="flex justify-between p-3 bg-[var(--surface-raised)] rounded-[var(--radius-outer)] border border-[var(--safari-stone-200)]">
											<span className="text-[var(--text-muted)]">
												Taxa de Presença:
											</span>
											<span className="font-bold text-[var(--safari-green)]">
												{currentDashboardData.attendanceRate.toFixed(1)}%
											</span>
										</div>
										<div className="flex justify-between p-3 bg-[var(--surface-raised)] rounded-[var(--radius-outer)] border border-[var(--safari-stone-200)]">
											<span className="text-[var(--text-muted)]">
												Feedbacks Positivos:
											</span>
											<span className="font-bold text-[var(--safari-green)]">
												+{currentDashboardData.todayPositiveEvents}
											</span>
										</div>
										<div className="flex justify-between p-3 bg-[var(--surface-raised)] rounded-[var(--radius-outer)] border border-[var(--safari-stone-200)]">
											<span className="text-[var(--text-muted)]">
												Feedbacks Construtivos:
											</span>
											<span className="font-bold text-[var(--safari-orange)]">
												-{currentDashboardData.todayNegativeEvents}
											</span>
										</div>
									</div>
								</CardBody>
							</Card>
						)}
					</div>

					{/* Calendário */}
					<div className="lg:col-span-2">
						<Calendar
							selectedDate={selectedDate}
							onDateChange={setSelectedDate}
						/>
					</div>
				</div>

				{/* Lista de Alunos */}
				{selectedClass && (
					<Card>
						<CardHeader className="bg-[var(--safari-green-light)]/50 border-b border-[var(--safari-stone-200)]">
							<h2 className="text-xl font-bold text-[var(--safari-green)]">
								{selectedClass.name} - Exploradores
							</h2>
							<div className="flex gap-2">
								<Button
									variant="ghost"
									onClick={handleMarkAllPresent}
									className="bg-white px-3 py-2 h-[42px] border border-[var(--safari-stone-200)] hover:border-[var(--safari-green)] hover:text-[var(--safari-green)] shadow-[var(--shadow-hardware)] mr-2"
									title="Marcar Todos Presentes"
								>
									<CheckSquare size={18} />
									<span className="hidden sm:inline">Marcar Todos</span>
								</Button>

								<Button
									variant="ghost"
									onClick={() => {
										setStudentFormMode("create");
										setEditingStudentData(null);
										setStudentFormOpen(true);
									}}
									className="bg-white px-3 py-2 h-[42px] border border-[var(--safari-stone-200)] hover:border-[var(--safari-green)] hover:text-[var(--safari-green)] shadow-[var(--shadow-hardware)] mr-2"
								>
									<Plus size={20} />
									Adicionar Aluno
								</Button>
								<div className="w-[180px] mr-2">
									<Select
										value={sortOption}
										onChange={(val) => setSortOption(val as any)}
										options={[
											{ value: "firstNameAsc", label: "Nome (A-Z)" },
											{ value: "firstNameDesc", label: "Nome (Z-A)" },
											{ value: "lastNameAsc", label: "Sobrenome (A-Z)" },
											{ value: "lastNameDesc", label: "Sobrenome (Z-A)" },
										]}
									/>
								</div>
								<Button
									variant={viewMode === "grid" ? "primary" : "ghost"}
									onClick={() => setViewMode("grid")}
									className="p-2 h-[42px] w-[42px] flex items-center justify-center"
									title="Visualização em Grade"
								>
									<LayoutGrid size={20} />
								</Button>
								<Button
									variant={viewMode === "list" ? "primary" : "ghost"}
									onClick={() => setViewMode("list")}
									className="p-2 h-[42px] w-[42px] flex items-center justify-center"
									title="Visualização em Lista"
								>
									<List size={20} />
								</Button>
							</div>
						</CardHeader>

						<div
							className={
								viewMode === "list"
									? "divide-y divide-[var(--safari-stone-200)]"
									: "p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
							}
						>
							{sortStudents(selectedClass.students).map((student) => (
								<StudentCard
									key={student.id}
									student={student}
									viewMode={viewMode}
									onEdit={(s) => {
										setEditingStudentData(s);
										setStudentFormMode("edit");
										setStudentFormOpen(true);
									}}
									onAttendanceChange={handleMarkAttendance}
									onOpenFeedback={openFeedbackModal}
								/>
							))}
						</div>
					</Card>
				)}
			</main>

			<FeedbackModal
				isOpen={feedbackModalOpen}
				onClose={() => setFeedbackModalOpen(false)}
				onSelectFeedback={(behavior, type) => {
					if (currentFeedbackStudent) {
						handleAddFeedback(currentFeedbackStudent.id, type, behavior);
					}
				}}
				onEditFeedback={() => {
					setFeedbackModalOpen(false);
					setFeedbackEditorOpen(true);
				}}
				studentName={currentFeedbackStudent?.name || ""}
				positiveFeedbacks={positiveFeedbacks}
				negativeFeedbacks={negativeFeedbacks}
			/>

			<FeedbackEditorModal
				isOpen={feedbackEditorOpen}
				onClose={() => setFeedbackEditorOpen(false)}
				onBack={() => {
					setFeedbackEditorOpen(false);
					setFeedbackModalOpen(true);
				}}
				positiveFeedbacks={positiveFeedbacks}
				negativeFeedbacks={negativeFeedbacks}
				onUpdateFeedbacks={handleUpdateFeedbacks}
			/>

			{studentFormMode === "create" ? (
				<StudentFormModal
					isOpen={studentFormOpen}
					onClose={() => setStudentFormOpen(false)}
					onSave={handleCreateStudent}
					mode="create"
				/>
			) : (
				<StudentDetailModal
					isOpen={studentFormOpen}
					onClose={() => {
						setStudentFormOpen(false);
						setEditingStudentData(null);
					}}
					student={editingStudentData}
					onUpdate={(data: Partial<Student>) => handleUpdateStudent(data)}
					onDelete={handleDeleteStudent}
				/>
			)}

			<ManageClassTeachersModal
				classId={selectedClass?.id ? selectedClass.id : ""}
				isOpen={isManageTeachersModalOpen}
				onClose={() => setIsManageTeachersModalOpen(false)}
			/>
		</div>
	);
}
