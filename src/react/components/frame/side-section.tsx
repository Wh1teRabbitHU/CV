import React from 'react';

import { ReactChildrenType } from '../../types/common/react-children';

import './side-section.scss';

interface SideSectionProps {
	children: ReactChildrenType;
}

const SideSection = ({ children }: SideSectionProps) => {
	return <div className='side-section'>{children}</div>;
};

export default SideSection;
