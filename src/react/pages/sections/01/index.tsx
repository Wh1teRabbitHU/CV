import React from 'react';

import MainSection from '../../../components/frame/main-section';
import ResumePage from '../../../components/frame/page';
import SideSection from '../../../components/frame/side-section';
import Experience from '../../../components/main/experience';
import ExperiencePeriod from '../../../components/main/experience-period';
import Introduction from '../../../components/main/introduction';
import SkillGroup from '../../../components/main/skill-group';
import Skills from '../../../components/main/skills';
import EducationDetails from '../../../components/side/group/education-details';
import NameHeader from '../../../components/side/name-header';
import Photo from '../../../components/side/photo';
import SideGroup from '../../../components/side/side-group';
import Contacts from './components/contacts';
import Languages from './components/languages';

const FirstPage = () => {
	return (
		<ResumePage>
			<SideSection>
				<Photo src='assets/me.jpg' />
				<NameHeader name='Tamás Ruszka' title='Senior Full-Stack Developer' />

				<Contacts />
				<Languages />
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
						I first <b>started developing in 2005</b> as a hobby using PHP and javascript, this passion of
						mine turned quickly into a full time profession touching many aspects of hardware and software,
						including web, desktop, mobile, backend and barebone/MCU development and a bit of devops here
						and there.
					</p>

					<p>
						My <b>professional background</b> is also diverse, started working as freelancer during college,
						contributing to the open source community and working in different sized companies in many
						different countries.
					</p>

					<p>
						I have many years of <b>leadership experience</b>, both technical and managerial, leading many
						high profile projects and teams of various sizes. I love <b>mentoring people</b> and sharing my
						knowledge with them, as preparing and facilitating workshops. I also participated in numerous
						vetting and <b>hiring processes</b>, finding the best fits of talents for our teams.
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
					<SkillGroup category='Databases' list={['Postgresql', 'Oracle DB', 'MongoDB', 'SQLite', 'MySQL']} />
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
	);
};

export default FirstPage;
