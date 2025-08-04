type SkillItem = {
	category: string;
	list: string[];
};

const SkillData: SkillItem[] = [
	{
		category: 'Programming Languages',
		list: ['Java', 'Javascript', 'Typescript', 'C#', 'C', 'Python', 'Golang', 'PHP', 'Ruby']
	},
	{
		category: 'Technologies',
		list: ['AWS (EC2, S3, Glue, Athena, etc...)', 'Maven & Gradle', 'Spark', 'Terraform', 'Kafka', 'Docker']
	},
	{
		category: 'Databases',
		list: ['Postgresql', 'Oracle DB', 'MongoDB', 'SQLite', 'MySQL']
	},
	{
		category: 'Frameworks & Others',
		list: [
			'Spring',
			'Express.js',
			'React.js',
			'React-Native',
			'Vue.js',
			'Jpa',
			'Winforms',
			'Handlebars',
			'Thymeleaf',
			'Velocity',
			'Less',
			'Sass',
			'HTML5',
			'CSS3'
		]
	}
];

export default SkillData;
export type { SkillItem };
