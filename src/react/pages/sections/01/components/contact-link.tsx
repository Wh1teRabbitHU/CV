import React from 'react';

import ContactInfo from '../../../../components/side/group/contact-info';
import { LinkContactItem } from '../../../../data/contact';

interface ContactLinkProps {
	item: LinkContactItem;
}

const ContactLink = ({ item }: ContactLinkProps) => (
	<ContactInfo key={item.url} icon={item.icon} iconType={item.iconType} webOnly={item.webOnly}>
		<a href={item.url} target='_blank' rel='noreferrer'>
			{item.value}
		</a>
	</ContactInfo>
);

export default ContactLink;
