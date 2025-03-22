const AGE_GROUPS = [
	{ label: "Under 18", value: "Under 18" },
	{ label: "18-24", value: "18-24" },
	{ label: "25-34", value: "25-34" },
	{ label: "35-44", value: "35-44" },
	{ label: "45-54", value: "45-54" },
	{ label: "55-64", value: "55-64" },
	{ label: "Over 65", value: "Over 65" },
];

const GENDERS = ["Male", "Female", "Other"] as const;

const EDUCATION = [
	{ label: "Some high school or less", value: "Some high school or less" },
	{
		label: "High school diploma or equivalent (e.g., GED)",
		value: "High school diploma or equivalent (e.g., GED)",
	},
	{ label: "Some college, no degree", value: "Some college, no degree" },
	{
		label: "Associate degree (2-year college degree)",
		value: "Associate degree (2-year college degree)",
	},
	{
		label: "Bachelor’s degree (e.g., BA, BS)",
		value: "Bachelor’s degree (e.g., BA, BS)",
	},
	{
		label: "Master’s degree (e.g., MA, MS, MBA)",
		value: "Master’s degree (e.g., MA, MS, MBA)",
	},
	{
		label: "Doctorate or professional degree (e.g., PhD, MD, JD)",
		value: "Doctorate or professional degree (e.g., PhD, MD, JD)",
	},
	{ label: "Prefer not to say", value: "Prefer not to say" },
];

const YESNO = [
	{ label: "Yes", value: "Yes" },
	{ label: "No", value: "No" },
];

export { AGE_GROUPS, GENDERS, EDUCATION, YESNO };
