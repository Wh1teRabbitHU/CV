type EducationItem = {
	timeframe: string;
	institution: string;
	degree: string;
};

const EducationData: EducationItem[] = [
	{
		timeframe: '2007-2013',
		institution: 'Kecskemét College, Faculty of Mechanical Engineering and Automation',
		degree: 'Information Technology Engineer, Bachelor Degree'
	}
];

export default EducationData;
export type { EducationItem };
