import Game from "@/components/Game";

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

export default async function GamePreview() {
	const problems = await getProblems();

	return (
		<main>
			<Game />
		</main>
	);
}
