import React from 'react';

import { ReactChildrenType } from '../../types/common/react-children';

import './skill.scss';

interface SkillProps {
	title: string;
	children: ReactChildrenType;
}

const Skill = ({ title, children }: SkillProps) => {
	return (
		<div className='skills'>
			<h2 className='title'>{title}</h2>

			{children}
		</div>
	);
};

export default Skill;
