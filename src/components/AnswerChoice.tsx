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
					onSelect();
				}}
				className="aspect-square p-2 h-40 w-40 relative"
				variant="outline"
			>
				<Image
					src={`/sample-problems/problem02/${filename}`}
					width={150}
					height={150}
					alt={filename}
				/>
			</Button>
		</div>
	);
}
