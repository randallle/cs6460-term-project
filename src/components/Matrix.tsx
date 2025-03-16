"use client";
import Image from "next/image";

interface MatrixProps {
	items: string[];
}

export default function Matrix({ items }: MatrixProps) {
	return (
		<div
			className={`w-fit gap-4 grid grid-cols-${
				items.length === 3 ? "2" : "3"
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
			<div className="w-50 h-50 border relative flex items-center justify-center">
				<h1>?</h1>
			</div>
		</div>
	);
}
