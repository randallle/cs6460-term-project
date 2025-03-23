"use client";
import Image from "next/image";

interface MatrixProps {
	items: string[];
	choices: string[];
	selectedAnswer: number;
}

export function AnswerPlaceHolder() {
	return (
		<div className="w-40 h-40 border relative flex items-center justify-center">
			<div className="absolute inset-0 animate-pulse shadow-[0_0_15px_3px] shadow-yellow-300"></div>

			<h1 className="relative text-3xl font-bold">?</h1>
		</div>
	);
}

export default function Matrix({
	items,
	choices,
	selectedAnswer,
}: MatrixProps) {
	const totalCells = items.length + 1;
	const gridSize = Math.ceil(Math.sqrt(totalCells));

	return (
		<div
			className="w-fit h-fit gap-4 grid"
			style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
		>
			{items.map((item, index) => (
				<div key={index} className="w-40 h-40 border relative">
					<Image
						src={item}
						alt={item}
						className="object-contain"
						fill
						sizes="(max-width: 768px) 50vw, 33vw"
						draggable="false"
					/>
				</div>
			))}
			{selectedAnswer === -1 ? (
				<AnswerPlaceHolder />
			) : (
				<div className="w-40 h-40 border relative">
					<div className="absolute inset-0 animate-pulse shadow-[0_0_15px_3px] shadow-yellow-300"></div>

					<Image
						src={choices[selectedAnswer]}
						alt={choices[selectedAnswer]}
						className="object-contain"
						fill
						sizes="(max-width: 768px) 50vw, 33vw"
						draggable="false"
					/>
				</div>
			)}
		</div>
	);
}
