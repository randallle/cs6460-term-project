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

interface StartTrialModalProps {
	trialIndex: number;
	setStartMusic: React.Dispatch<React.SetStateAction<boolean>>;
	setShowStartTrialModal: React.Dispatch<React.SetStateAction<boolean>>;
	setShowPreGameModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function StartTrialModal({
	trialIndex,
	setStartMusic,
	setShowStartTrialModal,
	setShowPreGameModal,
}: StartTrialModalProps) {
	return (
		<Dialog open={true} modal={true}>
			<DialogContent className="max-w-md">
				<DialogHeader>
					<DialogTitle className="text-xl font-semibold text-center">
						{`Trial ${trialIndex}: ${TRIAL_NAMES[trialIndex]}`}
					</DialogTitle>
					<DialogDescription>
						Click &quot;Start Test&quot; to begin the 30-second
						period of{" "}
						{TRIAL_NAMES[trialIndex] === "Silence"
							? TRIAL_NAMES[trialIndex].toLowerCase()
							: `${TRIAL_NAMES[trialIndex].toLowerCase()} music`}
						. After the 30 seconds, you will start answering RPM
						problems.
					</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col items-center gap-6 mt-4">
					<Button
						onClick={() => {
							setStartMusic(true);
							setShowStartTrialModal(false);
							setShowPreGameModal(true);
						}}
						size="lg"
						className="px-8 py-3"
					>
						Start Test
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
