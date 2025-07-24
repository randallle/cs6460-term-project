"use client";

import Game from "@/components/Game";
import MobileWarningModal from "@/components/MobileWarningModal";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, Suspense, useState } from "react";

function GamePageContent() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [isAuthorized, setIsAuthorized] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Check both URL parameter and session storage
		const fromSurvey = searchParams.get("from") === "survey";
		const surveyCompleted =
			sessionStorage.getItem("surveyCompleted") === "true";

		if (fromSurvey) {
			// Mark survey as completed if coming from survey
			sessionStorage.setItem("surveyCompleted", "true");
			setIsAuthorized(true);
		} else if (surveyCompleted) {
			// Allow access if survey was previously completed
			setIsAuthorized(true);
		} else {
			// Redirect to survey
			router.replace("/experiment/survey");
			return;
		}

		setIsLoading(false);
	}, [searchParams, router]);

	// Add beforeunload warning to prevent accidental refresh
	useEffect(() => {
		if (isAuthorized) {
			const handleBeforeUnload = (e: BeforeUnloadEvent) => {
				e.preventDefault();
				e.returnValue = "";
			};

			window.addEventListener("beforeunload", handleBeforeUnload);

			return () => {
				window.removeEventListener("beforeunload", handleBeforeUnload);
			};
		}
	}, [isAuthorized]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!isAuthorized) {
		return null;
	}

	return (
		<div>
			<MobileWarningModal />
			<Game />
		</div>
	);
}

export default function GamePage() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<GamePageContent />
		</Suspense>
	);
}
