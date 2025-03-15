"use client";

import { Button } from "./ui/button";
import Image from "next/image";

interface AnswerChoicesGridProps {
	choices: string[];
	onSelect: (choice: string) => void;
}

export default function AnswerChoicesGrid({
	choices,
	onSelect,
}: AnswerChoicesGridProps) {
	return (
		<div>
			{choices.map((choice) => (
				<Button key={choice} onClick={() => onSelect(choice)}>
					<Image
						src={`/sample-problem/${choice}`}
						width={100}
						height={100}
						alt={choice}
					/>
				</Button>
			))}
		</div>
	);
}
