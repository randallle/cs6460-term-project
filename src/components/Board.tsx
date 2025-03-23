"use client";

import Matrix from "./Matrix";
import AnswerChoicesGrid from "@/components/AnswerChoicesGrid";
import { useState } from "react";

interface Problem {
	title: string;
	description: string;
	matrix: string[];
	choices: string[];
	answer: number;
}

interface BoardProps {
	problem: Problem;
}

export default function Board({ problem }: BoardProps) {
	const { matrix, choices } = problem;
	const [selectedAnswer, setSelectedAnswer] = useState(-1);

	return (
		<div>
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
		</div>
	);
}
