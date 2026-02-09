import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Be My Val",
	description:
		"A Be My Valentine website to ask someone special in a romantic and memorable way. Perfect for Valentine’s Day proposals.",
	authors: [
		{
			name: "Adewunmi Quadri Ayodele",
			url: "https://www.be-my-val.vercel.app",
		},
	],
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.className} antialiased`}>{children}</body>
		</html>
	);
}
