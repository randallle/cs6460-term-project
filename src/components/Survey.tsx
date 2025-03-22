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

import { Button } from "@/components/ui/button";
import {
	AGE_GROUPS,
	GENDERS,
	EDUCATION,
	YESNO,
	FREQUENCIES,
} from "@/lib/constants";
import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
	SelectItem,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const formSchema = z.object({
	age: z.enum(AGE_GROUPS),
	gender: z.enum(GENDERS),
	education: z.enum(EDUCATION),
	rpm: z.enum(YESNO),
	musicFrequency: z.enum(FREQUENCIES),
	musicWorkStudy: z.enum(YESNO),

	musicalInstrument: z.enum(YESNO),
});

export default function Survey() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	const handleSubmit = () => {};

	return (
		<div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(handleSubmit)}
					className="max-w-md w-full flex flex-col gap-4"
				>
					<h2>Demographics & General Information</h2>
					<FormField
						control={form.control}
						name="age"
						render={({ field }) => {
							return (
								<FormItem>
									<FormLabel>Age</FormLabel>
									<Select onValueChange={field.onChange}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select an age group"></SelectValue>
											</SelectTrigger>
										</FormControl>

										<SelectContent>
											{AGE_GROUPS.map((ageGroup) => (
												<SelectItem
													key={ageGroup}
													value={ageGroup}
												>
													{ageGroup}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
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

					<FormField
						control={form.control}
						name="education"
						render={({ field }) => {
							return (
								<FormItem>
									<FormLabel>Education</FormLabel>
									<Select onValueChange={field.onChange}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select an education level"></SelectValue>
											</SelectTrigger>
										</FormControl>

										<SelectContent>
											{EDUCATION.map((level) => (
												<SelectItem
													key={level}
													value={level}
												>
													{level}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							);
						}}
					/>

					<FormField
						control={form.control}
						name="rpm"
						render={({ field }) => {
							return (
								<FormItem>
									<FormLabel>
										Have you taken a Raven&apos;s
										Progressive Matrices test before?
									</FormLabel>
									<Select onValueChange={field.onChange}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select an option"></SelectValue>
											</SelectTrigger>
										</FormControl>

										<SelectContent>
											{YESNO.map((option) => (
												<SelectItem
													key={option}
													value={option}
												>
													{option}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							);
						}}
					/>

					<h2>Musical Background & Preferences</h2>
					<FormField
						control={form.control}
						name="musicFrequency"
						render={({ field }) => {
							return (
								<FormItem>
									<FormLabel>
										How often do you listen to music?
									</FormLabel>
									<FormControl>
										<RadioGroup
											onValueChange={field.onBlur}
											defaultValue={field.value}
											className="flex gap-4"
										>
											{FREQUENCIES.map((freq) => (
												<FormItem key={freq}>
													<FormControl>
														<RadioGroupItem
															value={freq}
														/>
													</FormControl>
													<FormLabel>
														{freq}
													</FormLabel>
												</FormItem>
											))}
										</RadioGroup>
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>

					<FormField
						control={form.control}
						name="musicWorkStudy"
						render={({ field }) => {
							return (
								<FormItem>
									<FormLabel>
										Do you regularly listen to music while
										studying or working?
									</FormLabel>
									<Select onValueChange={field.onChange}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select an option"></SelectValue>
											</SelectTrigger>
										</FormControl>

										<SelectContent>
											{YESNO.map((option) => (
												<SelectItem
													key={option}
													value={option}
												>
													{option}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							);
						}}
					/>

					<FormField
						control={form.control}
						name="musicalInstrument"
						render={({ field }) => {
							return (
								<FormItem>
									<FormLabel>
										Do you play a musical instrument?
									</FormLabel>
									<Select onValueChange={field.onChange}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select an option"></SelectValue>
											</SelectTrigger>
										</FormControl>

										<SelectContent>
											{YESNO.map((option) => (
												<SelectItem
													key={option}
													value={option}
												>
													{option}
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
