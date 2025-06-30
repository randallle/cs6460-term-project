"use client";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
// import { TRIAL_NAMES } from "@/lib/constants";

interface EndTrialModalProps {
	trialIndex: number;
	startMusic: boolean;
	setStartMusic: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EndTrialModal({
	trialIndex,
	startMusic,
	setStartMusic,
}: EndTrialModalProps) {
	return (
		<Dialog>
			<DialogContent className="max-w-md">
				<DialogHeader>
					<DialogTitle className="text-xl font-semibold text-center"></DialogTitle>
					<DialogDescription></DialogDescription>
				</DialogHeader>
				<div className="flex flex-col items-center gap-6 mt-4"></div>
			</DialogContent>
		</Dialog>
	);
}
