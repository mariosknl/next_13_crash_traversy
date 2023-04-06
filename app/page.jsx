import Image from "next/image";
import { Inter } from "next/font/google";
import Courses from "./components/Courses";

const inter = Inter({
	weight: ["400", "600", "700"],
	subsets: ["latin"],
});

const HomePage = () => {
	return (
		<>
			<h1>Welcome to Traversy Media</h1>
			<Courses />
		</>
	);
};

export default HomePage;
