"use client";

// import Board from "@/components/Board";
// import { getRandomProblemOrder } from "@/lib/utils";
import { useState } from "react";
import StartTrialModal from "@/components/StartTrialModal";
import PreGameModal from "@/components/PreGameModal";
import EndTrialModal from "@/components/EndTrialModal";
import EndTestModal from "@/components/EndTestModal";

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
			{!startMusic && !startGame && (
				<StartTrialModal
					trialIndex={trialIndex}
					startMusic={startMusic}
					setStartMusic={setStartMusic}
				/>
			)}

			{/* {startMusic && !startGame && (
				<EndTestModal
                />
			)} */}
		</div>
	);
}
