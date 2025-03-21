"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown, Divide } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
// import { toast } from "@/components/hooks/use-toast";
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

import { AGE_GROUPS, GENDERS, EDUCATION, YESNO } from "@/lib/constants";

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

export default function Survey() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	const onSubmit = () => {
		console.log("Submit button was pressed");
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="age"
					render={({ field }) => (
						<FormItem className="flex flex-col">
							<FormLabel>Age</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant="outline"
											role="combobox"
											className={cn(
												"w-[200px] justify-between",
												!field.value &&
													"text-muted-foreground"
											)}
										>
											{field.value
												? AGE_GROUPS.find(
														(age) =>
															age.value ===
															field.value
												  )?.label
												: "Select an age group"}
											<ChevronsUpDown className="opacity-50" />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className="w-[200px] p-0">
									<Command>
										<CommandInput
											placeholder="Search age groups..."
											className="h-9"
										/>
										<CommandList>
											<CommandEmpty>
												No age group found.
											</CommandEmpty>
											<CommandGroup>
												{AGE_GROUPS.map((age) => (
													<CommandItem
														value={age.label}
														key={age.value}
														onSelect={() => {
															form.setValue(
																"age",
																age.value
															);
														}}
													>
														{age.label}
														<Check
															className={cn(
																"ml-auto",
																age.value ===
																	field.value
																	? "opacity-100"
																	: "opacity-0"
															)}
														></Check>
													</CommandItem>
												))}
											</CommandGroup>
										</CommandList>
									</Command>
								</PopoverContent>
							</Popover>
							<FormDescription></FormDescription>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="gender"
					render={({ field }) => (
						<FormItem className="flex flex-col">
							<FormLabel>Gender</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant="outline"
											role="combobox"
											className={cn(
												"w-[200px] justify-between",
												!field.value &&
													"text-muted-foreground"
											)}
										>
											{field.value
												? GENDERS.find(
														(gender) =>
															gender.value ===
															field.value
												  )?.label
												: "Select a gender"}
											<ChevronsUpDown className="opacity-50" />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className="w-[200px] p-0">
									<Command>
										<CommandInput
											placeholder="Search genders..."
											className="h-9"
										/>
										<CommandList>
											<CommandEmpty>
												No gender found.
											</CommandEmpty>
											<CommandGroup>
												{GENDERS.map((gender) => (
													<CommandItem
														value={gender.label}
														key={gender.value}
														onSelect={() => {
															form.setValue(
																"gender",
																gender.value
															);
														}}
													>
														{gender.label}
														<Check
															className={cn(
																"ml-auto",
																gender.value ===
																	field.value
																	? "opacity-100"
																	: "opacity-0"
															)}
														></Check>
													</CommandItem>
												))}
											</CommandGroup>
										</CommandList>
									</Command>
								</PopoverContent>
							</Popover>
							<FormDescription></FormDescription>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="education"
					render={({ field }) => (
						<FormItem className="flex flex-col">
							<FormLabel>Education</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant="outline"
											role="combobox"
											className={cn(
												"w-[250px] justify-between",
												!field.value &&
													"text-muted-foreground"
											)}
										>
											{field.value
												? EDUCATION.find(
														(education) =>
															education.value ===
															field.value
												  )?.label
												: "Select an education level"}
											<ChevronsUpDown className="opacity-50" />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className="w-[250px] p-0">
									<Command>
										<CommandInput
											placeholder="Search education levels..."
											className="h-9"
										/>
										<CommandList>
											<CommandEmpty>
												No education level found.
											</CommandEmpty>
											<CommandGroup>
												{EDUCATION.map((education) => (
													<CommandItem
														value={education.label}
														key={education.value}
														onSelect={() => {
															form.setValue(
																"education",
																education.value
															);
														}}
													>
														{education.label}
														<Check
															className={cn(
																"ml-auto",
																education.value ===
																	field.value
																	? "opacity-100"
																	: "opacity-0"
															)}
														></Check>
													</CommandItem>
												))}
											</CommandGroup>
										</CommandList>
									</Command>
								</PopoverContent>
							</Popover>
							<FormDescription>
								Please select your education level.
							</FormDescription>
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}
