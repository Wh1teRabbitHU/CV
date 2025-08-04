import React from 'react';

import ContactInfo from '../../../../components/side/group/contact-info';
import { TextContactItem } from '../../../../data/contact';

interface ContactTextProps {
	item: TextContactItem;
}

const ContactText = ({ item }: ContactTextProps) => (
	<ContactInfo key={item.title} icon={item.icon} title={item.title} webOnly={item.webOnly}>
		{item.value}
	</ContactInfo>
);

export default ContactText;
