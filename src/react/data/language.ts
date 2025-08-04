type LanguageItem = {
	name: string;
	level: number; // 1-5 scale
};

const LanguageData: LanguageItem[] = [
	{
		name: 'Hungarian',
		level: 5
	},
	{
		name: 'English',
		level: 4
	},
	{
		name: 'German',
		level: 2
	}
];

export default LanguageData;
export type { LanguageItem };
