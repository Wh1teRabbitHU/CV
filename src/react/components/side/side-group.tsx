import React from 'react';

import { ReactChildrenType } from '../../types/common/react-children';

import './side-group.scss';

interface SideGroupProps {
	title: string;
	children: ReactChildrenType;
}

const SideGroup = ({ title, children }: SideGroupProps) => {
	return (
		<div className='side-group'>
			<h3>{title}</h3>

			{children}
		</div>
	);
};

export default SideGroup;
