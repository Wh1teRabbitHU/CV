import React from 'react';

import FirstPage from './sections/01';
import SecondPage from './sections/02';
import ThirdPage from './sections/03';
import FourthPage from './sections/04';

const Resume = () => {
	return (
		<div className='resume'>
			<FirstPage />
			<SecondPage />
			<ThirdPage />
			<FourthPage />
		</div>
	);
};

export default Resume;
