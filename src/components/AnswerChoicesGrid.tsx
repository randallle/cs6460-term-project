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
		<div className="w-fit h-fit gap-4 grid grid-cols-2">
			{choices.map((choice, index) => (
				<div key={index} className="w-40 h-40 border relative">
					<Button
						key={choice}
						onClick={() => onSelect(choice)}
						className={`aspect-square p-2 h-40 w-40 ${
							index % 2 === 0
								? "justify-self-end"
								: "justify-self-start"
						}`}
						variant="outline"
					>
						<Image
							src={`/sample-problems/problem02/${choice}`}
							width={100}
							height={100}
							alt={choice}
							className="w-full"
						/>
					</Button>
				</div>
			))}
		</div>
	);
}
