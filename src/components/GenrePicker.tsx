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
		if (newGenre.trim()) {
			if (!localGenres.includes(newGenre.trim())) {
				setLocalGenres((prev) => [...prev, newGenre.trim()]);
			}
			setNewGenre("");
			setPressedStates((prev) => ({
				...prev,
				[newGenre]: true,
			}));
		}
		setIsAddingNew(false);
	};

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
						onChange={(e) => setNewGenre(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								handleNewGenreSubmit();
							} else if (e.key === "Escape") {
								setIsAddingNew(false);
							}
						}}
						className="focus:outline-none"
						placeholder="Enter a genre"
						autoFocus
						onClick={(e) => e.stopPropagation()}
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
