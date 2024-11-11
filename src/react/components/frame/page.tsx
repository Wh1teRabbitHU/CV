import React from 'react';

import { ReactChildrenType } from '../../types/common/react-children';

import './page.scss';

interface ResumePageProps {
	children: ReactChildrenType;
}

const ResumePage = ({ children }: ResumePageProps) => {
	return (
		<div className='page'>
			<div className='page-body'>{children}</div>
		</div>
	);
};

export default ResumePage;
