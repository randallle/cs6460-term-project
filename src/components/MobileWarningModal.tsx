"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { isMobileDevice } from "@/lib/utils";

export default function MobileWarningModal() {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		// Set client flag to true after component mounts
		setIsClient(true);
		
		// Only check for mobile after client-side hydration
		const mobile = isMobileDevice();
		setIsMobile(mobile);
		setIsOpen(mobile);
	}, []);

	// Don't render anything until client-side hydration is complete
	if (!isClient) return null;
	
	if (!isMobile) return null;

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="text-center">
						⚠️ Mobile Device Detected
					</DialogTitle>
					<DialogDescription className="text-center">
						This experiment is not optimized for mobile devices. For
						accurate results and the best experience, please access
						this study from a desktop or laptop computer.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className="sm:justify-center">
					<Button onClick={() => setIsOpen(false)} className="w-full">
						I Understand
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
