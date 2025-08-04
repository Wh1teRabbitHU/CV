import React from 'react';

import LanguageDetails from '../../../../components/side/group/language-details';
import SideGroup from '../../../../components/side/side-group';
import LanguageData from '../../../../data/language';

const Languages = () => {
	return (
		<SideGroup title='Languages'>
			{LanguageData.map(item => (
				<LanguageDetails key={item.name} language={item.name} level={item.level} />
			))}
		</SideGroup>
	);
};

export default Languages;
