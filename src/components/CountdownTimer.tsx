"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
// import { cn } from "@/lib/utils";

interface CountdownTimerProps {
	initialTime: number;
	onComplete?: () => void;
	startCondition?: boolean;
}

export default function CountdownTimer({
	initialTime,
	onComplete,
	startCondition = true,
}: CountdownTimerProps) {
	const [timeLeft, setTimeLeft] = useState(initialTime);
	const [isRunning, setIsRunning] = useState(false);
	const [hasStarted, setHasStarted] = useState(false);

	useEffect(() => {
		if (startCondition && !hasStarted) {
			setTimeLeft(initialTime); // Reset timer when starting
			setIsRunning(true);
			setHasStarted(true);
		} else if (!startCondition) {
			setHasStarted(false);
			setIsRunning(false);
		}
	}, [startCondition, hasStarted, initialTime]);

	useEffect(() => {
		if (!isRunning) return;

		if (timeLeft <= 0) {
			onComplete?.();
			setIsRunning(false);
			return;
		}

		const timer = setInterval(() => {
			setTimeLeft((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [timeLeft, isRunning, onComplete]);

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
