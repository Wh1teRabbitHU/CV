import React from 'react';

import MainSection from '../../../components/frame/main-section';
import ResumePage from '../../../components/frame/page';
import SideSection from '../../../components/frame/side-section';
import Company from '../../../components/main/company';
import Project from '../../../components/main/project';
import ProjectPeriod from '../../../components/main/project-period';

const SecondPage = () => {
	return (
		<ResumePage>
			<SideSection>{''}</SideSection>
			<MainSection>
				<Project>
					<Company name={'Relai AG'} />

					<ProjectPeriod
						title={'Relai app'}
						period={'04.2023 - present'}
						technologies={[
							'React-Native',
							'Golang',
							'Typescript',
							'GraphQL',
							'RabbitMQ',
							'PostgreSQL',
							'MongoDB'
						]}
						segment={'single'}
					>
						Easy bitcoin purchase with just a few clicks directly on your phone! The app allows you to buy,
						sell, create savings plans and use it as your BTC wallet.
						<br />
						As a tech lead, I manage the everyday work of the tech team, gather and assemble the feature
						requests, facilitate workshops, refine topics and do hiring to fill our open positions.
					</ProjectPeriod>

					<Company name={'Idealo GmbH'} />

					<ProjectPeriod
						title={'Unique Content (UNICON)'}
						period={'12.2021 - 04.2023'}
						technologies={[
							'Spring',
							'Java',
							'React.js',
							'Webpack',
							'AWS',
							'Kafka',
							'PostgreSQL',
							'MongoDB'
						]}
						segment={'start'}
					>
						This application enables our content writers to create rich text contents on our main pages. To
						achieve this, we had to create a custom CMS, which can handle formatted texts, images and other
						media elements.
					</ProjectPeriod>
					<ProjectPeriod
						title={'Affiliate API'}
						period={'12.2019 - 12.2021'}
						technologies={[
							'Spring',
							'Java',
							'React.js',
							'Webpack',
							'AWS (S3, Glue, Athena)',
							'Terraform',
							'Pyspark'
						]}
						segment={'middle'}
					>
						It’s an analytical tool, which collects affiliate transaction data from idealo’s partners and
						then store them in AWS and calculate missing income predictions from these datasets.
					</ProjectPeriod>
					<ProjectPeriod
						title={'A/B Testing'}
						period={'10.2019 - 12.2019'}
						technologies={['Sitespect', 'Java', 'Spring', 'Javascript']}
						segment={'end'}
					>
						Testing new features on both the german and international sites, developing either in sitespect
						or directly in the subpage’s codebase.
					</ProjectPeriod>

					<Company name={'Visoft Kft.'} />

					<ProjectPeriod
						title={'Doorkeeper'}
						period={'01.2019 - 08.2019'}
						technologies={['Pi4J', 'Spring framework', 'Vue.js', 'IoT']}
						segment={'start'}
					>
						It’s an RFID reader and door opener unit using custom made PCB mounted onto a raspberry pi, with
						a web-based admin control panel.
					</ProjectPeriod>
				</Project>
			</MainSection>
		</ResumePage>
	);
};

export default SecondPage;
