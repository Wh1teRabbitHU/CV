import React from 'react';

import MainSection from '../../../components/frame/main-section';
import ResumePage from '../../../components/frame/page';
import SideSection from '../../../components/frame/side-section';
import Projects from '../../../components/main/projects';
import ProjectData from '../../../data/project';

const FourthPage = () => {
	return (
		<ResumePage>
			<SideSection>{''}</SideSection>
			<MainSection>
				<Projects companies={ProjectData.filter(company => company.page === 3)} />
			</MainSection>
		</ResumePage>
	);
};

export default FourthPage;
