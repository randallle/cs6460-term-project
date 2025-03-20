"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

import { AGE_BUCKETS, GENDERS, EDUCATION, YESNO } from "@/lib/constants";

const FormSchema = z.object({
	age: z.string({
		required_error: "Please select an age range.",
	}),
	gender: z.string({
		required_error: "Please select a gender.",
	}),
	education: z.string({
		required_error: "Please select an education level.",
	}),
});
