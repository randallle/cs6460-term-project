"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CountdownTimerProps {
	initialTime: number; // Time in seconds
	onComplete?: () => void; // Callback when timer reaches 0
	onTick?: (timeLeft: number) => void; // Callback on each second
	autoStart?: boolean; // Whether to start automatically
	className?: string;
	size?: "sm" | "md" | "lg";
	variant?: "default" | "warning" | "danger";
	showMinutes?: boolean; // Whether to show MM:SS format or just seconds
}

export default function CountdownTimer({
	initialTime,
	onComplete,
	onTick,
	autoStart = true,
	className,
	size = "md",
	variant = "default",
	showMinutes = true,
}: CountdownTimerProps) {
	const [timeLeft, setTimeLeft] = useState(initialTime);
	const [isActive, setIsActive] = useState(autoStart);
	const [isCompleted, setIsCompleted] = useState(false);

	useEffect(() => {
		let interval: NodeJS.Timeout | null = null;

		if (isActive && timeLeft > 0) {
			interval = setInterval(() => {
				setTimeLeft((time) => {
					const newTime = time - 1;
					onTick?.(newTime);
					return newTime;
				});
			}, 1000);
		} else if (timeLeft === 0 && !isCompleted) {
			setIsActive(false);
			setIsCompleted(true);
			onComplete?.();
		}

		return () => {
			if (interval) clearInterval(interval);
		};
	}, [isActive, timeLeft, onComplete, onTick, isCompleted]);

	const formatTime = (seconds: number) => {
		if (showMinutes) {
			const mins = Math.floor(seconds / 60);
			const secs = seconds % 60;
			return `${mins.toString().padStart(2, "0")}:${secs
				.toString()
				.padStart(2, "0")}`;
		}
		return seconds.toString();
	};

	const getVariantStyles = () => {
		switch (variant) {
			case "warning":
				return "text-yellow-600 border-yellow-200 bg-yellow-50";
			case "danger":
				return "text-red-600 border-red-200 bg-red-50";
			default:
				return "text-foreground border-border bg-card";
		}
	};

	const getSizeStyles = () => {
		switch (size) {
			case "sm":
				return "text-lg p-2";
			case "lg":
				return "text-4xl p-6";
			default:
				return "text-2xl p-4";
		}
	};

	const start = () => setIsActive(true);
	const pause = () => setIsActive(false);
	const reset = () => {
		setTimeLeft(initialTime);
		setIsActive(false);
		setIsCompleted(false);
	};

	const getDisplayVariant = () => {
		if (timeLeft <= 10) return "danger";
		if (timeLeft <= 30) return "warning";
		return variant;
	};

	return (
		<div className={cn("flex flex-col items-center gap-2", className)}>
			<Card
				className={cn(
					getVariantStyles(),
					"transition-colors duration-300"
				)}
			>
				<CardContent
					className={cn(
						"font-mono font-bold text-center",
						getSizeStyles()
					)}
				>
					<div
						className={
							getDisplayVariant() === "danger"
								? "animate-pulse"
								: ""
						}
					>
						{formatTime(timeLeft)}
					</div>
				</CardContent>
			</Card>

			{/* Control buttons (optional, can be hidden by not rendering) */}
			<div className="flex gap-2">
				{!isActive && !isCompleted && (
					<button
						onClick={start}
						className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
					>
						Start
					</button>
				)}
				{isActive && (
					<button
						onClick={pause}
						className="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
					>
						Pause
					</button>
				)}
				<button
					onClick={reset}
					className="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
				>
					Reset
				</button>
			</div>
		</div>
	);

	// Expose control methods for external use
	// You can access these via ref if needed
	// return { start, pause, reset, timeLeft, isActive, isCompleted };
}
