"use client";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TRIAL_NAMES } from "@/lib/constants";

interface EndTrialModalProps {
	trialIndex: number;
	startMusic: boolean;
	setStartMusic: React.Dispatch<React.SetStateAction<boolean>>;
	setTrialIndex: React.Dispatch<React.SetStateAction<number>>;
	setTestComplete: React.Dispatch<React.SetStateAction<boolean>>;
	setStartGame: React.Dispatch<React.SetStateAction<boolean>>;
	setTrialComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EndTrialModal({
	trialIndex,
	startMusic,
	setTrialIndex,
	setTestComplete,
	setStartGame,
	setStartMusic,
	setTrialComplete,
}: EndTrialModalProps) {
	return (
		<Dialog open={true} modal={true}>
			<DialogContent className="max-w-md">
				<DialogHeader>
					<DialogTitle className="text-xl font-semibold text-center">{`Trial ${trialIndex} Complete!`}</DialogTitle>
					<DialogDescription>
						Click the button below to continue.
					</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col items-center gap-6 mt-4">
					<Button
						onClick={() => {
							if (trialIndex < TRIAL_NAMES.length) {
								setTrialIndex((prev) => prev + 1);
								setStartGame(false);
								setStartMusic(false);
								setTrialComplete(false);
							}
							if (trialIndex >= TRIAL_NAMES.length) {
								console.log(trialIndex >= TRIAL_NAMES.length);
								setTestComplete(true);
							}
						}}
						size="lg"
						className="px-8 py-3"
					>
						Next Trial
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
