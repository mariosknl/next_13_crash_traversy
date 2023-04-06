import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
	weight: ["400", "600", "700"],
	subsets: ["latin"],
});

const HomePage = () => {
	return (
		<div>
			<h1>Welcome to Traversy Media</h1>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/about/team">Team</Link>
				</li>
			</ul>
		</div>
	);
};

export default HomePage;
