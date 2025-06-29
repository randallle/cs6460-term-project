"use client";

import IntroductionSteps from "@/components/IntroductionSteps";
// import { useRouter } from "next/navigation";

export default function IntroductionStepsPreview() {
	// const router = useRouter();

	const handleComplete = () => {
		console.log("Introduction completed!");
		// You can navigate to the next page or perform any action here
		// router.push("/preview/board");
	};

	return <IntroductionSteps onComplete={handleComplete} />;
}
