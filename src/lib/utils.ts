import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
	const problemLineUp = getRandomProblemOrder();
	return problemLineUp;
}

function isMobile(): boolean {
	if (typeof window === "undefined") return false;

	// Check user agent for mobile indicators
	const userAgent = window.navigator.userAgent;
	const mobileRegex =
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
	return mobileRegex.test(userAgent);
}

function isMobileByScreen(): boolean {
	if (typeof window === "undefined") return false;

	// Check screen width (typical mobile breakpoint)
	return window.innerWidth <= 768;
}

function isTouchDevice(): boolean {
	if (typeof window === "undefined") return false;

	return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

export function isMobileDevice(): boolean {
	return isMobile() || isMobileByScreen() || isTouchDevice();
}
