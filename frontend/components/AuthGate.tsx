"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface AuthGateProps {
	children: React.ReactNode;
	allowRoles?: string[];
}

export function AuthGate({ children, allowRoles }: AuthGateProps) {
	const router = useRouter();
	const [ready, setReady] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("token");
		const userRaw = localStorage.getItem("user");

		if (!token || !userRaw) {
			router.replace("/login");
			return;
		}

		const user = JSON.parse(userRaw);

		if (allowRoles && !allowRoles.includes(user.role)) {

			if (user.role === "FAMILY") {
				router.replace("/family");
			} else {
				router.replace("/dashboard");
			}
			return;
		}

		setReady(true);
	}, [router, allowRoles]);

	if (!ready) return null;
	return <>{children}</>;
}