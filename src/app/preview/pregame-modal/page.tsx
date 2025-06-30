"use client";

import { useState } from "react";
import PreGameModal from "@/components/PreGameModal";
import StartTrialModal from "@/components/StartTrialModal";

export default function PreGameModalPreview() {
	const [startMusic, setStartMusic] = useState(true);
	const [startGame, setStartGame] = useState(true);
	const [trialIndex, setTrialIndex] = useState(0);
	const [trialComplete, setTrialComplete] = useState(true);

	return (
		<StartTrialModal
			trialIndex={trialIndex}
			startMusic={startMusic}
			setStartMusic={setStartMusic}
		/>
	);
}
