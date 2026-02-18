import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Safari Escolar",
		short_name: "Safari",
		description:
			"Sistema de gestão escolar mobile-first para escolas públicas brasileiras",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#000000",
		icons: [
			{
				src: "/apple-icon.png",
				sizes: "any",
				type: "image/png",
			},
		],
	};
}
