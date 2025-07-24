"use client";

import Game from "@/components/Game";
import MobileWarningModal from "@/components/MobileWarningModal";

export default function GamePage() {
	return (
		<div>
			<MobileWarningModal />
			<Game />;
		</div>
	);
}
