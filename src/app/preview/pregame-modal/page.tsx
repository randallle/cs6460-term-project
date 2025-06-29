"use client";

import { useState } from "react";
import PreGameModal from "@/components/PreGameModal";

export default function PreGameModalPreview() {
	const [startMusic, setStartMusic] = useState(true);
	const [startGame, setStartGame] = useState(true);
	const [trialIndex, setTrialIndex] = useState(0);
	const [trialComplete, setTrialComplete] = useState(true);

	return (
		<PreGameModal
			trialIndex={trialIndex}
			setTrialIndex={setTrialIndex}
			startMusic={startMusic}
			setStartMusic={setStartMusic}
			startGame={startGame}
			setStartGame={setStartGame}
			trialComplete={trialComplete}
			setTrialComplete={setTrialComplete}
		></PreGameModal>
	);
}
