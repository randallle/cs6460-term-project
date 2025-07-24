"use client";

import Survey from "@/components/Survey";
import MobileWarningModal from "@/components/MobileWarningModal";

export default function SurveyPage() {
	return (
		<main>
			<MobileWarningModal />
			<Survey />
		</main>
	);
}
