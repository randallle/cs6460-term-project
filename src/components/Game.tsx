"use client";

import { useState, useEffect } from "react";
import { getRandomProblemOrder } from "@/lib/utils";
import { fetchProblemById } from "@/lib/firebaseUtils";
import Board from "@/components/Board";
import PreGameModal from "@/components/PreGameModal";
import StartTrialModal from "@/components/StartTrialModal";
import EndTrialModal from "@/components/EndTrialModal";
import EndTestModal from "@/components/EndTestModal";
import CountdownTimer from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";

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
	const [showEndTrialModal, setShowEndTrialModal] = useState(false);

	// Game states
	const [startMusic, setStartMusic] = useState(false);
	const [startGame, setStartGame] = useState(false);
	const [trialIndex, setTrialIndex] = useState(0);
	const [trialComplete, setTrialComplete] = useState(true);
	const [testComplete, setTestComplete] = useState(false);
	const [selectedAnswer, setSelectedAnswer] = useState(-1);

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
		<div className="relative">
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

			{showEndTrialModal && (
				<EndTrialModal
					trialIndex={trialIndex}
					setTrialIndex={setTrialIndex}
					setTestComplete={setTestComplete}
					setShowEndTrialModal={setShowEndTrialModal}
					setShowStartTrialModal={setShowStartTrialModal}
				/>
			)}

			{testComplete && <EndTestModal />}

			{/* Background content with conditional blur */}
			<div className={startGame ? "" : "blur-3xl"}>
				<div className="pt-5">
					<CountdownTimer
						initialTime={1}
						onComplete={() => {
							setStartGame(false);
							setShowEndTrialModal(true);
						}}
						startCondition={startGame}
					/>
				</div>

				<Board
					problem={currentProblem}
					selectedAnswer={selectedAnswer}
					setSelectedAnswer={setSelectedAnswer}
				/>
				<div className="flex justify-center mt-4">
					<Button
						onClick={() => {
							setCurrentProblemIndex((prev) => prev + 1);
						}}
						size="lg"
						className="px-8 py-3"
						disabled={selectedAnswer === -1}
					>
						Submit
					</Button>
				</div>
			</div>
		</div>
	);
}
