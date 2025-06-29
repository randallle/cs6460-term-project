"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
// import { cn } from "@/lib/utils";

interface CountdownTimerProps {
	initialTime: number;
	onComplete?: () => void;
}

export default function CountdownTimer({
	initialTime,
	onComplete,
}: CountdownTimerProps) {
	const [timeLeft, setTimeLeft] = useState(initialTime);

	useEffect(() => {
		if (timeLeft <= 0) {
			onComplete?.();
			return;
		}

		const timer = setInterval(() => {
			setTimeLeft((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [timeLeft, onComplete]);

	return (
		<div style={{ fontSize: "2rem", textAlign: "center" }}>
			<Card style={{ width: "150px", margin: "0 auto" }}>
				<CardContent>
					{Math.floor(timeLeft / 60)}:
					{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
				</CardContent>
			</Card>
		</div>
	);
}
