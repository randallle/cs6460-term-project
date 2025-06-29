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
import { TRIAL_NAMES } from "@/lib/constants";

interface PreGameModalProps {
	trialIndex: number;
	setTrialIndex: React.Dispatch<React.SetStateAction<number>>;
	startMusic: boolean;
	setStartMusic: React.Dispatch<React.SetStateAction<boolean>>;
	startGame: boolean;
	setStartGame: React.Dispatch<React.SetStateAction<boolean>>;
	trialComplete: boolean;
	setTrialComplete: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function PreGameModal({
	trialIndex,
	setTrialIndex,
	startMusic,
	setStartMusic,
	startGame,
	setStartGame,
	trialComplete,
	setTrialComplete,
}: PreGameModalProps) {
	return (
		<Dialog open={!startGame || trialComplete} modal={true}>
			<DialogContent className="max-w-md">
				<DialogHeader>
					<DialogTitle className="text-xl font-semibold text-center">
						{`Trial ${trialIndex}${
							trialComplete
								? " Complete!"
								: ": " + TRIAL_NAMES[trialIndex]
						}`}
					</DialogTitle>
					<DialogDescription>
						{!startMusic && (
							<span>
								Click &quot;Start Test&quot; to begin the
								30-second period of{" "}
								{TRIAL_NAMES[trialIndex] === "Silence"
									? TRIAL_NAMES[trialIndex].toLowerCase()
									: `${TRIAL_NAMES[
											trialIndex
									  ].toLowerCase()} music`}
								. After the 30 seconds, you will start answering
								RPM problems.
							</span>
						)}

						{trialComplete && (
							<span>
								Click the button below to proceed to the next
								trial.
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

					{trialComplete && (
						<Button
							onClick={() => {
								setTrialIndex((prev) => prev + 1);
								setStartMusic((prev) => !prev);
								setStartGame((prev) => !prev);
								setTrialComplete((prev) => !prev);
							}}
							size="lg"
							className="px-8 py-3"
						>
							Next Trial
						</Button>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
}
