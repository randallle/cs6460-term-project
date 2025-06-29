"use client";

import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";

interface PreGameModalProps {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
	onGameStart?: () => void; // Called when the game should actually start
	musicGenre?: string; // Optional prop to show what music will play
}

export default function PreGameModal({
	isOpen,
	onOpenChange,
	onGameStart,
	musicGenre = "music",
}: PreGameModalProps) {
	const [startMusic, setStartMusic] = useState(false);
	const [startGame, setStartGame] = useState(false);

	const handleStartTest = () => {
		setStartMusic(true);
		// You can add music playback logic here
		console.log(`Starting ${musicGenre} playback...`);
	};

	const handleTimerComplete = () => {
		setStartGame(true);
		console.log("30-second timer completed, game can start!");

		// Optional: Auto-close modal and start game
		if (onGameStart) {
			onGameStart();
		}
	};

	const handleCloseModal = () => {
		// Reset states when modal closes
		setStartMusic(false);
		setStartGame(false);
		onOpenChange(false);
	};

	return (
		<Dialog open={isOpen} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-md">
				<DialogHeader>
					<DialogTitle className="text-xl font-semibold text-center">
						{!startMusic && "Get Ready"}
						{startMusic && !startGame && `Playing ${musicGenre}`}
						{startGame && "Ready to Start!"}
					</DialogTitle>
					<DialogDescription className="text-center">
						{!startMusic && (
							<span>
								Click "Start Test" to begin the 30-second{" "}
								{musicGenre} period, followed by the test
								questions.
							</span>
						)}
						{startMusic && !startGame && (
							<span>
								Listen to the {musicGenre} and get ready. The
								test will begin when the timer reaches zero.
							</span>
						)}
						{startGame && (
							<span>
								The test is ready to begin! Close this modal to
								start answering questions.
							</span>
						)}
					</DialogDescription>
				</DialogHeader>

				<div className="flex flex-col items-center gap-6 mt-4">
					{/* Show timer only when music has started but game hasn't started */}
					{startMusic && !startGame && (
						<div className="text-center">
							<p className="text-sm text-gray-600 mb-4">
								Preparation time remaining:
							</p>
							<CountdownTimer
								initialTime={30}
								onComplete={handleTimerComplete}
								size="lg"
								variant="default"
								autoStart={true}
							/>
						</div>
					)}

					{/* Start Test Button - only show before music starts */}
					{!startMusic && (
						<Button
							onClick={handleStartTest}
							size="lg"
							className="px-8 py-3"
						>
							Start Test
						</Button>
					)}

					{/* Begin Game Button - only show after timer completes */}
					{startGame && (
						<Button
							onClick={handleCloseModal}
							size="lg"
							className="px-8 py-3"
						>
							Begin Game
						</Button>
					)}

					{/* Status indicators for debugging */}
					<div className="text-xs text-gray-400 text-center">
						<p>Start Music: {startMusic ? "✓" : "✗"}</p>
						<p>Start Game: {startGame ? "✓" : "✗"}</p>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
