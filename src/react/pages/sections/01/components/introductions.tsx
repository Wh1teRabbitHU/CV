import React from 'react';

import Introduction from '../../../../components/main/introduction';
import IntroductionData from '../../../../data/introduction';

const Introductions = () => {
	return (
		<Introduction title={IntroductionData.title}>
			{IntroductionData.paragraphs.map((paragraph, index) => (
				<p key={index}>{paragraph}</p>
			))}
		</Introduction>
	);
};
export default Introductions;
