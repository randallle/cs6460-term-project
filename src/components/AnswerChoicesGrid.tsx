"use client";

// import { Button } from "./ui/button";
// import Image from "next/image";
import AnswerChoice from "./AnswerChoice";

interface AnswerChoicesGridProps {
	choices: string[];
}

export default function AnswerChoicesGrid({ choices }: AnswerChoicesGridProps) {
	return (
		<div className="w-fit h-fit gap-4 grid grid-cols-2">
			{choices.map((choice) => (
				<AnswerChoice
					key={choice}
					filename={choice}
					onSelect={() => {}}
				/>
			))}
		</div>
	);
}
