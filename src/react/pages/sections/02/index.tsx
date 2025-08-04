import React from 'react';

import MainSection from '../../../components/frame/main-section';
import ResumePage from '../../../components/frame/page';
import SideSection from '../../../components/frame/side-section';
import Projects from '../../../components/main/projects';
import ProjectData from '../../../data/project';

const SecondPage = () => {
	return (
		<ResumePage>
			<SideSection>{''}</SideSection>
			<MainSection>
				<Projects companies={ProjectData.filter(company => company.page === 1)} />
			</MainSection>
		</ResumePage>
	);
};

export default SecondPage;
