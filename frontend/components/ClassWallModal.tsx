import React, { useState, useEffect } from "react";
import { Modal } from "./ui/Modal";
import { Button } from "./ui/Button";
import { api } from "@/lib/api";
import { Post, User } from "@/lib/types";
import { Trash2, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

interface ClassWallModalProps {
	isOpen: boolean;
	onClose: () => void;
	classId: string;
	className: string;
	currentUser: User | null;
}

export function ClassWallModal({
	isOpen,
	onClose,
	classId,
	className,
	currentUser,
}: ClassWallModalProps) {
	const [posts, setPosts] = useState<Post[]>([]);
	const [newPostContent, setNewPostContent] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isPosting, setIsPosting] = useState(false);

	useEffect(() => {
		if (isOpen && classId) {
			loadPosts();
		}
	}, [isOpen, classId]);

	const loadPosts = async () => {
		setIsLoading(true);
		try {
			const token = localStorage.getItem("token");
			if (!token) return;
			const data = await api.getClassPosts(token, classId);
			setPosts(data);
		} catch (error) {
			console.error("Failed to load posts:", error);
			toast.error("Erro ao carregar o mural.");
		} finally {
			setIsLoading(false);
		}
	};

	const handleCreatePost = async () => {
		if (!newPostContent.trim()) return;

		setIsPosting(true);
		try {
			const token = localStorage.getItem("token");
			if (!token) return;

			await api.createPost(token, {
				content: newPostContent,
				classId: classId,
			});

			setNewPostContent("");
			toast.success("Postagem criada com sucesso!");
			loadPosts(); // Refresh list
		} catch (error) {
			console.error("Failed to create post:", error);
			toast.error("Erro ao criar postagem.");
		} finally {
			setIsPosting(false);
		}
	};

	const handleDeletePost = async (postId: string) => {
		if (!confirm("Tem certeza que deseja excluir esta postagem?")) return;

		try {
			const token = localStorage.getItem("token");
			if (!token) return;

			await api.deletePost(token, postId);
			toast.success("Postagem excluída.");
			loadPosts();
		} catch (error) {
			console.error("Failed to delete post:", error);
			toast.error("Erro ao excluir postagem.");
		}
	};

	const canDelete = (post: Post) => {
		if (!currentUser) return false;
		return (
			currentUser.role === "ADMIN" ||
			currentUser.role === "COORDINATOR" ||
			currentUser.id === post.teacherId
		);
	};

	const canPost =
		currentUser?.role === "TEACHER" ||
		currentUser?.role === "ADMIN" ||
		currentUser?.role === "COORDINATOR";

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title={`Mural da Turma: ${className}`}
			maxWidth="2xl"
		>
			<div className="space-y-6 p-4">
				{/* Create Post Area */}
				{canPost && (
					<div className="glass-card p-4 space-y-4">
						<textarea
							className="w-full bg-white/50 border border-white/20 rounded-xl p-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-none min-h-[100px]"
							placeholder="Escreva algo para a turma..."
							value={newPostContent}
							onChange={(e) => setNewPostContent(e.target.value)}
						/>
						<div className="flex justify-end">
							<Button
								onClick={handleCreatePost}
								isLoading={isPosting}
								disabled={!newPostContent.trim()}
								className="flex items-center gap-2"
							>
								<Send size={18} />
								Publicar
							</Button>
						</div>
					</div>
				)}

				{/* Posts List */}
				<div className="space-y-4">
					<h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
						<MessageCircle size={20} />
						Postagens Recentes
					</h3>

					{isLoading ? (
						<div className="text-center py-8 text-gray-500">
							Carregando mural...
						</div>
					) : posts.length === 0 ? (
						<div className="text-center py-8 text-gray-500 bg-white/30 rounded-xl border border-white/20">
							Nenhuma postagem ainda.
						</div>
					) : (
						<div className="space-y-4">
							{posts.map((post) => (
								<div
									key={post.id}
									className="glass-card p-4 hover:bg-white/60 transition-colors relative group"
								>
									<div className="flex justify-between items-start mb-2">
										<div className="flex items-center gap-2">
											<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm">
												{post.teacher.name.charAt(0)}
											</div>
											<div>
												<div className="font-medium text-gray-800">
													{post.teacher.name}
												</div>
												<div className="text-xs text-gray-500">
													{new Date(post.createdAt).toLocaleDateString(
														"pt-BR",
														{
															day: "2-digit",
															month: "long",
															hour: "2-digit",
															minute: "2-digit",
														},
													)}
												</div>
											</div>
										</div>
										{canDelete(post) && (
											<button
												onClick={() => handleDeletePost(post.id)}
												className="text-gray-400 hover:text-red-500 transition-colors p-1 opacity-0 group-hover:opacity-100"
												title="Excluir postagem"
											>
												<Trash2 size={16} />
											</button>
										)}
									</div>
									<div className="text-gray-700 whitespace-pre-wrap pl-10">
										{post.content}
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</Modal>
	);
}
