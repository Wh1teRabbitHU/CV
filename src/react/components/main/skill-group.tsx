import React from 'react';

import './skills.scss';

interface SkillGroupProps {
	category: string;
	list: string[];
}

const SkillGroup = ({ category, list }: SkillGroupProps) => {
	return (
		<div className='group'>
			<div className='category'>{category}</div>
			<div className='skill-list'>{list.join(', ')}</div>
		</div>
	);
};

export default SkillGroup;
