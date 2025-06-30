// "use client";

// import { getRandomProblemOrder } from "@/lib/utils";
// import { fetchRandomProblemByDifficulty } from "@/lib/firebaseUtils";
// import { useState, useEffect } from "react";
// import StartTrialModal from "@/components/StartTrialModal";
// import PreGameModal from "@/components/PreGameModal";
// import EndTrialModal from "@/components/EndTrialModal";
// import EndTestModal from "@/components/EndTestModal";
// import CountdownTimer from "@/components/CountdownTimer";
// import Board from "@/components/Board";

// interface Problem {
// 	title: string;
// 	description: string;
// 	matrix: string[];
// 	choices: string[];
// 	answer: number;
// }

// export default function Game() {
// 	const [trialIndex, setTrialIndex] = useState(0);
// 	const [startMusic, setStartMusic] = useState(false);
// 	const [startGame, setStartGame] = useState(false);
// 	const [trialComplete, setTrialComplete] = useState(false);
// 	const [testComplete, setTestComplete] = useState(false);
// 	const [problems, setProblems] = useState(getRandomProblemOrder());
// 	const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
// 	const [problem, setProblem] = useState<Problem | null>(null);
// 	const [loading, setLoading] = useState(true);

// 	// Fetch problem data on component mount and when currentProblemIndex changes
// 	useEffect(() => {
// 		async function loadProblem() {
// 			try {
// 				setLoading(true);
// 				const { title, description, matrix, choices, answer } =
// 					await fetchProblemById(
// 						problems[currentProblemIndex]
// 					);

// 				setProblem({
// 					title,
// 					description,
// 					matrix,
// 					choices,
// 					answer,
// 				});
// 			} catch (error) {
// 				console.error("Error fetching problem:", error);
// 			} finally {
// 				setLoading(false);
// 			}
// 		}

// 		loadProblem();
// 	}, [problems, currentProblemIndex]);

// 	if (loading || !problem) {
// 		return <div>Loading...</div>;
// 	}
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
// }
