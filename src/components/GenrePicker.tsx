"use client";

import { Toggle } from "@/components/ui/toggle";
import { useState, useEffect } from "react";

interface GenrePickerProps {
	genres: string[]; // All possible genres
	selectedGenres: string[]; // Genres currently toggled on
	setSelectedGenres: (genres: string[]) => void; // Function to update form state
	reset?: boolean; // New prop to trigger reset
}

export default function GenrePicker({
	genres,
	selectedGenres,
	setSelectedGenres,
	reset,
}: GenrePickerProps) {
	const [localGenres, setLocalGenres] = useState<string[]>(genres);
	const [isAddingNew, setIsAddingNew] = useState(false);
	const [newGenre, setNewGenre] = useState("");

	// Reset local genres when reset prop changes
	useEffect(() => {
		if (reset) {
			setLocalGenres(genres);
		}
	}, [reset, genres]);

	const handleAddNew = () => {
		setIsAddingNew(true);
	};

	const handleNewGenreSubmit = () => {
		const genreToAdd = toTitleCase(newGenre.trim());
		if (genreToAdd) {
			if (!localGenres.includes(genreToAdd)) {
				setLocalGenres((prev) => [...prev, genreToAdd]);
			}

			if (!selectedGenres.includes(genreToAdd)) {
				setSelectedGenres([...selectedGenres, genreToAdd]);
			}
		}
		setNewGenre("");
		setIsAddingNew(false);
	};

	function toTitleCase(str: string) {
		return str
			.toLowerCase()
			.split(" ")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
			.join(" ");
	}

	return (
		<div className="flex flex-wrap gap-2">
			{localGenres.map((genre) => (
				<Toggle
					key={genre}
					className="rounded-md w-fit px-3"
					value={genre}
					aria-label={`Toggle ${genre}`}
					pressed={selectedGenres.includes(genre)}
					onPressedChange={(pressed) => {
						if (pressed) {
							setSelectedGenres([...selectedGenres, genre]);
						} else {
							setSelectedGenres(
								selectedGenres.filter((g) => g !== genre)
							);
						}
					}}
				>
					{genre}
				</Toggle>
			))}

			{isAddingNew && (
				<Toggle
					className="rounded-md w-fit px-3"
					pressed={true}
					value="new"
					aria-label="New genre input"
				>
					<input
						type="text"
						value={newGenre}
						maxLength={15}
						onChange={(e) => setNewGenre(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								handleNewGenreSubmit();
							} else if (e.key === "Escape") {
								setIsAddingNew(false);
							}
						}}
						className="focus:outline-none w-28"
						placeholder="Enter a genre"
						autoFocus
						onClick={(e) => e.stopPropagation()}
						onBlur={() => {
							setIsAddingNew(false);
							setNewGenre("");
						}}
					/>
				</Toggle>
			)}

			<Toggle
				key="+"
				className="rounded-md w-fit px-3"
				variant="outline"
				value="+"
				aria-label="Toggle add genre"
				onClick={handleAddNew}
				disabled={isAddingNew}
			>
				+
			</Toggle>
		</div>
	);
}
