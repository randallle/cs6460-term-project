"use client";

import { useState } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";

export default function CountdownTimerPreview() {
	const [timerKey, setTimerKey] = useState(0);

	const handleTimerComplete = () => {
		console.log("Timer completed!");
		alert("Time's up!");
	};

	const handleTick = (timeLeft: number) => {
		console.log(`Time left: ${timeLeft} seconds`);
	};

	const resetTimer = () => {
		setTimerKey((prev) => prev + 1); // Force re-mount to reset timer
	};

	return <div></div>;
}
