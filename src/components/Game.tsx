// import Board from "@/components/Board";
import { getRandomProblemOrder } from "@/lib/utils";
import { fetchRandomProblemByDifficulty } from "@/lib/firebaseUtils";

import { useState } from "react";
import StartTrialModal from "@/components/StartTrialModal";
import PreGameModal from "@/components/PreGameModal";
import EndTrialModal from "@/components/EndTrialModal";
import EndTestModal from "@/components/EndTestModal";

import CountdownTimer from "@/components/CountdownTimer";
import Board from "@/components/Board";
// import { TRIAL_NAMES } from "@/lib/constants";

interface Problem {
	title: string;
	description: string;
	matrix: string[];
	choices: string[];
	answer: number;
}

export default async function Game() {
	const [trialIndex, setTrialIndex] = useState(0);
	const [startMusic, setStartMusic] = useState(false);
	const [startGame, setStartGame] = useState(false);
	const [trialComplete, setTrialComplete] = useState(false);
	const [testComplete, setTestComplete] = useState(false);
	const [problems, setProblems] = useState(getRandomProblemOrder());
	const [currentProblemIndex, setCurrentProblemIndex] = useState(0);

	// timer for test
	// board: pops problem from randomProblems
	// submit button: save answers

	const {
		// id: problemId,
		title,
		description,
		matrix,
		choices,
		answer,
	} = await fetchRandomProblemByDifficulty(problems[currentProblemIndex]);

	const problem: Problem = {
		title: title,
		description: description,
		matrix: matrix,
		choices: choices,
		answer: answer,
	};
	return (
		<div>
			{!startMusic && !startGame && (
				<StartTrialModal
					trialIndex={trialIndex}
					startMusic={startMusic}
					setStartMusic={setStartMusic}
				/>
			)}

			{startMusic && !startGame && (
				<PreGameModal
					trialIndex={trialIndex}
					setStartGame={setStartGame}
				/>
			)}

			{/* {(<EndTrialModal
					trialIndex={trialIndex}
					setTrialIndex={setTrialIndex}
					setTestComplete={setTestComplete}
					setStartGame={setStartGame}
					setStartMusic={setStartMusic}
					setTrialComplete={setTrialComplete}
				/>)} */}
			<CountdownTimer
				initialTime={2}
				onComplete={() => {}}
				startCondition={startGame}
			/>

			<Board problem={problem} />
			{/* <main></main> */}
		</div>
	);
}
