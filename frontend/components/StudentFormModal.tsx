import { useState, useEffect } from "react";
import { Trash2, Save, X, Pencil } from "lucide-react";
import { Student } from "../lib/types";
import EmojiPicker from "./EmojiPicker";
import { Modal } from "./ui/Modal";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { getAnimalAvatar } from "@/utils/getAnimalAvatar";

interface StudentFormModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSave: (data: {
		name: string;
		animalAvatar?: string;
		avatarColor?: string;
	}) => void;
	onDelete?: () => void;
	initialData?: Student | null;
	mode: "create" | "edit";
}

export default function StudentFormModal({
	isOpen,
	onClose,
	onSave,
	onDelete,
	initialData,
	mode,
}: StudentFormModalProps) {
	const [name, setName] = useState("");
	const [animalAvatar, setAnimalAvatar] = useState("Leão"); // Default
	const [avatarColor, setAvatarColor] = useState("#FFFFFF");
	const [showEmojiPicker, setShowEmojiPicker] = useState(false);
	const [nameError, setNameError] = useState("");
	const [touched, setTouched] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setTimeout(() => {
				if (mode === "edit" && initialData) {
					setName(initialData.name);
					setAnimalAvatar(initialData.animalAvatar || "Leão");
					setAvatarColor(initialData.avatarColor || "#FFFFFF");
				} else {
					// Reset for create
					setName("");
					setAnimalAvatar("Leão");
					setAvatarColor("#FFFFFF");
				}
				setShowEmojiPicker(false);
				setNameError("");
				setTouched(false);
			}, 0);
		}
	}, [isOpen, mode, initialData]);

	const validateName = (value: string) => {
		if (!value.trim()) {
			return "Nome é obrigatório";
		}
		if (value.trim().length < 2) {
			return "Nome deve ter pelo menos 2 caracteres";
		}
		return "";
	};

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setName(value);
		if (touched) {
			setNameError(validateName(value));
		}
	};

	const handleNameBlur = () => {
		setTouched(true);
		setNameError(validateName(name));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const error = validateName(name);
		if (error) {
			setNameError(error);
			setTouched(true);
			return;
		}
		onSave({ name, animalAvatar, avatarColor });
	};

	const isValid = !validateName(name);

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title={mode === "create" ? "✨ Adicionar Aluno" : "✏️ Editar Aluno"}
			maxWidth="md"
		>
			<form onSubmit={handleSubmit} className="p-6 space-y-6">
				{/* Avatar Section */}
				<div className="flex flex-col items-center gap-2">
					<span className="text-sm font-bold text-[var(--text-muted)]">
						Avatar
					</span>
					<div className="relative">
						<button
							type="button"
							onClick={() => setShowEmojiPicker(!showEmojiPicker)}
							className="liquid-control cursor-pointer w-24 h-24 text-5xl flex items-center justify-center rounded-full border-4 border-[var(--safari-green-light)] shadow-sm bg-white"
							style={{ backgroundColor: avatarColor }}
							aria-label="Escolher avatar"
						>
							{getAnimalAvatar(animalAvatar)}
						</button>

						{/* Avatar change button overlay */}
						<button
							type="button"
							onClick={() => setShowEmojiPicker(!showEmojiPicker)}
							className="liquid-control absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full shadow-md border border-[var(--safari-stone-200)] flex items-center justify-center cursor-pointer hover:bg-[var(--safari-green-light)] hover:border-[var(--safari-green)] transition-colors"
							aria-label="Mudar avatar"
						>
							<Pencil size={14} className="text-[var(--safari-green)]" />
						</button>
					</div>

					{showEmojiPicker && (
						<div className="absolute z-10 mt-28">
							<EmojiPicker
								onSelectEmoji={(emoji) => {
									setAnimalAvatar(emoji);
									setShowEmojiPicker(false);
								}}
								onSelectColor={(color) => setAvatarColor(color)}
								onClose={() => setShowEmojiPicker(false)}
								currentColor={avatarColor}
							/>
						</div>
					)}
				</div>

				{/* Name Input */}
				<Input
					label="Nome Completo"
					value={name}
					onChange={handleNameChange}
					onBlur={handleNameBlur}
					placeholder="Ex: João Silva"
					autoFocus
					required
					error={touched && nameError ? nameError : undefined}
				/>

				{/* Actions - Footer style */}
				<div className="flex gap-3 pt-4 border-t border-[var(--safari-stone-200)]">
					{mode === "edit" && onDelete && (
						<Button
							type="button"
							variant="accent"
							onClick={() => {
								if (
									confirm(
										"Tem certeza que deseja excluir este aluno? Esta ação não pode ser desfeita.",
									)
								) {
									onDelete();
								}
							}}
							className="px-4 py-3"
							title="Excluir Aluno"
						>
							<Trash2 size={20} />
						</Button>
					)}

					<Button
						type="button"
						variant="ghost"
						onClick={onClose}
						className="flex-1 py-3"
					>
						<X size={18} className="mr-1" />
						Cancelar
					</Button>

					<Button
						type="submit"
						variant="primary"
						className="flex-[2] py-3"
						disabled={!isValid}
					>
						<Save size={20} />
						{mode === "create" ? "Adicionar" : "Salvar"}
					</Button>
				</div>
			</form>
		</Modal>
	);
}
