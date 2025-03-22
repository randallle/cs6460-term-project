"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormField,
	FormItem,
	FormMessage,
	FormLabel,
	FormControl,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GENDERS } from "@/lib/constants";
import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
	SelectItem,
} from "@/components/ui/select";

const formSchema = z.object({
	age: z.string(),
	gender: z.enum(GENDERS),
});

export default function Survey() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			age: "",
		},
	});

	const handleSubmit = () => {};

	return (
		<div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(handleSubmit)}
					className="max-w-md w-full flex flex-col gap-4"
				>
					<FormField
						control={form.control}
						name="age"
						render={({ field }) => {
							return (
								<FormItem>
									<FormLabel>Age</FormLabel>
									<FormControl>
										<Input
											placeholder="Age"
											type="age"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>

					<FormField
						control={form.control}
						name="gender"
						render={({ field }) => {
							return (
								<FormItem>
									<FormLabel>Gender</FormLabel>
									<Select onValueChange={field.onChange}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select a gender"></SelectValue>
											</SelectTrigger>
										</FormControl>

										<SelectContent>
											{GENDERS.map((gender) => (
												<SelectItem
													key={gender}
													value={gender}
												>
													{gender}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							);
						}}
					/>
					<Button type="submit" className="w-full">
						Submit
					</Button>
				</form>
			</Form>
		</div>
	);
}
