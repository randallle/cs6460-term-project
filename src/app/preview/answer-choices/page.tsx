"use client";

import AnswerChoicesGrid from "@/components/AnswerChoicesGrid";

export default function AnswerChoicesGridPreview() {
	const filenames = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];

	return (
		<main>
			<AnswerChoicesGrid
				choices={filenames}
				onSelect={() => {
					console.log("Button clicked!");
				}}
			/>
		</main>
	);
}
