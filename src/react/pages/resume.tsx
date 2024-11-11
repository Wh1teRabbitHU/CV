import React from 'react';

import MainSection from '../components/frame/main-section';
import ResumePage from '../components/frame/page';
import SideSection from '../components/frame/side-section';
import Company from '../components/main/company';
import Experience from '../components/main/experience';
import ExperiencePeriod from '../components/main/experience-period';
import Introduction from '../components/main/introduction';
import Project from '../components/main/project';
import ProjectPeriod from '../components/main/project-period';
import SkillGroup from '../components/main/skill-group';
import Skills from '../components/main/skills';
import ContactInfo from '../components/side/group/contact-info';
import EducationDetails from '../components/side/group/education-details';
import LanguageDetails from '../components/side/group/language-details';
import NameHeader from '../components/side/name-header';
import Photo from '../components/side/photo';
import SideGroup from '../components/side/side-group';

const Resume = () => {
	return (
		<div className='resume'>
			<ResumePage>
				<SideSection>
					<Photo src='assets/me.jpg' />
					<NameHeader name='Tamás Ruszka' title='Senior Full-Stack Developer' />

					<SideGroup title='Contacts'>
						<ContactInfo icon='location-dot' title='Address'>
							Budapest, Hungary
						</ContactInfo>
						<ContactInfo icon='phone' title='Phone'>
							+49 176 4272 4520
						</ContactInfo>
						<ContactInfo icon='at' title='Email'>
							ruszka.tamas@gmail.com
						</ContactInfo>
						<ContactInfo icon='github' iconType='brands' webOnly={true}>
							<a href='https://github.com/Wh1teRabbitHU' target='_blank' rel='noreferrer'>
								My Github Page
							</a>
						</ContactInfo>
						<ContactInfo icon='linkedin' iconType='brands' webOnly={true}>
							<a
								href='https://www.linkedin.com/in/tam%C3%A1s-ruszka-0a4720ba/'
								target='_blank'
								rel='noreferrer'
							>
								Link to my Profile
							</a>
						</ContactInfo>
					</SideGroup>
					<SideGroup title='Languages'>
						<LanguageDetails language='Hungarian' level={5} />
						<LanguageDetails language='English' level={4} />
						<LanguageDetails language='German' level={2} />
					</SideGroup>
					<SideGroup title='Education'>
						<EducationDetails
							timeframe='2007-2013'
							institution='Kecskemét College, Faculty of Mechanical Engineering and Automation'
							degree='Information Technology Engineer, Bachelor Degree'
						/>
					</SideGroup>
				</SideSection>
				<MainSection>
					<Introduction title='About me'>
						<p>
							I first <b>started developing in 2005</b> as a hobby using PHP and javascript, this passion
							of mine turned quickly into a full time profession touching many aspects of hardware and
							software, including web, desktop, mobile, backend and barebone/MCU development and a bit of
							devops here and there.
						</p>

						<p>
							My <b>professional background</b> is also diverse, started working as freelancer during
							college, contributing to the open source community and working in different sized companies
							in many different countries.
						</p>

						<p>
							I have many years of <b>leadership experience</b>, both technical and managerial, leading
							many high profile projects and teams of various sizes. I love <b>mentoring people</b> and
							sharing my knowledge with them, as preparing and facilitating workshops. I also participated
							in numerous vetting and <b>hiring processes</b>, finding the best fits of talents for our
							teams.
						</p>
					</Introduction>

					<Skills title='Skills'>
						<SkillGroup
							category='Programming Languages'
							list={['Java', 'Javascript', 'Typescript', 'C#', 'C', 'Python', 'Golang', 'PHP', 'Ruby']}
						/>
						<SkillGroup
							category='Technologies'
							list={[
								'AWS (EC2, S3, Glue, Athena, etc...)',
								'Maven & Gradle',
								'Spark',
								'Terraform',
								'Kafka',
								'Docker'
							]}
						/>
						<SkillGroup
							category='Databases'
							list={['Postgresql', 'Oracle DB', 'MongoDB', 'SQLite', 'MySQL']}
						/>
						<SkillGroup
							category='Frameworks & Others'
							list={[
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
							]}
						/>
					</Skills>

					<Experience length={'12y'}>
						<ExperiencePeriod
							company={'Relai AG'}
							title={'Senior Full Stack Developer'}
							period={'11.2024 - present'}
							segment={'start'}
						/>
						<ExperiencePeriod
							company={''}
							title={'Head of Tech'}
							period={'01.2024 - 11.2024 (0.9y)'}
							segment={'middle'}
						/>
						<ExperiencePeriod
							company={''}
							title={'Tech Lead'}
							period={'05.2023 - 01.2024 (0.8y)'}
							segment={'end'}
						/>

						<ExperiencePeriod
							company={'idealo GmbH'}
							title={'Lead Developer'}
							period={'01.2018 - 08.2019 (1.5y)'}
							segment={'start'}
						/>
						<ExperiencePeriod
							company={''}
							title={'Senior Full Stack Developer'}
							period={'09.2013 - 01.2018 (4.5y)'}
							segment={'end'}
						/>

						<ExperiencePeriod
							company={'Visoft Kft'}
							title={'Lead Developer'}
							period={'01.2018 - 08.2019 (1.5y)'}
							segment={'start'}
						/>
						<ExperiencePeriod
							company={''}
							title={'Full Stack Developer'}
							period={'09.2013 - 01.2018 (4.5y)'}
							segment={'end'}
						/>
					</Experience>
				</MainSection>
			</ResumePage>
			<ResumePage>
				<SideSection>{''}</SideSection>
				<MainSection>
					<Project>
						<Company name={'Relai AG'} />

						<ProjectPeriod
							title={'Relai app'}
							period={'04.2023 - present'}
							technologies={[
								'React-Native',
								'Golang',
								'Typescript',
								'GraphQL',
								'RabbitMQ',
								'PostgreSQL',
								'MongoDB'
							]}
							segment={'single'}
						>
							Easy bitcoin purchase with just a few clicks directly on your phone! The app allows you to
							buy, sell, create savings plans and use it as your BTC wallet.
							<br />
							As a tech lead, I manage the everyday work of the tech team, gather and assemble the feature
							requests, facilitate workshops, refine topics and do hiring to fill our open positions.
						</ProjectPeriod>

						<Company name={'Idealo GmbH'} />

						<ProjectPeriod
							title={'Unique Content (UNICON)'}
							period={'12.2021 - 04.2023'}
							technologies={[
								'Spring',
								'Java',
								'React.js',
								'Webpack',
								'AWS',
								'Kafka',
								'PostgreSQL',
								'MongoDB'
							]}
							segment={'start'}
						>
							This application enables our content writers to create rich text contents on our main pages.
							To achieve this, we had to create a custom CMS, which can handle formatted texts, images and
							other media elements.
						</ProjectPeriod>
						<ProjectPeriod
							title={'Affiliate API'}
							period={'12.2019 - 12.2021'}
							technologies={[
								'Spring',
								'Java',
								'React.js',
								'Webpack',
								'AWS (S3, Glue, Athena)',
								'Terraform',
								'Pyspark'
							]}
							segment={'middle'}
						>
							It’s an analytical tool, which collects affiliate transaction data from idealo’s partners
							and then store them in AWS and calculate missing income predictions from these datasets.
						</ProjectPeriod>
						<ProjectPeriod
							title={'A/B Testing'}
							period={'10.2019 - 12.2019'}
							technologies={['Sitespect', 'Java', 'Spring', 'Javascript']}
							segment={'end'}
						>
							Testing new features on both the german and international sites, developing either in
							sitespect or directly in the subpage’s codebase.
						</ProjectPeriod>

						<Company name={'Visoft Kft.'} />

						<ProjectPeriod
							title={'Doorkeeper'}
							period={'01.2019 - 08.2019'}
							technologies={['Pi4J', 'Spring framework', 'Vue.js', 'IoT']}
							segment={'start'}
						>
							It’s an RFID reader and door opener unit using custom made PCB mounted onto a raspberry pi,
							with a web-based admin control panel.
						</ProjectPeriod>
					</Project>
				</MainSection>
			</ResumePage>
			<ResumePage>
				<SideSection>{''}</SideSection>
				<MainSection>
					<Project>
						<ProjectPeriod
							title={'Szofi'}
							period={'01.2016 - 08.2019'}
							technologies={[
								'Spring framework',
								'JPA',
								'Oracle DB',
								'Handlebars.js',
								'Apache POI',
								'Gradle',
								'Gulp',
								'Liquibase'
							]}
							segment={'middle'}
						>
							This is a web-based, national-wide power usage and performance planner application connected
							with other mission critical systems through various interfaces.
						</ProjectPeriod>
						<ProjectPeriod
							title={'Ikrt'}
							period={'02.2017 - 07.2017'}
							technologies={['Java EE', 'Custom template and workflow engine', 'Groovy', 'XML']}
							segment={'middle'}
						>
							This is an digital aid claim handler application for disadvantaged and disabled people.
						</ProjectPeriod>
						<ProjectPeriod
							title={'HatER'}
							period={'03.2015 - 12.2015'}
							technologies={['Spring framework', 'Thymeleaf', 'JPA', 'Postgresql']}
							segment={'middle'}
						>
							This is a web-based legislation editor and manager system with version control features for
							the hungarian Ministry of Justice.
						</ProjectPeriod>
						<ProjectPeriod
							title={'Emir'}
							period={'12.2014 - 04.2015'}
							technologies={['Spring framework', 'JSP', 'Less']}
							segment={'middle'}
						>
							This is a web-based electrosmog measurement system and internal integration module.
						</ProjectPeriod>
						<ProjectPeriod
							title={'DokTár'}
							period={'06.2014 - 01.2015'}
							technologies={['C#', 'WinForms', 'Spring framework', 'Modeshape', 'JPA', 'Postgresql']}
							segment={'middle'}
						>
							This is a file handler (mostly documents), organizer and version control system (desktop
							application and server).
						</ProjectPeriod>
						<ProjectPeriod
							title={'Itbsys'}
							period={'03.2014 - 06.2014'}
							technologies={['Spring framework', 'JPA', 'Postgresql', 'Thymeleaf']}
							segment={'middle'}
						>
							This is a web-based service and application catalogue and news feed processor.
						</ProjectPeriod>
						<ProjectPeriod
							title={'Document handler'}
							period={'12.2013 - 04.2014'}
							technologies={['Spring framework', 'Velocity', 'Coffeescript', 'Jpa', 'Postgresql']}
							segment={'end'}
						>
							This is a document handler web application with LDAP and QR code capability.
						</ProjectPeriod>
					</Project>
				</MainSection>
			</ResumePage>
			<ResumePage>
				<SideSection>{''}</SideSection>
				<MainSection>
					<Project>
						<Company name={'Side projects'} />

						<ProjectPeriod
							title={'Crypto Bots'}
							period={'07.2022 - 02.2014'}
							technologies={[
								'Node.js',
								'Typescript',
								'React',
								'AWS (EC2, RDS, Lambda, Cognito)',
								'Postgresql'
							]}
							segment={'start'}
						>
							This is a crypto trading bot application made for Binance and Kraken, which is capable of
							handle multiple bots and configurations and trade 0-24 between BTC and multiple fiat
							currencies. Currently it's in closed beta.
						</ProjectPeriod>
						<ProjectPeriod
							title={'Electronic Engineering projects'}
							period={'01.2018 - Present'}
							technologies={['C', 'C++', 'Kicad', 'Fusion360', 'FreeCAD']}
							segment={'middle'}
						>
							Making barebone drivers in C and C++, designing and assemblying PCB boards, creating
							measurement and analytical tools on Raspberry, Arduino, ESP and STM MCU platforms. Designing
							3D models and 3D printing them.
						</ProjectPeriod>
						<ProjectPeriod
							title={'Translator'}
							period={'01.2014 - 12.2014'}
							technologies={['C#', 'Winforms']}
							segment={'end'}
						>
							This was a freelancer project, where I had to create a translation desktop application. It
							can help subtitle creators to translate and transcript TV serieses and movies.
						</ProjectPeriod>
					</Project>
				</MainSection>
			</ResumePage>
		</div>
	);
};

export default Resume;
