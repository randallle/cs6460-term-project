"use client";

import GenrePicker from "@/components/GenrePicker";

export default function SurveyPreview() {
	const genres = [
		"Classical",
		"Jazz",
		"Blues",
		"Rock",
		"Pop",
		"Hip-Hop / Rap",
		"R&B / Soul",
		"Electronic / EDM",
		"Lo-fi",
		"Country",
		"Folk",
		"Reggae",
		"Metal",
		"Punk",
		"Alternative",
		"Indie",
	];
	return (
		<main>
			<GenrePicker genres={genres} />
		</main>
	);
}
