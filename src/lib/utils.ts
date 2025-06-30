import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { fetchProblemById } from "@/lib/firebaseUtils";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getRandomProblemOrder(): string[] {
	const levels = ["B", "C"]; // B for BASIC, C for CHALLENGE
	const subsets = ["B", "C", "D", "E"]; // Subsets
	const problemNumbers = Array.from({ length: 12 }, (_, i) =>
		(i + 1).toString().padStart(2, "0")
	); // 01 to 12

	const problems: string[] = [];

	// Generate all problem IDs for each level
	levels.forEach((level) => {
		subsets.forEach((subset) => {
			problemNumbers.forEach((number) => {
				problems.push(`${level}${subset}${number}`);
			});
		});
	});

	// Separate BASIC and CHALLENGE problems
	const basicProblems = problems.filter((id) => id.startsWith("B"));
	const challengeProblems = problems.filter((id) => id.startsWith("C"));

	// Shuffle each group
	const shuffle = (array: string[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	const shuffledBasic = shuffle(basicProblems);
	const shuffledChallenge = shuffle(challengeProblems);

	// Combine BASIC and CHALLENGE problems
	return [...shuffledBasic, ...shuffledChallenge];
}

export async function prepareTrial() {
	interface Problem {
		id: string;
		title: string;
		description: string;
		matrix: string[];
		choices: string[];
		answer: number;
	}

	const problemLineUp = getRandomProblemOrder();
	return problemLineUp;
}
