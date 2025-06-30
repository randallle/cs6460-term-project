"use client";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import CountdownTimer from "@/components/CountdownTimer";

interface PreGameModalProps {
	setStartGame: React.Dispatch<React.SetStateAction<boolean>>;
	trialComplete: boolean;
}
export default function PreGameModal({ setStartGame }: PreGameModalProps) {
	return (
		<Dialog open={true} modal={true}>
			<DialogContent className="max-w-md">
				<DialogHeader>
					<DialogTitle className="text-xl font-semibold text-center">
						Almost done!
					</DialogTitle>
				</DialogHeader>
				<div className="flex flex-col items-center gap-6 mt-4">
					<div className="text-center">
						<p className="text-sm text-gray-600 mb-4">
							Preparation time remaining:
						</p>
						<CountdownTimer
							initialTime={2}
							onComplete={() => {
								setStartGame(true);
							}}
						/>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
