"use client";
import Image from "next/image";

interface MatrixProps {
	items: string[];
}

export default function Matrix({ items }: MatrixProps) {
	return (
		<div
			className={`w-fit h-fit gap-4 grid grid-cols-${
				items.length === 3 ? "2" : "3"
			}`}
		>
			{items.map((item, index) => (
				<div key={index} className="w-40 h-40 border relative">
					<Image
						src={`/sample-problems/problem02/${item}`}
						alt={item}
						className="object-contain"
						fill
						sizes="(max-width: 768px) 50vw, 33vw"
					/>
				</div>
			))}
			<div className="w-40 h-40 border relative flex items-center justify-center">
				<div className="absolute inset-0 animate-pulse shadow-[0_0_15px_3px] shadow-yellow-300"></div>

				<h1 className="relative text-3xl font-bold">?</h1>
			</div>
		</div>
	);
}
