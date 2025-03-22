const AGE_GROUPS = [
	"Under 18",
	"18-24",
	"25-34",
	"35-44",
	"45-54",
	"55-64",
	"Over 65",
] as const;

const GENDERS = ["Male", "Female", "Other"] as const;

const EDUCATION = [
	"Some high school or less",
	"High school diploma or equivalent (e.g., GED)",
	"Some college, no degree",
	"Associate degree (2-year college degree)",
	"Bachelor's degree (e.g., BA, BS)",
	"Master's degree (e.g., MA, MS, MBA)",
	"Doctorate or professional degree (e.g., PhD, MD, JD)",
	"Prefer not to say",
] as const;

const YESNO = ["Yes", "No"] as const;

const FREQUENCIES = ["Rarely", "Occasionally", "Daily", "Constantly"] as const;

const DEFAULT_GENRES = [
	"Rock",
	"Pop",
	"Hip Hop",
	"Jazz",
	"Classical",
	"Electronic",
	"R&B",
	"Country",
	"Metal",
	"Folk",
];

export { AGE_GROUPS, GENDERS, EDUCATION, YESNO, FREQUENCIES, DEFAULT_GENRES };
