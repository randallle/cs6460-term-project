"use client";

import Matrix from "@/components/Matrix";

export default function MatrixPreview() {
	const filenames = ["A.png", "B.png", "C.png"];
	return (
		<main>
			<Matrix items={filenames} />
		</main>
	);
}
