"use client";

import Matrix from "./Matrix";
import AnswerChoicesGrid from "@/components/AnswerChoicesGrid";

interface Problem {
	id: string;
	title: string;
	description: string;
	matrix: string[];
	choices: string[];
	answer: number;
}

interface BoardProps {
	problem: Problem;
	selectedAnswer: number;
	setSelectedAnswer: (answer: number) => void;
}

export default function Board({
	problem,
	selectedAnswer,
	setSelectedAnswer,
}: BoardProps) {
	const { matrix, choices } = problem;

	return (
		<main>
			<h2 className="flex justify-end">Select an answer below</h2>
			<div className="grid grid-cols-2">
				<div className="mt-10">
					<Matrix
						items={matrix}
						choices={choices}
						selectedAnswer={selectedAnswer}
					/>
				</div>
				<div className="flex justify-end">
					<AnswerChoicesGrid
						choices={choices}
						selectedAnswer={selectedAnswer}
						setSelectedAnswer={setSelectedAnswer}
					/>
				</div>
			</div>
		</main>
	);
}
