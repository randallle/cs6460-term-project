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
	onContinue: () => void;
}

export default function EndTrialModal({
	trialIndex,
	onContinue,
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
						onClick={onContinue}
						size="lg"
						className="px-8 py-3"
					>
						{trialIndex >= TRIAL_NAMES.length - 1
							? "Finish Test"
							: "Next Trial"}
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
