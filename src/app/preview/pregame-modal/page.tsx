"use client";

import { useState } from "react";
import PreGameModal from "@/components/PreGameModal";
import StartTrialModal from "@/components/StartTrialModal";
import EndTrialModal from "@/components/EndTrialModal";
import EndTestModal from "@/components/EndTestModal";

export default function PreGameModalPreview() {
	const [startMusic, setStartMusic] = useState(true);
	const [startGame, setStartGame] = useState(true);
	const [trialIndex, setTrialIndex] = useState(0);
	const [trialComplete, setTrialComplete] = useState(true);
	const [testComplete, setTestComplete] = useState(false);

	return (
		<StartTrialModal
			trialIndex={trialIndex}
			setStartMusic={setStartMusic}
		/>

		// <EndTrialModal
		// 	trialIndex={trialIndex}
		// 	startMusic={startMusic}
		// 	setTrialIndex={setTrialIndex}
		// 	setTestComplete={setTestComplete}
		// 	setStartGame={setStartGame}
		// 	setStartMusic={setStartMusic}
		// 	setTrialComplete={setTrialComplete}
		// />
		// <EndTestModal />
		// <PreGameModal
		// 	trialIndex={trialIndex}
		// 	setStartGame={setStartGame}
		// ></PreGameModal>
	);
}
