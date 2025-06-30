import { db, storage } from "./firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { ref, listAll, getDownloadURL } from "firebase/storage";

interface ProblemData {
	id: string;
	description: string;
	answer: number;
	title: string;
}

export async function fetchRandomProblemByDifficulty(difficulty: string) {
	const problemsRef = collection(db, "problems");

	const q =
		difficulty === "B"
			? query(problemsRef, where("id", ">=", "B"), where("id", "<", "C"))
			: query(problemsRef, where("id", "<=", "C"));

	const querySnapshot = await getDocs(q);

	if (querySnapshot.empty) {
		throw new Error(`No problems were found with difficulty ${difficulty}`);
	}

	const problem =
		querySnapshot.docs[
			Math.floor(Math.random() * querySnapshot.docs.length)
		];
	const problemData = problem.data();

	const matrixImages = await fetchImagesFromStorage(
		`problems/${problemData.id}/matrix`
	);

	const choiceImages = await fetchImagesFromStorage(
		`problems/${problemData.id}/choices`
	);

	return {
		...(problemData as ProblemData),
		matrix: matrixImages,
		choices: choiceImages,
	};
}

export async function fetchProblemById(id: string) {
	const problemsRef = collection(db, "problems");

	// Query Firestore for the specific problem by ID
	const q = query(problemsRef, where("id", "==", id));
	const querySnapshot = await getDocs(q);

	if (querySnapshot.empty) {
		throw new Error(`No problem found with ID ${id}`);
	}

	// Since IDs are unique, we expect only one document
	const problem = querySnapshot.docs[0];
	const problemData = problem.data();

	// Fetch associated images from Firebase Storage
	const matrixImages = await fetchImagesFromStorage(
		`problems/${problemData.id}/matrix`
	);

	const choiceImages = await fetchImagesFromStorage(
		`problems/${problemData.id}/choices`
	);

	// Return the problem data along with the images
	return {
		...(problemData as ProblemData),
		matrix: matrixImages,
		choices: choiceImages,
	};
}

async function fetchImagesFromStorage(folderPath: string) {
	const folderRef = ref(storage, folderPath);
	const fileList = await listAll(folderRef);
	const urls = await Promise.all(
		fileList.items.map((file) => getDownloadURL(file))
	);
	return urls;
}
