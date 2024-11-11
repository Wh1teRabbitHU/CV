import React from 'react';

import { ReactChildrenType } from '../../types/common/react-children';

import './skills.scss';

interface SkillsProps {
	title: string;
	children: ReactChildrenType;
}

const Skills = ({ title, children }: SkillsProps) => {
	return (
		<div className='skills'>
			<h2 className='title'>{title}</h2>

			{children}
		</div>
	);
};

export default Skills;
