"use client";

import { useState } from "react";
import PreGameModal from "@/components/PreGameModal";

export default function PreGameModalPreview() {
	const [startMusic, setStartMusic] = useState(false);
	const [startGame, setStartGame] = useState(false);

	return (
		<PreGameModal
			trialNumber={1}
			trialName="Silence"
			startMusic={startMusic}
			setStartMusic={setStartMusic}
			startGame={startGame}
			setStartGame={setStartGame}
		></PreGameModal>
	);
}
