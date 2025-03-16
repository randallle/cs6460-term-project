"use client";
import Image from "next/image";

interface MatrixProps {
	items: string[];
}

export default function Matrix({ items }: MatrixProps) {
	return (
		<div
			className={`grid grid-cols-${
				items.length === 3 ? "2" : "3"
			} place-items-center bg-blue-400`}
		>
			{items.map((item) => (
				<Image
					src={`/sample-problem/${item}`}
					width={100}
					height={100}
					alt={item}
					// className="w-full"
					key={item}
				/>
			))}
		</div>
	);

	// return <p>Hello world!</p>;
}
