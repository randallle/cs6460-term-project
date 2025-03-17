"use client";

import { Button } from "./ui/button";
import Image from "next/image";

interface AnswerChoiceProps {
	filename: string;
	onSelect: () => void;
}

export default function AnswerChoice({
	filename,
	onSelect,
}: AnswerChoiceProps) {
	return (
		<div key={filename} className="w-40 h-40 border relative">
			<Button
				onClick={() => {
					console.log(`${filename} clicked`);
					onSelect();
				}}
				className="aspect-square p-2 h-40 w-40 relative"
				variant="outline"
			>
				<Image
					src={`/sample-problems/problem02/${filename}`}
					fill
					sizes="(max-width: 768px) 50vw, 33vw"
					alt={filename}
					className="w-full"
				/>
			</Button>
		</div>
	);
}
