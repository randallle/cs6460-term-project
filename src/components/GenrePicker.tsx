"use client";

import { Toggle } from "@/components/ui/toggle";

interface GenrePickerProps {
	genres: [string];
}

export default function GenrePicker({ genres }: GenrePickerProps) {
	return (
		<div className="flex flex-wrap gap-2">
			{genres.map((genre) => (
				<Toggle
					key={genre}
					className="rounded-md w-fit px-3"
					value={genre}
					aria-label={`Toggle ${genre}`}
				>
					{`${genre}`}
				</Toggle>
			))}
		</div>
	);
}
