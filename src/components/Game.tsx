"use client";

import { useState, useEffect } from "react";
import { getRandomProblemOrder } from "@/lib/utils";
import { fetchProblemById } from "@/lib/firebaseUtils";
import Board from "@/components/Board";
import PreGameModal from "@/components/PreGameModal";
import StartTrialModal from "@/components/StartTrialModal";

interface Problem {
	id: string;
	title: string;
	description: string;
	matrix: string[];
	choices: string[];
	answer: number;
}

export default function Game() {
	// Problem states
	const [lineUp, setLineUp] = useState<string[]>([]);
	const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
	const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Modal states
	const [showStartTrialModal, setShowStartTrialModal] = useState(true);
	const [showPreGameModal, setShowPreGameModal] = useState(false);

	// Game states
	const [startMusic, setStartMusic] = useState(true);
	const [startGame, setStartGame] = useState(true);
	const [trialIndex, setTrialIndex] = useState(0);
	const [trialComplete, setTrialComplete] = useState(true);
	const [testComplete, setTestComplete] = useState(false);

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
	return (
		<div>
			{showStartTrialModal && (
				<StartTrialModal
					trialIndex={trialIndex}
					setStartMusic={setStartMusic}
					setShowStartTrialModal={setShowStartTrialModal}
					setShowPreGameModal={setShowPreGameModal}
				/>
			)}

			{showPreGameModal && (
				<PreGameModal
					trialIndex={trialIndex}
					setStartGame={setStartGame}
					setShowPreGameModal={setShowPreGameModal}
				/>
			)}

			<Board problem={currentProblem} />
		</div>
	);
}
