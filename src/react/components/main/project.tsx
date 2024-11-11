import React from 'react';

import { ReactChildrenType } from '../../types/common/react-children';

import './project.scss';

interface ProjectProps {
	children: ReactChildrenType;
}

const Project = ({ children }: ProjectProps) => {
	return (
		<div className='projects'>
			<h2>Projects</h2>

			{children}
		</div>
	);
};

export default Project;
