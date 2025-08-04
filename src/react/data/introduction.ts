type IntroductionItem = {
	title: string;
	paragraphs: string[];
};

const IntroductionData: IntroductionItem = {
	title: 'About me',
	paragraphs: [
		'I first started developing in 2005 as a hobby using PHP and javascript, this passion of mine turned quickly into a full time profession touching many aspects of hardware and software, including web, desktop, mobile, backend and barebone/MCU development and a bit of devops here and there.',
		'I have many years of leadership experience, both technical and managerial, leading many high profile projects and teams of various sizes. I love mentoring people and sharing my knowledge with them, as preparing and facilitating workshops. I also participated in numerous vetting and hiring processes, finding the best fits of talents for our teams.'
	]
};

export default IntroductionData;
export type { IntroductionItem };
