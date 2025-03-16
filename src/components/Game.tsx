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

interface GameProps {
	problem: Problem;
}

export default function Game({ problem }: GameProps) {
	const { matrix, choices } = problem;
	const { selectedAnswer, setSelectedAnswer } = useState(-1);

	// handle selection

	return (
		<div>
			<Matrix items={matrix} />
			<AnswerChoices choices={choices} onSelect={() => {}} />
		</div>
	);
}
