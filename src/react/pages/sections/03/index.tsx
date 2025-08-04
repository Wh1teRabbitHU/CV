import React from 'react';

import MainSection from '../../../components/frame/main-section';
import ResumePage from '../../../components/frame/page';
import SideSection from '../../../components/frame/side-section';
import Project from '../../../components/main/project';
import ProjectPeriod from '../../../components/main/project-period';

const ThirdPage = () => {
	return (
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
						This is a web-based legislation editor and manager system with version control features for the
						hungarian Ministry of Justice.
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
	);
};

export default ThirdPage;
