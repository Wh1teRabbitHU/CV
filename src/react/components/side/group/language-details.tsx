import React from 'react';

import './language-details.scss';

interface LanguageDetailsProps {
	language: string;
	level: number;
}

const LanguageDetails = ({ language, level }: LanguageDetailsProps) => {
	return (
		<div className='language-details'>
			<div className='language'>{language}</div>
			<div className='level'>
				<span className={`icon fa-${level > 0 ? 'solid' : 'regular'} fa-circle`}></span>
				<span className={`icon fa-${level > 1 ? 'solid' : 'regular'} fa-circle`}></span>
				<span className={`icon fa-${level > 2 ? 'solid' : 'regular'} fa-circle`}></span>
				<span className={`icon fa-${level > 3 ? 'solid' : 'regular'} fa-circle`}></span>
				<span className={`icon fa-${level > 4 ? 'solid' : 'regular'} fa-circle`}></span>
			</div>
		</div>
	);
};

export default LanguageDetails;
