import React from 'react';

import { ReactChildrenType } from '../../types/common/react-children';

import './introduction.scss';

interface IntroductionProps {
	title: string;
	children: ReactChildrenType;
}

const Introduction = ({ title, children }: IntroductionProps) => {
	return (
		<div className='introduction'>
			<h2 className='title'>{title}</h2>

			<div className='details'>{children}</div>
		</div>
	);
};

export default Introduction;
