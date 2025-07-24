import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
	return (
		<div>
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
						This study takes about 30 minutes to complete. Thank you
						for contributing!
					</p>
				</div>
				<div className="grid grid-cols-2 gap-16">
					<Button variant="secondary" disabled>
						More information
					</Button>
					<Button asChild>
						<Link href="./experiment/survey">Get started →</Link>
					</Button>
				</div>
			</main>
		</div>
	);
}
