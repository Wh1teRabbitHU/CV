import React from 'react';

import If from '../common/if';

import './experience-period.scss';

interface ExperiencePeriodProps {
	company: string;
	title: string;
	period: string;
	segment: 'start' | 'end' | 'middle' | 'single';
}

const ExperiencePeriod = ({ company, title, period, segment }: ExperiencePeriodProps) => {
	return (
		<div className={`period ${segment === 'start' ? 'start' : ''}`}>
			<div className='timeline'>
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
				<If condition={segment === 'single'}>
					<span className='end'></span>
					<span className='line'></span>
					<span className='start'></span>
				</If>
			</div>
			<div className='company'>{company}</div>
			<div className='position'>
				<h3 className='title'>{title}</h3>
				<h3 className='period'>{period}</h3>
			</div>
		</div>
	);
};

export default ExperiencePeriod;
