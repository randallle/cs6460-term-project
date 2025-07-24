import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import MobileWarningModal from "@/components/MobileWarningModal";

export const metadata: Metadata = {
	title: "CS6460 Project: Home",
	description:
		"An experiment studying how music genre influences cognitive performance using Raven's Progressive Matrices",
};

export default async function Home() {
	return (
		<div>
			<MobileWarningModal />
			<nav className="mb-8">
				<h1 className="font-black">
					<Link href="/">CS 6460: Term Project</Link>
				</h1>
			</nav>
			<main className="">
				<div className="text-3xl">
					<p className="mb-8">
						In this experiment, you&apos;ll complete a short survey
						followed by three rounds of{" "}
						<span className="font-bold">
							Raven&apos;s Progressive Matrices
						</span>{" "}
						puzzles — each while listening to a different genre of
						music.
					</p>
					<p className="mb-8">
						Your participation helps us understand how music genre
						influences cognitive performance.
					</p>
					<p className="mb-8">
						This study takes about 10 minutes to complete. Thank you
						for contributing!
					</p>
				</div>
				<div className="grid grid-cols-2 gap-16">
					<Button variant="secondary" disabled>
						More information
					</Button>
					<Button asChild>
						<Link href="./experiment/introduction-steps">
							Get started →
						</Link>
					</Button>
				</div>
			</main>
		</div>
	);
}
