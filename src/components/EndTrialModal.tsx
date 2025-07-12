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
	setTrialIndex: React.Dispatch<React.SetStateAction<number>>;
	setTestComplete: React.Dispatch<React.SetStateAction<boolean>>;
	setShowEndTrialModal: React.Dispatch<React.SetStateAction<boolean>>;
	setShowStartTrialModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EndTrialModal({
	trialIndex,
	setTrialIndex,
	setTestComplete,
	setShowEndTrialModal,
	setShowStartTrialModal,
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
							// Check if this was the last trial (index 3 for 4 trials)
							if (trialIndex >= TRIAL_NAMES.length - 1) {
								setTestComplete(true);
							} else {
								// Move to next trial and show start modal
								setTrialIndex((prev) => prev + 1);
								setShowStartTrialModal(true);
							}
							setShowEndTrialModal(false);
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
