"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface IntroductionStepsProps {
	onComplete?: () => void;
}

const steps = [
	{
		title: "Welcome!",
		description:
			"This is a cognitive test that measures your ability to identify patterns and logical relationships with various music genres playing in the background.",
	},
	{
		title: "How This Works",
		description:
			"On the left, you'll be presented with 2x2 or 3x3 matrices of images with one missing piece. Look carefully at the patterns, both vertical and horizontal, in the rows and columns.",
	},
	{
		title: "Selecting an Answer",
		description:
			'On the right are the answer choices. Select an answer choice and click "Submit". Note: Once you submit an answer, you CANNOT go back and change it.',
	},
	{
		title: "Trials",
		description:
			"There will be a total of 4 trials. 1. Silence (control) 2. Classical 3. Lo-Fi 4. EDM. Each trial will start off with 30 seconds of music (or silence).",
	},
	{
		title: "Trials (continued)",
		description:
			"After the initial 30 seconds of music, you will have 60 seconds to complete as many RPM problems as you can.",
	},
	{
		title: "Testing your audio",
		description:
			"Test your audio and adjust to a comfortable volume. Please make sure to be in a quiet environment or use noise-cancelling headphones.",
	},
	{
		title: "Ready to Begin?",
		description:
			"Once you proceed from this step, the test will begin. Good luck!",
	},
];

export default function IntroductionSteps({
	onComplete,
}: IntroductionStepsProps) {
	const [currentStep, setCurrentStep] = useState(0);

	const nextStep = () => {
		if (currentStep < steps.length - 1) {
			setCurrentStep(currentStep + 1);
		} else if (onComplete) {
			onComplete();
		}
	};

	const prevStep = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1);
		}
	};

	const currentStepData = steps[currentStep];

	return (
		<div className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-8 bg-gray-50">
			<div className="w-full max-w-2xl">
				{/* Main content card */}
				<Card className="mb-8">
					<CardHeader className="text-center">
						<CardTitle className="text-2xl font-bold">
							{currentStepData.title}
						</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="text-lg text-center leading-relaxed">
							{currentStepData.description}
						</CardDescription>
					</CardContent>
				</Card>

				{/* Navigation buttons */}
				<div className="flex justify-between">
					<Button
						variant="outline"
						onClick={prevStep}
						disabled={currentStep === 0}
						className="px-8 py-2"
						size="lg"
					>
						Previous
					</Button>

					{currentStep === steps.length - 1 ? (
						<Button
							onClick={nextStep}
							className="px-8 py-2"
							size="lg"
						>
							Start
						</Button>
					) : (
						<Button
							onClick={nextStep}
							className="px-8 py-2"
							size="lg"
						>
							Next
						</Button>
					)}
				</div>
			</div>

			{/* Progress indicator */}
			{/* <div className="mb-8">
					<div className="flex justify-center gap-2 mb-4">
						{steps.map((_, index) => (
							<div
								key={index}
								className={`w-3 h-3 rounded-full transition-colors ${
									index === currentStep
										? "bg-blue-500"
										: index < currentStep
										? "bg-blue-300"
										: "bg-gray-300"
								}`}
							/>
						))}
					</div>
					<div className="text-center text-sm text-gray-500">
						Step {currentStep + 1} of {steps.length}
					</div>
				</div> */}
		</div>
	);
}
