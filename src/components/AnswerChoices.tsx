"use client";

import { Button } from "./ui/button";
import Image from "next/image";

interface AnswerChoicesProps {
	choices: string[];
	onSelect: (choice: string) => void;
}

export default function AnswerChoices({
	choices,
	onSelect,
}: AnswerChoicesProps) {
	return (
		<div className="w-fit gap-4 grid grid-cols-2">
			{choices.map((choice, index) => (
				<div key={index} className="w-50 h-50 border relative">
					<Button
						key={choice}
						onClick={() => onSelect(choice)}
						className={`aspect-square p-2 h-50 w-50 ${
							index % 2 === 0
								? "justify-self-end"
								: "justify-self-start"
						}`}
						variant="outline"
					>
						<Image
							src={`/sample-problem/${choice}`}
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
