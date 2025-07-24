"use client";

import IntroductionSteps from "@/components/IntroductionSteps";
import { useRouter } from "next/navigation";

export default function IntroductionStepsPage() {
	const router = useRouter();

	const handleComplete = () => {
		router.push("/experiment/survey");
	};

	return <IntroductionSteps onComplete={handleComplete} />;
}
