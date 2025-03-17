"use client";

import { Button } from "./ui/button";
import Image from "next/image";

interface AnswerChoiceProps {
	filename: string;
	selectedAnswer: number;
	onSelect: () => void;
	index: number;
}

export default function AnswerChoice({
	filename,
	selectedAnswer,
	onSelect,
	index,
}: AnswerChoiceProps) {
	return (
		<div key={filename} className="w-40 h-40 relative">
			<Button
				onClick={() => {
					onSelect();
				}}
				className={`aspect-square p-2 h-40 w-40 relative ${
					selectedAnswer === index
						? "shadow-[0_0_15px_3px] shadow-green-300"
						: ""
				}`}
				variant="outline"
			>
				<Image
					src={`/sample-problems/problem02/${filename}`}
					width={150}
					height={150}
					alt={filename}
					draggable="false"
				/>
			</Button>
		</div>
	);
}
