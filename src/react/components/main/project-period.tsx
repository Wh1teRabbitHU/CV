import React from 'react';

import { ReactChildrenType } from '../../types/common/react-children';
import If from '../common/if';

import './project.scss';

interface ProjectPeriodProps {
	title: string;
	period: string;
	technologies: string[];
	segment: 'start' | 'end' | 'middle' | 'single';
	children: ReactChildrenType;
}

const ProjectPeriod = ({ title, period, technologies, segment, children }: ProjectPeriodProps) => {
	return (
		<div className='period'>
			<div className='timeline'>
				<If condition={segment === 'single'}>
					<span className='end'></span>
					<span className='line'></span>
					<span className='start'></span>
				</If>

				<If condition={segment === 'start'}>
					<span className='end'></span>
					<span className='line'></span>
				</If>

				<If condition={segment === 'middle'}>
					<span className='end small'></span>
					<span className='line'></span>
				</If>

				<If condition={segment === 'end'}>
					<span className='end small'></span>
					<span className='line'></span>
					<span className='start'></span>
				</If>
			</div>
			<div className='event'>
				<h3 className='title'>{title}</h3>
				<h3 className='subtitle'>{period}</h3>
				<div className='details'>{children}</div>
				<div className='technologies'>{technologies.join(', ')}</div>
			</div>
		</div>
	);
};

export default ProjectPeriod;
