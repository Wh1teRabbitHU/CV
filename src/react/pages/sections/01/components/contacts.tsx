import React from 'react';

import SideGroup from '../../../../components/side/side-group';
import ContactData from '../../../../data/contact';
import ContactLink from './contact-link';
import ContactText from './contact-text';

const Contacts = () => (
	<SideGroup title='Contacts'>
		{ContactData.map(item => {
			if (item.type === 'text') {
				return <ContactText key={item.title} item={item} />;
			} else if (item.type === 'link') {
				return <ContactLink key={item.url} item={item} />;
			}
		})}
	</SideGroup>
);

export default Contacts;
