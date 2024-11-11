import React from 'react';

import { ReactChildrenType } from '../../../types/common/react-children';
import If from '../../common/if';

import './contact-info.scss';

interface ContactInfoProps {
	icon: string;
	iconType?: 'solid' | 'brands';
	title?: string;
	webOnly?: boolean;
	children: ReactChildrenType;
}

const ContactInfo = ({ icon, iconType = 'solid', title, webOnly = false, children }: ContactInfoProps) => {
	const containerClass = `contact-info${webOnly ? ' web-only' : ''}`;

	return (
		<div className={containerClass}>
			<span className={`icon fa-${iconType} fa-${icon}`}></span>

			<div className='info-details'>
				<If condition={typeof title != 'undefined'}>
					<b className='title'>{title}</b>
				</If>
				<div className='detail'>{children}</div>
			</div>
		</div>
	);
};

export default ContactInfo;
