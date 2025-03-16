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
		<div className="grid grid-cols-2 gap-4 place-items-center bg-red-400 p-4">
			{choices.map((choice, index) => (
				<Button
					key={choice}
					onClick={() => onSelect(choice)}
					className={`aspect-square p-2 h-50 w-50 ${
						index % 2 === 0
							? "justify-self-end"
							: "justify-self-start"
					}`}
				>
					<Image
						src={`/sample-problem/${choice}`}
						width={100}
						height={100}
						alt={choice}
						className="w-full"
					/>
				</Button>
			))}
		</div>
	);
}
