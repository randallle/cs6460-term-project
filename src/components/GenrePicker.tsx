"use client";

import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";

interface GenrePickerProps {
	genres: string[];
}

export default function GenrePicker({ genres }: GenrePickerProps) {
	const [localGenres, setLocalGenres] = useState<string[]>(genres);
	const [isAddingNew, setIsAddingNew] = useState(false);
	const [newGenre, setNewGenre] = useState("");
	const [pressedStates, setPressedStates] = useState<{
		[key: string]: boolean;
	}>(
		// Initialize all existing genres as pressed
		Object.fromEntries(genres.map((genre) => [genre, false]))
	);

	const handleAddNew = () => {
		setIsAddingNew(true);
	};

	const handleNewGenreSubmit = () => {
		const genreToAdd = toTitleCase(newGenre.trim());
		if (genreToAdd) {
			if (!localGenres.includes(genreToAdd)) {
				setLocalGenres((prev) => [...prev, genreToAdd]);
			}

			setPressedStates((prev) => ({
				...prev,
				[genreToAdd]: true,
			}));
		}
		setNewGenre("");
		setIsAddingNew(false);
	};

	function toTitleCase(str: string) {
		return str
			.toLowerCase()
			.split(" ") // Split into words
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
			.join(" "); // Join back into a string
	}

	return (
		<div className="flex flex-wrap gap-2">
			{localGenres.map((genre) => (
				<Toggle
					key={genre}
					className="rounded-md w-fit px-3"
					value={genre}
					aria-label={`Toggle ${genre}`}
					pressed={pressedStates[genre]}
					onPressedChange={(pressed) => {
						setPressedStates((prev) => ({
							...prev,
							[genre]: pressed,
						}));
					}}
				>
					{`${genre}`}
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
