import React from 'react';

import './company.scss';

interface CompanyProps {
	name: string;
}

const Company = ({ name }: CompanyProps) => {
	return <h3 className='company'>{name}</h3>;
};

export default Company;
