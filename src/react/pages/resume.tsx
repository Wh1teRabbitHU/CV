import React from 'react';

import MainSection from '../components/frame/main-section';
import ResumePage from '../components/frame/page';
import SideSection from '../components/frame/side-section';
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
				<MainSection>1</MainSection>
			</ResumePage>
			<ResumePage>
				<SideSection>{''}</SideSection>
				<MainSection>2</MainSection>
			</ResumePage>
			<ResumePage>
				<SideSection>{''}</SideSection>
				<MainSection>3</MainSection>
			</ResumePage>
		</div>
	);
};

export default Resume;
