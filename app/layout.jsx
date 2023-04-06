import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const poppins = Poppins({
	weight: ["400", "600", "700"],
	subsets: ["latin"],
});

export const metadata = {
	title: "Traversy Media",
	description: "Web development tutorials and courses",
	keywords:
		"web development, web design, javascript, react, nextjs, nodejs, css, html",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Header />
				<main className="container">{children}</main>
			</body>
		</html>
	);
}
