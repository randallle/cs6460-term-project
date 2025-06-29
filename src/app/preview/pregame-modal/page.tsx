"use client";

import { useState } from "react";
import PreGameModal from "@/components/PreGameModal";

export default function PreGameModalPreview() {
	const [isModalOpen, setIsModalOpen] = useState(true);

	const handleGameStart = () => {
		console.log("Game started! Proceeding to main game...");
		setIsModalOpen(false);
		// Here you would typically navigate to the game or update game state
	};

	return (
		<PreGameModal
			isOpen={isModalOpen}
			onOpenChange={setIsModalOpen}
			onGameStart={handleGameStart}
			musicGenre="Classical" // You can change this to test different genres
		/>
	);
}
