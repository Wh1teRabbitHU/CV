type TextContactItem = {
	type: 'text';
	icon: string;
	title: string;
	value: string;
	webOnly?: boolean;
};

type LinkContactItem = {
	type: 'link';
	icon: string;
	iconType: 'brands' | 'solid';
	value: string;
	url: string;
	webOnly?: boolean;
};

type ContactItem = TextContactItem | LinkContactItem;

const ContactData: ContactItem[] = [
	{
		type: 'text',
		icon: 'location-dot',
		title: 'Address',
		value: 'Budapest, Hungary'
	},
	{
		type: 'text',
		icon: 'phone',
		title: 'Phone',
		value: '+49 176 4272 4520'
	},
	{
		type: 'text',
		icon: 'at',
		title: 'Email',
		value: 'ruszka.tamas@gmail.com'
	},
	{
		type: 'link',
		icon: 'github',
		iconType: 'brands',
		webOnly: true,
		value: 'My Github Page',
		url: 'https://github.com/Wh1teRabbitHU'
	},
	{
		type: 'link',
		icon: 'linkedin',
		iconType: 'brands',
		webOnly: true,
		value: 'Link to my Profile',
		url: 'https://www.linkedin.com/in/tam%C3%A1s-ruszka-0a4720ba/'
	}
];

export default ContactData;
export type { ContactItem, TextContactItem, LinkContactItem };
