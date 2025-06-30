import Board from "@/components/Board";
import { fetchProblemById } from "@/lib/firebaseUtils";

export default async function BoardPreview() {
	const problem = await fetchProblemById("BB07");

	return (
		<main>
			<Board problem={problem} />
		</main>
	);
}
