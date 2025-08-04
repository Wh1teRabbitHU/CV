import React from 'react';

import MainSection from '../../../components/frame/main-section';
import ResumePage from '../../../components/frame/page';
import SideSection from '../../../components/frame/side-section';
import Company from '../../../components/main/company';
import Project from '../../../components/main/project';
import ProjectPeriod from '../../../components/main/project-period';

const FourthPage = () => {
	return (
		<ResumePage>
			<SideSection>{''}</SideSection>
			<MainSection>
				<Project>
					<Company name={'Side projects'} />

					<ProjectPeriod
						title={'Crypto Bots'}
						period={'07.2022 - 02.2014'}
						technologies={[
							'Node.js',
							'Typescript',
							'React',
							'AWS (EC2, RDS, Lambda, Cognito)',
							'Postgresql'
						]}
						segment={'start'}
					>
						This is a crypto trading bot application made for Binance and Kraken, which is capable of handle
						multiple bots and configurations and trade 0-24 between BTC and multiple fiat currencies.
						Currently it's in closed beta.
					</ProjectPeriod>
					<ProjectPeriod
						title={'Electronic Engineering projects'}
						period={'01.2018 - Present'}
						technologies={['C', 'C++', 'Kicad', 'Fusion360', 'FreeCAD']}
						segment={'middle'}
					>
						Making barebone drivers in C and C++, designing and assemblying PCB boards, creating measurement
						and analytical tools on Raspberry, Arduino, ESP and STM MCU platforms. Designing 3D models and
						3D printing them.
					</ProjectPeriod>
					<ProjectPeriod
						title={'Translator'}
						period={'01.2014 - 12.2014'}
						technologies={['C#', 'Winforms']}
						segment={'end'}
					>
						This was a freelancer project, where I had to create a translation desktop application. It can
						help subtitle creators to translate and transcript TV serieses and movies.
					</ProjectPeriod>
				</Project>
			</MainSection>
		</ResumePage>
	);
};

export default FourthPage;
