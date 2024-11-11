import React from 'react';

import './photo.scss';

interface PhotoProps {
	src: string;
}

const Photo = ({ src }: PhotoProps) => {
	return (
		<div className='photo'>
			<img src={src} />
		</div>
	);
};

export default Photo;
