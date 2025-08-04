type ExperienceItem = {
	company: string;
	city: string;
	positions: {
		title: string;
		periodStart: Date;
		periodEnd?: Date;
	}[];
};

const ExperienceData: ExperienceItem[] = [
	{
		company: 'Relai AG',
		city: 'Zürich',
		positions: [
			{
				title: 'Mobile Tech Lead',
				periodStart: new Date('2025-04-01'),
				periodEnd: undefined
			},
			{
				title: 'Software Engineer',
				periodStart: new Date('2024-11-01'),
				periodEnd: new Date('2025-04-01')
			},
			{
				title: 'Head of Tech',
				periodStart: new Date('2024-01-01'),
				periodEnd: new Date('2024-11-01')
			},
			{
				title: 'Tech Lead',
				periodStart: new Date('2023-05-01'),
				periodEnd: new Date('2024-01-01')
			}
		]
	},

	{
		company: 'idealo GmbH',
		city: 'Berlin',
		positions: [
			{
				title: 'Lead Developer',
				periodStart: new Date('2021-12-01'),
				periodEnd: new Date('2023-05-01')
			},
			{
				title: 'Senior Full Stack Developer',
				periodStart: new Date('2019-10-01'),
				periodEnd: new Date('2021-12-01')
			}
		]
	},

	{
		company: 'Visoft Kft',
		city: 'Budapest',
		positions: [
			{
				title: 'Lead Developer',
				periodStart: new Date('2018-01-01'),
				periodEnd: new Date('2019-08-01')
			},
			{
				title: 'Full Stack Developer',
				periodStart: new Date('2013-09-01'),
				periodEnd: new Date('2018-01-01')
			}
		]
	}
];

export default ExperienceData;
export type { ExperienceItem };
