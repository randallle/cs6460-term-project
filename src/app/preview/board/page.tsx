import Board from "@/components/Board";
import { fetchRandomProblemByDifficulty } from "@/lib/firebaseUtils";

interface Problem {
	title: string;
	description: string;
	matrix: string[];
	choices: string[];
	answer: number;
}

export default async function BoardPreview() {
	const {
		// id: problemId,
		title,
		description,
		matrix,
		choices,
		answer,
	} = await fetchRandomProblemByDifficulty("B");
	const problem: Problem = {
		title: title,
		description: description,
		matrix: matrix,
		choices: choices,
		answer: answer,
	};

	return (
		<main>
			<Board problem={problem} />
		</main>
	);
}
