"use client";

import Game from "@/components/Game";
import MobileWarningModal from "@/components/MobileWarningModal";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, Suspense } from "react";

function GamePageContent() {
	const searchParams = useSearchParams();
	const router = useRouter();

	useEffect(() => {
		const fromSurvey = searchParams.get("from") === "survey";

		if (!fromSurvey) {
			// Redirect to survey if not coming from survey
			router.replace("/experiment/survey");
			return;
		}
	}, [searchParams, router]);

	// Add beforeunload warning to prevent accidental refresh
	useEffect(() => {
		const handleBeforeUnload = (e: BeforeUnloadEvent) => {
			e.preventDefault();
			e.returnValue = ""; // Modern browsers ignore custom messages and show default
		};

		window.addEventListener("beforeunload", handleBeforeUnload);

		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
	}, []);

	// Don't render the game if we're redirecting
	const fromSurvey = searchParams.get("from") === "survey";
	if (!fromSurvey) {
		return null; // or a loading spinner
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
