import React from 'react';

import { ReactChildrenType } from '../../types/common/react-children';

import './main-section.scss';

interface MainSectionProps {
	children: ReactChildrenType;
}

const MainSection = ({ children }: MainSectionProps) => {
	return <div className='main-section'>{children}</div>;
};

export default MainSection;
