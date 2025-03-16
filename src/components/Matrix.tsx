"use client";
import Image from "next/image";

interface MatrixProps {
	items: string[];
}

export default function Matrix({ items }: MatrixProps) {
	const gridStyle = {
		display: "grid",
		gridTemplateColumns: `repeat(${
			items.length === 3 ? "2" : "3"
		}, minmax(0, 1fr))`,
	};

	return (
		<div className="w-fit gap-4" style={gridStyle}>
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
