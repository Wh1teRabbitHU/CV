type ProjectItem = {
	page: number;
	company: string;
	projects: {
		name: string;
		start: Date;
		end: Date | undefined;
		technologies: string[];
		descriptionParts: string[];
	}[];
};

const ProjectData: ProjectItem[] = [
	{
		page: 1,
		company: 'Relai AG',
		projects: [
			{
				name: 'Relai app',
				start: new Date('2023-04-01'),
				end: undefined,
				technologies: ['React-Native', 'Golang', 'Typescript', 'GraphQL', 'RabbitMQ', 'PostgreSQL', 'MongoDB'],
				descriptionParts: [
					'Easy bitcoin purchase with just a few clicks directly on your phone! The app allows you to buy, sell, create savings plans and use it as your BTC wallet.',
					'As a tech lead, I manage the everyday work of the tech team, gather and assemble the feature requests, facilitate workshops, refine topics and do hiring to fill our open positions.'
				]
			}
		]
	},
	{
		page: 1,
		company: 'Idealo GmbH',
		projects: [
			{
				name: 'Unique Content (UNICON)',
				start: new Date('2021-12-01'),
				end: new Date('2023-04-01'),
				technologies: ['Spring', 'Java', 'React.js', 'Webpack', 'AWS', 'Kafka', 'PostgreSQL', 'MongoDB'],
				descriptionParts: [
					'This application enables our content writers to create rich text contents on our main pages. To achieve this, we had to create a custom CMS, which can handle formatted texts, images and other media elements.'
				]
			},
			{
				name: 'Affiliate API',
				start: new Date('2019-12-01'),
				end: new Date('2021-12-01'),
				technologies: [
					'Spring',
					'Java',
					'React.js',
					'Webpack',
					'AWS (S3, Glue, Athena)',
					'Terraform',
					'Pyspark'
				],
				descriptionParts: [
					'It’s an analytical tool, which collects affiliate transaction data from idealo’s partners and then store them in AWS and calculate missing income predictions from these datasets.'
				]
			},
			{
				name: 'A/B Testing',
				start: new Date('2019-10-01'),
				end: new Date('2019-12-01'),
				technologies: ['Sitespect', 'Java', 'Spring', 'Javascript'],
				descriptionParts: [
					'Testing new features on both the german and international sites, developing either in sitespect or directly in the subpage’s codebase.'
				]
			}
		]
	},
	{
		page: 2,
		company: 'Visoft Kft.',
		projects: [
			{
				name: 'Doorkeeper',
				start: new Date('2019-01-01'),
				end: new Date('2019-08-01'),
				technologies: ['Pi4J', 'Spring framework', 'Vue.js', 'IoT'],
				descriptionParts: [
					'It’s an RFID reader and door opener unit using custom made PCB mounted onto a raspberry pi, with a web-based admin control panel.'
				]
			},
			{
				name: 'Szofi',
				start: new Date('2016-01-01'),
				end: new Date('2019-08-01'),
				technologies: [
					'Spring framework',
					'JPA',
					'Oracle DB',
					'Handlebars.js',
					'Apache POI',
					'Gradle',
					'Gulp',
					'Liquibase'
				],
				descriptionParts: [
					'This is a web-based, national-wide power usage and performance planner application connected with other mission critical systems through various interfaces.'
				]
			},
			{
				name: 'Ikrt',
				start: new Date('2017-02-01'),
				end: new Date('2017-07-01'),
				technologies: ['Java EE', 'Custom template and workflow engine', 'Groovy', 'XML'],
				descriptionParts: [
					'This is an digital aid claim handler application for disadvantaged and disabled people.'
				]
			},
			{
				name: 'HatER',
				start: new Date('2015-03-01'),
				end: new Date('2015-12-01'),
				technologies: ['Spring framework', 'Thymeleaf', 'JPA', 'Postgresql'],
				descriptionParts: [
					'This is a web-based legislation editor and manager system with version control features for the hungarian Ministry of Justice.'
				]
			},
			{
				name: 'Emir',
				start: new Date('2014-12-01'),
				end: new Date('2015-04-01'),
				technologies: ['Spring framework', 'JSP', 'Less'],
				descriptionParts: [
					'This is a web-based electrosmog measurement system and internal integration module.'
				]
			},
			{
				name: 'DokTár',
				start: new Date('2014-06-01'),
				end: new Date('2015-01-01'),
				technologies: ['C#', 'WinForms', 'Spring framework', 'Modeshape', 'JPA', 'Postgresql'],
				descriptionParts: [
					'This is a file handler (mostly documents), organizer and version control system (desktop application and server).'
				]
			},
			{
				name: 'Itbsys',
				start: new Date('2014-03-01'),
				end: new Date('2014-06-01'),
				technologies: ['Spring framework', 'JPA', 'Postgresql', 'Thymeleaf'],
				descriptionParts: ['This is a web-based service and application catalogue and news feed processor.']
			},
			{
				name: 'Document handler',
				start: new Date('2013-12-01'),
				end: new Date('2014-04-01'),
				technologies: ['Spring framework', 'Velocity', 'Coffeescript', 'Jpa', 'Postgresql'],
				descriptionParts: ['This is a document handler web application with LDAP and QR code capability.']
			}
		]
	},
	{
		page: 3,
		company: 'Side Projects',
		projects: [
			{
				name: 'Crypto Bots',
				start: new Date('2022-07-01'),
				end: new Date('2024-02-01'),
				technologies: ['Node.js', 'Typescript', 'React', 'AWS (EC2, RDS, Lambda, Cognito)', 'Postgresql'],
				descriptionParts: [
					"This is a crypto trading bot application made for Binance and Kraken, which is capable of handle multiple bots and configurations and trade 0-24 between BTC and multiple fiat currencies. Currently it's in closed beta."
				]
			},
			{
				name: 'EE/IoT projects',
				start: new Date('2018-01-01'),
				end: undefined,
				technologies: ['C', 'C++', 'STM32', 'ESP32', 'Arduino', 'Kicad', 'Fusion360', 'FreeCAD', 'OnShape'],
				descriptionParts: [
					'Making barebone drivers in C and C++, designing and assemblying PCB boards, creating measurement and analytical tools on Raspberry, Arduino, ESP and STM MCU platforms. Designing 3D models and 3D printing them.'
				]
			},
			{
				name: 'Translator',
				start: new Date('2014-01-01'),
				end: new Date('2014-12-01'),
				technologies: ['C#', 'Winforms'],
				descriptionParts: [
					'This was a freelancer project, where I had to create a translation desktop application. It can help subtitle creators to translate and transcript TV serieses and movies.'
				]
			}
		]
	}
];

export default ProjectData;
export type { ProjectItem };
