"use client";

import Matrix from "./Matrix";
import AnswerChoices from "./AnswerChoices";
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
	const { selectedAnswer, setSelectedAnswer } = useState(-1);

	// handle selection
	function handleSelection() {}

	return (
		<div className="grid grid-cols-2">
			<div>
				<Matrix items={matrix} selection={selectedAnswer} />
			</div>
			<div className="flex justify-end">
				<div>
					<h2>Select an answer</h2>
					<AnswerChoices
						choices={choices}
						onSelect={handleSelection}
					/>
				</div>
			</div>
		</div>
	);
}
