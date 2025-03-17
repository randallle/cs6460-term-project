import Board from "@/components/Board";

interface Problem {
	title: string;
	description: string;
	matrix: string[];
	choices: string[];
	answer: number;
}

const getProblems = async (): Promise<Problem[]> => {
	const result = await fetch("http://localhost:4000/problems");
	return result.json();
};

export default async function BoardPreview() {
	const problems = await getProblems();
	return (
		<main>
			<Board problem={problems[1]} />
		</main>
	);
}
