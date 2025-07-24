"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Matrix from "./Matrix";
import AnswerChoicesGrid from "@/components/AnswerChoicesGrid";
import { getRandomProblemOrder } from "@/lib/utils";
import { fetchProblemById } from "@/lib/firebaseUtils";

interface Problem {
	id: string;
	title: string;
	description: string;
	matrix: string[];
	choices: string[];
	answer: number;
}

interface BoardProps {
	trialIndex: number;
}

export default function Board({ trialIndex }: BoardProps) {
	// Problem states
	const [lineUp, setLineUp] = useState<string[]>([]);
	const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
	const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [selectedAnswer, setSelectedAnswer] = useState(-1);

	// Initialize problem lineup on component mount
	useEffect(() => {
		const lineup = getRandomProblemOrder();
		setLineUp(lineup);
		sessionStorage.setItem(
			`trial${trialIndex}ProblemLineUp`,
			JSON.stringify(lineup)
		);
	}, [trialIndex]);

	useEffect(() => {
		if (lineUp.length === 0) return;

		async function loadCurrentProblem() {
			try {
				setLoading(true);
				setError(null);

				const problemId = lineUp[currentProblemIndex];

				const problem = await fetchProblemById(problemId);
				setCurrentProblem(problem);
				// Reset selected answer when loading a new problem
				setSelectedAnswer(-1);
			} catch (err) {
				console.error(
					"Problem ID that failed:",
					lineUp[currentProblemIndex]
				);
				setError(
					err instanceof Error
						? err.message
						: "Failed to load problem"
				);
				setCurrentProblem(null);
			} finally {
				setLoading(false);
			}
		}
		loadCurrentProblem();
	}, [lineUp, currentProblemIndex]);

	if (loading) {
		return <div>Loading problem...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!currentProblem) {
		return <div>No problem available</div>;
	}

	return (
		<main>
			<h2 className="flex justify-end">Select an answer below</h2>
			<div className="grid grid-cols-2">
				<div className="mt-10">
					<Matrix
						items={currentProblem.matrix}
						choices={currentProblem.choices}
						selectedAnswer={selectedAnswer}
					/>
				</div>
				<div className="flex justify-end">
					<AnswerChoicesGrid
						choices={currentProblem.choices}
						selectedAnswer={selectedAnswer}
						setSelectedAnswer={setSelectedAnswer}
					/>
				</div>
			</div>
			<div className="flex justify-center mt-4">
				<Button
					onClick={() => {
						let answerLineUp =
							sessionStorage.getItem(
								`trial${trialIndex}AnswerLineUp`
							) || ""; // fallback to empty string
						answerLineUp += selectedAnswer + 1;
						sessionStorage.setItem(
							`trial${trialIndex}AnswerLineUp`,
							answerLineUp
						);

						let answerKeyLineUp =
							sessionStorage.getItem(
								`trial${trialIndex}AnswerKeyLineUp`
							) || ""; // fallback to empty string
						answerKeyLineUp += String(currentProblem.answer);
						sessionStorage.setItem(
							`trial${trialIndex}AnswerKeyLineUp`,
							answerKeyLineUp
						);
						setCurrentProblemIndex((prev) => prev + 1);
					}}
					size="lg"
					className="px-8 py-3"
					disabled={selectedAnswer === -1}
				>
					Submit
				</Button>
			</div>
		</main>
	);
}
