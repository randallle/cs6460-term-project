import { Metadata } from "next";

export const metadata: Metadata = {
	title: "CS6460 Project: End",
	description:
		"An experiment studying how music genre influences cognitive performance using Raven's Progressive Matrices",
};

export default function ExperimentPage() {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="text-center">
				<h1 className="text-4xl font-bold text-gray-800 mb-4">
					Thank you for participating.
				</h1>
				<p className="text-lg text-gray-600">
					Your answers have been successfully submitted. You may now
					close this browser window.
				</p>
			</div>
		</div>
	);
}
