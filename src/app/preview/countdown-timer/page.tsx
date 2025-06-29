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

	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
			<div className="text-center">
				<h1 className="text-3xl font-bold mb-4">
					Countdown Timer Preview
				</h1>
				<p className="text-gray-600 mb-8">
					Test different countdown timer configurations
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{/* Basic Timer */}
				<div className="text-center">
					<h3 className="text-lg font-semibold mb-4">
						Basic Timer (60s)
					</h3>
					<CountdownTimer
						key={`basic-${timerKey}`}
						initialTime={60}
						onComplete={handleTimerComplete}
						onTick={handleTick}
					/>
				</div>

				{/* Small Timer */}
				<div className="text-center">
					<h3 className="text-lg font-semibold mb-4">
						Small Timer (30s)
					</h3>
					<CountdownTimer
						key={`small-${timerKey}`}
						initialTime={30}
						size="sm"
						onComplete={() => console.log("Small timer done!")}
					/>
				</div>

				{/* Large Timer */}
				<div className="text-center">
					<h3 className="text-lg font-semibold mb-4">
						Large Timer (90s)
					</h3>
					<CountdownTimer
						key={`large-${timerKey}`}
						initialTime={90}
						size="lg"
						variant="warning"
						onComplete={() => console.log("Large timer done!")}
					/>
				</div>

				{/* Seconds Only */}
				<div className="text-center">
					<h3 className="text-lg font-semibold mb-4">
						Seconds Only (15s)
					</h3>
					<CountdownTimer
						key={`seconds-${timerKey}`}
						initialTime={15}
						showMinutes={false}
						variant="danger"
						onComplete={() => console.log("Seconds timer done!")}
					/>
				</div>

				{/* Manual Start */}
				<div className="text-center">
					<h3 className="text-lg font-semibold mb-4">
						Manual Start (45s)
					</h3>
					<CountdownTimer
						key={`manual-${timerKey}`}
						initialTime={45}
						autoStart={false}
						onComplete={() => console.log("Manual timer done!")}
					/>
				</div>

				{/* Game Timer (5 minutes) */}
				<div className="text-center">
					<h3 className="text-lg font-semibold mb-4">
						Game Timer (5min)
					</h3>
					<CountdownTimer
						key={`game-${timerKey}`}
						initialTime={300}
						size="lg"
						onComplete={() => console.log("Game session complete!")}
						onTick={(time) => {
							if (time === 60) console.log("1 minute warning!");
							if (time === 10) console.log("10 seconds left!");
						}}
					/>
				</div>
			</div>

			<div className="text-center">
				<Button onClick={resetTimer} variant="outline">
					Reset All Timers
				</Button>
			</div>

			<div className="max-w-2xl text-center text-sm text-gray-500">
				<h4 className="font-semibold mb-2">Features:</h4>
				<ul className="space-y-1">
					<li>
						• Automatic color changes (warning at 30s, danger at
						10s)
					</li>
					<li>• Pulse animation when time is critical (≤10s)</li>
					<li>• MM:SS or seconds-only display options</li>
					<li>• Configurable sizes (sm, md, lg)</li>
					<li>• Start/pause/reset controls</li>
					<li>• Completion and tick callbacks</li>
				</ul>
			</div>
		</div>
	);
}
