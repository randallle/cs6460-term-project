"use client";

import { useState, useEffect, useRef } from "react";
import { TRIAL_NAMES } from "@/lib/constants";
import Board from "@/components/Board";
import PreGameModal from "@/components/PreGameModal";
import StartTrialModal from "@/components/StartTrialModal";
import EndTrialModal from "@/components/EndTrialModal";
import EndTestModal from "@/components/EndTestModal";
import CountdownTimer from "@/components/CountdownTimer";

export default function Game() {
	// Modal states
	const [showStartTrialModal, setShowStartTrialModal] = useState(true);
	const [showPreGameModal, setShowPreGameModal] = useState(false);
	const [showEndTrialModal, setShowEndTrialModal] = useState(false);

	// Game states
	const [startMusic, setStartMusic] = useState(false);
	const [startGame, setStartGame] = useState(false);
	const [trialIndex, setTrialIndex] = useState(0);
	const [testComplete, setTestComplete] = useState(false);

	// Audio states
	const audioRef = useRef<HTMLAudioElement>(null);

	// Add audio control effect
	useEffect(() => {
		if (!startMusic || !audioRef.current) return;

		const audioFile =
			trialIndex == 0
				? null
				: `/${TRIAL_NAMES[trialIndex].toLowerCase()}.mp3`;

		if (audioFile) {
			audioRef.current.src = audioFile;
			audioRef.current.loop = true;
			audioRef.current.play().catch(console.error);
		}

		// Cleanup function to stop audio
		return () => {
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current.currentTime = 0;
			}
		};
	}, [startMusic, trialIndex]);

	// Stop audio when game ends
	useEffect(() => {
		if (!startGame && audioRef.current) {
			audioRef.current.pause();
		}
	}, [startGame]);

	return (
		<div className="relative">
			<audio ref={audioRef} preload="auto" />

			{showStartTrialModal && (
				<StartTrialModal
					trialIndex={trialIndex}
					onStartTest={() => {
						setStartMusic(true);
						setShowStartTrialModal(false);
						setShowPreGameModal(true);
					}}
				/>
			)}
			{showPreGameModal && (
				<PreGameModal
					trialIndex={trialIndex}
					setStartGame={setStartGame}
					setShowPreGameModal={setShowPreGameModal}
				/>
			)}
			{showEndTrialModal && (
				<EndTrialModal
					trialIndex={trialIndex}
					onContinue={() => {
						setShowEndTrialModal(false);
						// Check if this was the last trial (index 3 for 4 trials)
						if (trialIndex >= TRIAL_NAMES.length - 1) {
							setTestComplete(true);
						} else {
							// Move to next trial and show start modal
							setTrialIndex((prev) => prev + 1);
							setShowStartTrialModal(true);
							setStartMusic(false);
						}
					}}
				/>
			)}
			{testComplete && <EndTestModal />}
			{/* Background content with conditional blur */}
			<div className={startGame ? "" : "blur-3xl"}>
				<div className="pt-5">
					<CountdownTimer
						initialTime={60}
						onComplete={() => {
							setStartGame(false);
							setShowEndTrialModal(true);
						}}
						startCondition={startGame}
					/>
				</div>

				<Board trialIndex={trialIndex} />
			</div>
		</div>
	);
}
