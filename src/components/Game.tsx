"use client";

// import Board from "@/components/Board";
// import { getRandomProblemOrder } from "@/lib/utils";
import { useState } from "react";
import PreGameModal from "@/components/PreGameModal";
import CountdownTimer from "@/components/CountdownTimer";
// import { TRIAL_NAMES } from "@/lib/constants";

export default function Game() {
	const [trialIndex, setTrialIndex] = useState(0);
	const [startMusic, setStartMusic] = useState(false);
	const [startGame, setStartGame] = useState(false);
	const [trialComplete, setTrialComplete] = useState(false);

	// timer for test
	// board: pops problem from randomProblems
	// submit button: save to sessionStorage
	return (
		<div>
			<PreGameModal
				trialIndex={trialIndex}
				setTrialIndex={setTrialIndex}
				startMusic={startMusic}
				setStartMusic={setStartMusic}
				startGame={startGame}
				setStartGame={setStartGame}
				trialComplete={trialComplete}
				setTrialComplete={setTrialComplete}
			/>
			<CountdownTimer
				initialTime={}
				onComplete={() => {
					if (!trialComplete) {
						setTrialComplete(true);
						setStartGame(false);
						setStartMusic(false);
					}
				}}
				startCondition={startGame}
			></CountdownTimer>
		</div>
	);
}
