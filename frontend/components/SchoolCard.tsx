import { SchoolWithCoordinator } from "@/lib/types";
import { Button } from "./ui/Button";

interface SchoolCardProps {
	school: SchoolWithCoordinator;
	viewMode: "grid" | "list";
	onDelete: () => void;
	onEdit: () => void;
}

export const SchoolCard: React.FC<SchoolCardProps> = ({
	school,
	viewMode,
	onDelete,
	onEdit,
}) => {
	return (
		<div
			className={
				viewMode === "list"
					? "list-card" /* Use .list-card class for consistency */
					: `card-interactive p-4 flex flex-col items-center text-center relative group`
			}
		>
			<div
				className={
					viewMode === "list"
						? "flex flex-col sm:flex-row items-center justify-between gap-4 w-full"
						: "w-full"
				}
			>
				<div
					className={
						viewMode === "list"
							? "flex items-center space-x-4"
							: "flex flex-col items-center gap-2 mb-4 relative"
					}
				>
					<span
						className={`font-bold text-[var(--safari-green)] ${viewMode === "list" ? "text-lg" : "text-xl"}`}
					>
						{school.name}
					</span>
				</div>
				<div
					className={
						viewMode === "list"
							? "flex items-center gap-2 ml-auto"
							: "w-full mt-1 flex flex-col gap-2"
					}
				>
					<Button
						className={`flex items-center justify-center gap-2 ${viewMode === "list" ? "px-3 py-1.5 text-sm min-w-[90px]" : "py-2 text-xs w-full"}`}
						variant="info"
						onClick={(e) => {
							e.stopPropagation();
							onEdit();
						}}
					>
						Editar
					</Button>
					<Button
						className={`flex items-center justify-center gap-2 ${viewMode === "list" ? "px-3 py-1.5 text-sm min-w-[90px]" : "py-2 text-xs w-full"}`}
						variant="anger"
						onClick={(e) => {
							e.stopPropagation();
							onDelete();
						}}
					>
						Deletar
					</Button>
				</div>
			</div>
		</div>
	);
};
