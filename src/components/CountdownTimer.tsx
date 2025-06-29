"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CountdownTimer {
	initialTime: number;
	onComplete?: () => void;
}

export default function CountdownTimer() {}
