import React from 'react';

import { ReactChildrenType } from '../../types/common/react-children';

import './experience.scss';

interface ExperienceProps {
	length: string;
	children: ReactChildrenType;
}

const Experience = ({ length, children }: ExperienceProps) => {
	return (
		<div className='experience'>
			<h2 className='title'>
				<span>Experience</span>
				<span className='experience-length'>({length})</span>
			</h2>

			{children}
		</div>
	);
};

export default Experience;
