"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
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
	DEFAULT_GENRES,
	SCALE,
} from "@/lib/constants";
import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
	SelectItem,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import GenrePicker from "@/components/GenrePicker";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
	age: z.enum(AGE_GROUPS),
	gender: z.enum(GENDERS),
	education: z.enum(EDUCATION),
	rpm: z.enum(YESNO),
	musicFrequency: z.enum(FREQUENCIES),
	musicWorkStudy: z.enum(YESNO),
	genres: z.array(z.string()).optional(),
	musicalInstrument: z.enum(YESNO),
	focus: z.number().min(1).max(10),
	stress: z.number().min(1).max(10),
});

export default function Survey() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});
	const [resetGenres, setResetGenres] = useState(false);
	const router = useRouter();

	// Helper function to check if a field is required
	const isFieldRequired = (fieldName: keyof z.infer<typeof formSchema>) => {
		const field = formSchema.shape[fieldName];
		return !field.isOptional();
	};

	const handleSubmit = (data: z.infer<typeof formSchema>) => {
		console.log("Form data:", data);
		// Save each field to session storage
		Object.entries(data).forEach(([key, value]) => {
			if (value !== undefined) {
				// Convert arrays and objects to JSON strings, keep primitives as strings
				const stringValue =
					typeof value === "object"
						? JSON.stringify(value)
						: String(value);
				sessionStorage.setItem(key, stringValue);
			}
		});
		router.push("/preview/game");
	};

	return (
		<div className="border border-gray-300 rounded-xl p-6 shadow-sm">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(handleSubmit)}
					className="w-full flex flex-col gap-4"
				>
					<section className="w-full flex flex-col gap-4">
						<h2>Demographics & General Information</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<FormField
								control={form.control}
								name="age"
								render={({ field }) => {
									return (
										<FormItem>
											<FormLabel>
												Age
												{isFieldRequired("age") && (
													<span className="text-red-500">
														*
													</span>
												)}
											</FormLabel>
											<Select
												onValueChange={field.onChange}
											>
												<FormControl>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Select an age group"></SelectValue>
													</SelectTrigger>
												</FormControl>

												<SelectContent>
													{AGE_GROUPS.map(
														(ageGroup) => (
															<SelectItem
																key={ageGroup}
																value={ageGroup}
															>
																{ageGroup}
															</SelectItem>
														)
													)}
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
											<FormLabel>
												Gender
												{isFieldRequired("gender") && (
													<span className="text-red-500">
														*
													</span>
												)}
											</FormLabel>
											<Select
												onValueChange={field.onChange}
											>
												<FormControl>
													<SelectTrigger className="w-full">
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
											<FormLabel>
												Education
												{isFieldRequired(
													"education"
												) && (
													<span className="text-red-500">
														*
													</span>
												)}
											</FormLabel>
											<Select
												onValueChange={field.onChange}
											>
												<FormControl>
													<SelectTrigger className="w-full">
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
						</div>

						<FormField
							control={form.control}
							name="rpm"
							render={({ field }) => {
								return (
									<FormItem>
										<div className="grid md:grid-cols-3 gap-8">
											<FormLabel className="col-span-2 flex justify-end">
												Have you taken a Raven&apos;s
												Progressive Matrices test
												before?
												{isFieldRequired("rpm") && (
													<span className="text-red-500">
														*
													</span>
												)}
											</FormLabel>
											<Select
												onValueChange={field.onChange}
											>
												<FormControl>
													<SelectTrigger className="w-full">
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
										</div>

										<FormMessage />
									</FormItem>
								);
							}}
						/>
						<Separator className="my-2" />
					</section>
					<section className="w-full flex flex-col gap-4">
						<h2>Musical Background & Preferences</h2>
						<FormField
							control={form.control}
							name="musicFrequency"
							render={({ field }) => {
								return (
									<FormItem>
										<div className="grid md:grid-cols-[auto_1fr] gap-6">
											<FormLabel className="flex justify-start">
												How often do you listen to
												music?
												{isFieldRequired(
													"musicFrequency"
												) && (
													<span className="text-red-500">
														*
													</span>
												)}
											</FormLabel>
											<FormControl>
												<RadioGroup
													onValueChange={
														field.onChange
													}
													defaultValue={field.value}
													className="flex gap-4 border border-gray-200 rounded-xl p-4"
												>
													{FREQUENCIES.map((freq) => (
														<FormItem
															key={freq}
															className="flex flex-col items-center w-full"
														>
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
										</div>

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
										<div className="grid md:grid-cols-3 gap-8">
											<FormLabel className="col-span-2 flex justify-end">
												Do you regularly listen to music
												while studying or working?
												{isFieldRequired(
													"musicWorkStudy"
												) && (
													<span className="text-red-500">
														*
													</span>
												)}
											</FormLabel>
											<Select
												onValueChange={field.onChange}
											>
												<FormControl>
													<SelectTrigger className="w-full">
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
										</div>

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
										<div className="grid md:grid-cols-3 gap-8">
											<FormLabel className="col-span-2 flex justify-end">
												Do you play a musical
												instrument?
												{isFieldRequired(
													"musicalInstrument"
												) && (
													<span className="text-red-500">
														*
													</span>
												)}
											</FormLabel>
											<Select
												onValueChange={field.onChange}
											>
												<FormControl>
													<SelectTrigger className="w-full">
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
										</div>

										<FormMessage />
									</FormItem>
								);
							}}
						/>

						<FormField
							control={form.control}
							name="genres"
							render={({ field }) => {
								return (
									<FormItem>
										<FormLabel className="flex justify-start">
											<div>
												Select your favorite music
												genres, if any:
												{isFieldRequired("genres") && (
													<span className="text-red-500">
														*
													</span>
												)}
											</div>
											<Button
												variant="outline"
												size="sm"
												onClick={(e) => {
													e.preventDefault(); // Prevent form submission
													form.setValue("genres", []);
													setResetGenres(true);
													// Reset back to false after a short delay
													setTimeout(() => {
														setResetGenres(false);
													}, 0);
												}}
											>
												Reset
											</Button>
										</FormLabel>
										<FormControl>
											<GenrePicker
												genres={DEFAULT_GENRES}
												selectedGenres={
													field.value ?? []
												}
												setSelectedGenres={
													field.onChange
												}
												reset={resetGenres}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								);
							}}
						/>

						<Separator className="my-2" />
					</section>
					<section className="w-full flex flex-col gap-4">
						<h2>Mood Factors</h2>
						<FormField
							control={form.control}
							name="focus"
							render={({ field }) => {
								return (
									<FormItem>
										<FormLabel>
											On a scale of 1-10, how focused do
											you feel right now (1 = not at all,
											10 = extremely focused)?
											{isFieldRequired("focus") && (
												<span className="text-red-500">
													*
												</span>
											)}
										</FormLabel>
										<FormControl>
											<RadioGroup
												onValueChange={(value) =>
													field.onChange(
														Number(value)
													)
												}
												defaultValue={String(
													field.value
												)}
												className="flex gap-4 p-4"
											>
												{SCALE.map((level) => (
													<FormItem
														key={level}
														className="flex flex-col items-center w-full"
													>
														<FormControl>
															<RadioGroupItem
																value={String(
																	level
																)}
															/>
														</FormControl>
														<FormLabel>
															{level}
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
							name="stress"
							render={({ field }) => {
								return (
									<FormItem>
										<FormLabel>
											On a scale of 1-10, how stressed do
											you feel right now? (1 = not at all,
											10 = extremely stressed)
											{isFieldRequired("stress") && (
												<span className="text-red-500">
													*
												</span>
											)}
										</FormLabel>
										<FormControl>
											<RadioGroup
												onValueChange={(value) =>
													field.onChange(
														Number(value)
													)
												}
												defaultValue={String(
													field.value
												)}
												className="flex gap-4 p-4"
											>
												{SCALE.map((level) => (
													<FormItem
														key={level}
														className="flex flex-col items-center w-full"
													>
														<FormControl>
															<RadioGroupItem
																value={String(
																	level
																)}
															/>
														</FormControl>
														<FormLabel>
															{level}
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
						<Separator className="my-2" />
					</section>
					<div className="flex justify-center">
						<Button type="submit" className="w-3xs">
							Next Step
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
