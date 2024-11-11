import React from 'react';

import './name-header.scss';

interface NameHeaderProps {
	name: string;
	title: string;
}

const NameHeader = ({ name, title }: NameHeaderProps) => {
	return (
		<div className='name'>
			<h2>{name}</h2>
			<h3>{title}</h3>
		</div>
	);
};

export default NameHeader;
