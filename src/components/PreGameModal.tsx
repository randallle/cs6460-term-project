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
	trialNumber: number;
	trialName: string;
	startMusic: boolean;
	setStartMusic: React.Dispatch<React.SetStateAction<boolean>>;
	startGame: boolean;
	setStartGame: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function PreGameModal({
	trialNumber,
	trialName,
	startMusic,
	setStartMusic,
	startGame,
	setStartGame,
}: PreGameModalProps) {
	return (
		<Dialog open={!startGame} modal={true}>
			<DialogContent className="max-w-md">
				<DialogHeader>
					<DialogTitle className="text-xl font-semibold text-center">
						Trial {trialNumber}: {trialName}
					</DialogTitle>
					<DialogDescription>
						{!startMusic && (
							<span>
								Click &quot;Start Test&quot; to begin the
								30-second period of{" "}
								{trialName === "Silence"
									? trialName.toLowerCase()
									: `${trialName.toLowerCase()} music`}
								. After the 30 seconds, you will start answering
								RPM problems.
							</span>
						)}
					</DialogDescription>
				</DialogHeader>

				<div className="flex flex-col items-center gap-6 mt-4">
					{startMusic && !startGame && (
						<div className="text-center">
							<p className="text-sm text-gray-600 mb-4">
								Preparation time remaining:
							</p>
							<CountdownTimer
								initialTime={5}
								onComplete={() => {
									setStartGame((prev) => !prev);
								}}
							/>
						</div>
					)}

					{!startMusic && (
						<Button
							onClick={() => setStartMusic((prev) => !prev)}
							size="lg"
							className="px-8 py-3"
						>
							Start Test
						</Button>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
}
