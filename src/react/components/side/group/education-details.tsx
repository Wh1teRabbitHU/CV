import React from 'react';

import './education-details.scss';

interface EducationDetailsProps {
	timeframe: string;
	institution: string;
	degree: string;
}

const EducationDetails = ({ timeframe, institution, degree }: EducationDetailsProps) => {
	return (
		<div className='education-details'>
			<div className='timeframe'>{timeframe}</div>
			<div className='detail'>
				<div className='institution'>{institution}</div>
				<div className='degree'>{degree}</div>
			</div>
		</div>
	);
};

export default EducationDetails;
