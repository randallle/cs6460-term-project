"use client";
import Image from "next/image";

interface MatrixProps {
	items: string[];
}

export default function Matrix({ items }: MatrixProps) {
	return (
		<div
			className={`w-fit gap-4 grid ${
				items.length === 3 ? "grid-cols-2" : "grid-cols-3"
			}`}
		>
			{items.map((item, index) => (
				<div key={index} className="w-50 h-50 border relative">
					<Image
						src={`/sample-problem/${item}`}
						alt={item}
						className="object-contain"
						fill
					/>
				</div>
			))}
			<div className="bg-green-400 w-50">
				<h1>?</h1>
			</div>
		</div>
	);
}
