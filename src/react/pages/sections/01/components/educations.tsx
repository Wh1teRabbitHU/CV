import React from 'react';

import EducationDetails from '../../../../components/side/group/education-details';
import SideGroup from '../../../../components/side/side-group';
import EducationData from '../../../../data/education';

const Educations = () => (
	<SideGroup title='Education'>
		{EducationData.map(item => (
			<EducationDetails
				key={`${item.institution}-${item.timeframe}`}
				timeframe={item.timeframe}
				institution={item.institution}
				degree={item.degree}
			/>
		))}
	</SideGroup>
);

export default Educations;
