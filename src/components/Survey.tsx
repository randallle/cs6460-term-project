"use client";

import { useState } from "react";

interface Response {
	age: string;
	gender: string;
	education: string;
	rpmExp: string;
	musicFrequency: string;
	listensWhileWorking: string;
	favoriteGenres: [string];
	playsInstrument: string;
	yearsOfTraining: string;
	focusLevel: number;
	stressLevel: number;
}
export default function Survey() {
	return (
		<div>
			<ul>
				<li>
					Demographics
					<ul>
						<li>Age</li>
						<li>Gender</li>
						<li>Education Level</li>
						<li>
							Have you taken a Raven&apos;s Progressive Matrices
							test before?
						</li>
					</ul>
				</li>
				<li>
					Musical Background & Preferences
					<ul>
						<li>How often do you listen to music?</li>
						<li>
							Do you regularly listen to music while studying or
							working?
						</li>
						<li>What genres of music do you usually listen to?</li>
						<li>Do you play a musical instrument?</li>
						<li>
							If yes, how many years of musical training do you
							have?
						</li>
					</ul>
				</li>
				<li>
					Mood Factors
					<ul>
						<li>
							On a scale of 1-10, how focused do you feel right
							now?
						</li>
						<li>
							On a scale of 1-10, how stressed do you feel right
							now?
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
}
