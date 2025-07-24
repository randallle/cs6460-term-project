"use client";

import { useRouter } from "next/navigation";
import { submitResponses } from "@/lib/firebaseUtils";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function EndTestModal() {
	const router = useRouter();
	const handleSubmit = async () => {
		await submitResponses();
		router.push("/experiment/end");
	};

	return (
		<Dialog open={true} modal={true}>
			<DialogContent className="max-w-md">
				<DialogHeader>
					<DialogTitle className="text-xl font-semibold text-center">
						Almost done!
					</DialogTitle>
					<DialogDescription>
						Click the button below to submit your results.
					</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col items-center gap-6 mt-4">
					<Button onClick={handleSubmit}>Submit</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
