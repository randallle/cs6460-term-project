"use client";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import CountdownTimer from "@/components/CountdownTimer";
import { TRIAL_NAMES } from "@/lib/constants";

interface PreGameModalProps {
	trialIndex: number;
	setStartGame: React.Dispatch<React.SetStateAction<boolean>>;
	setShowPreGameModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function PreGameModal({
	trialIndex,
	setStartGame,
	setShowPreGameModal,
}: PreGameModalProps) {
	return (
		<Dialog open={true} modal={true}>
			<DialogContent className="max-w-md">
				<DialogHeader>
					<DialogTitle className="text-xl font-semibold text-center">
						{`Trial ${trialIndex}: ${TRIAL_NAMES[trialIndex]}`}
					</DialogTitle>
				</DialogHeader>
				<div className="flex flex-col items-center gap-6 mt-4">
					<div className="text-center">
						<p className="text-sm text-gray-600 mb-4">
							Preparation time remaining:
						</p>
						<CountdownTimer
							initialTime={5}
							onComplete={() => {
								setStartGame(true);
								setShowPreGameModal(false);
							}}
						/>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
