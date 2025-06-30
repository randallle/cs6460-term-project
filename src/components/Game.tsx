"use client";

import { useState, useEffect } from "react";
import { getRandomProblemOrder } from "@/lib/utils";
import { fetchProblemById } from "@/lib/firebaseUtils";
import Board from "@/components/Board";

interface Problem {
	id: string;
	title: string;
	description: string;
	matrix: string[];
	choices: string[];
	answer: number;
}

export default function Game() {
	const [lineUp, setLineUp] = useState<string[]>([]);
	const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
	const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Initialize problem lineup on component mount
	useEffect(() => {
		const lineup = getRandomProblemOrder();

		setLineUp(lineup);
	}, []);

	useEffect(() => {
		if (lineUp.length === 0) return;

		async function loadCurrentProblem() {
			try {
				setLoading(true);
				setError(null);

				const problemId = lineUp[currentProblemIndex];

				const problem = await fetchProblemById(problemId);

				setCurrentProblem(problem);
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
	return <Board problem={currentProblem} />;
	// 	return (
	// 		<div>
	// 			{!startMusic && !startGame && (
	// 				<StartTrialModal
	// 					trialIndex={trialIndex}
	// 					setStartMusic={setStartMusic}
	// 				/>
	// 			)}
	// 			{startMusic && !startGame && (
	// 				<PreGameModal
	// 					trialIndex={trialIndex}
	// 					setStartGame={setStartGame}
	// 				/>
	// 			)}
	// 			{startGame && (
	// 				<>
	// 					<CountdownTimer
	// 						initialTime={60}
	// 						onComplete={() => setTrialComplete(true)}
	// 						startCondition={startGame}
	// 					/>
	// 					<Board problem={problem} />
	// 				</>
	// 			)}
	// 			{trialComplete && (
	// 				<EndTrialModal
	// 					trialIndex={trialIndex}
	// 					setTrialIndex={setTrialIndex}
	// 					setTestComplete={setTestComplete}
	// 					setStartGame={setStartGame}
	// 					setStartMusic={setStartMusic}
	// 					setTrialComplete={setTrialComplete}
	// 				/>
	// 			)}
	// 			{testComplete && (
	// 				<EndTestModal onSubmit={() => console.log("Test completed")} />
	// 			)}
	// 		</div>
	// 	);
}
