import React from 'react';

import MainSection from '../../../components/frame/main-section';
import ResumePage from '../../../components/frame/page';
import SideSection from '../../../components/frame/side-section';
import Basics from './components/basics';
import Contacts from './components/contacts';
import Educations from './components/educations';
import Experiences from './components/experiences';
import Introductions from './components/introductions';
import Languages from './components/languages';
import Skills from './components/skills';

const FirstPage = () => {
	return (
		<ResumePage>
			<SideSection>
				<Basics />
				<Contacts />
				<Languages />
				<Educations />
			</SideSection>
			<MainSection>
				<Introductions />
				<Skills />
				<Experiences />
			</MainSection>
		</ResumePage>
	);
};

export default FirstPage;
