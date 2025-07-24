"use client";

import IntroductionSteps from "@/components/IntroductionSteps";
import { useRouter } from "next/navigation";
import MobileWarningModal from "@/components/MobileWarningModal";

export default function IntroductionStepsPage() {
	const router = useRouter();

	const handleComplete = () => {
		router.push("/experiment/survey");
	};

	return (
		<div>
			<MobileWarningModal />
			<IntroductionSteps onComplete={handleComplete} />;
		</div>
	);
}
