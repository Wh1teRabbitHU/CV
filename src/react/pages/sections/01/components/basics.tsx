import React from 'react';

import NameHeader from '../../../../components/side/name-header';
import Photo from '../../../../components/side/photo';
import BasicData from '../../../../data/basic';

const Basics = () => {
	return (
		<>
			<Photo src={BasicData.photoUrl} />
			<NameHeader name={BasicData.name} title={BasicData.currentTitle} />
		</>
	);
};

export default Basics;
