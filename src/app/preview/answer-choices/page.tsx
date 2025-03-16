"use client";

import AnswerChoices from "@/components/AnswerChoices";

export default function AnswerChoicesGridPreview() {
	const filenames = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];

	return (
		<main>
			<AnswerChoices
				choices={filenames}
				onSelect={() => {
					console.log("Button clicked!");
				}}
			/>
		</main>
	);
}
