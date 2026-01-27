"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { Binoculars } from "lucide-react";
import { toast } from "sonner";

export default function LoginPage() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		setLoading(true);

		try {
			const data = await api.login(email, password);

			// Store in localStorage
			localStorage.setItem("token", data.token);
			localStorage.setItem("user", JSON.stringify(data.user));

			toast.success("Login realizado com sucesso!");

			// Redirect based on role
			if (data.user.role === "FAMILY") {
				router.push("/family");
			} else {
				router.push("/dashboard");
			}
		} catch (err) {
			console.error(err);
			const errorMessage =
				err instanceof Error ? err.message : "Email ou senha inválidos";
			setError(errorMessage);
			toast.error(errorMessage);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-background flex items-center justify-center p-4">
			{/* Glass Card Container */}
			<div className="card-glass p-8 w-full max-w-md transition-all">
				<div className="flex justify-center mb-6">
					<div className="p-4 rounded-[var(--radius-inner)] bg-[var(--safari-green-light)] shadow-[var(--shadow-hardware)]">
						<Binoculars
							size={48}
							className="text-[var(--safari-green)] stroke-2"
						/>
					</div>
				</div>
				<h1 className="text-3xl font-bold text-center mb-2 text-[var(--safari-green)] font-heading">
					Safari Escolar
				</h1>
				<p className="text-center text-[var(--text-muted)] mb-8 font-medium">
					A aventura de aprender começa aqui!
				</p>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-bold text-[var(--text-primary)] mb-2 ml-1"
						>
							EMAIL
						</label>
						<input
							id="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="input-field text-lg"
							placeholder="seu@email.com"
							required
						/>
					</div>

					<div>
						<label
							htmlFor="password"
							className="block text-sm font-bold text-[var(--text-primary)] mb-2 ml-1"
						>
							SENHA
						</label>
						<input
							id="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="input-field text-lg"
							placeholder="••••••••"
							required
						/>
					</div>

					{error && (
						<div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-[var(--radius-outer)] font-bold flex items-center gap-2 shadow-sm text-sm">
							🚨 {error}
						</div>
					)}

					<button
						type="submit"
						disabled={loading}
						className="btn btn-accent w-full text-lg py-3"
					>
						{loading ? "Entrando na Aventura..." : "Entrar"}
					</button>
				</form>

				<div className="mt-8 p-5 rounded-[var(--radius-inner)] bg-[var(--surface-raised)] border border-[var(--safari-stone-200)] overflow-x-auto shadow-inner">
					<p className="text-xs text-[var(--text-muted)] font-bold mb-3 uppercase tracking-wider text-center">
						🗺️ Acesso Rápido
					</p>
					<table className="w-full text-xs">
						<thead>
							<tr className="text-[var(--text-primary)] font-bold text-left border-b border-[var(--safari-stone-200)]">
								<th className="pb-2">Cargo</th>
								<th className="pb-2">Email</th>
								<th className="pb-2">Senha</th>
							</tr>
						</thead>
						<tbody className="text-[var(--text-muted)] font-medium">
							<tr className="border-b border-[var(--safari-stone-200)]">
								<td className="py-2">Admin</td>
								<td>admin@safariescolar.com</td>
								<td>password123</td>
							</tr>
							<tr className="border-b border-[var(--safari-stone-200)]">
								<td className="py-2">Coordenador</td>
								<td>coordenador@escola.com</td>
								<td>password123</td>
							</tr>
							<tr className="border-b border-[var(--safari-stone-200)]">
								<td className="py-2">Professor 1</td>
								<td>joao.professor@escola.com</td>
								<td>password123</td>
							</tr>
							<tr>
								<td className="py-2">Família 1</td>
								<td>familia.silva@email.com</td>
								<td>password123</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
