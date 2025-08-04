import React from 'react';

import Experience from '../../../../components/main/experience';
import ExperiencePeriod from '../../../../components/main/experience-period';
import ExperienceData from '../../../../data/experience';
import { formatMonth, getYearsOfExperience } from '../../../../utils/date';

const Experiences = () => {
	const getFullYoe = () => {
		const positions = ExperienceData.flatMap(experience => experience.positions);
		const startDate = new Date(Math.min(...positions.map(position => position.periodStart.getTime())));
		const endDate = new Date(Math.max(...positions.map(position => (position.periodEnd || new Date()).getTime())));

		return getYearsOfExperience(startDate, endDate);
	};

	const getPeriod = (start: Date, end?: Date) => {
		let period = '';
		period += formatMonth(start);
		period += ' - ';

		if (typeof end == 'undefined') {
			period += 'present';
		} else {
			period += formatMonth(end);
		}

		return period;
	};

	const getSegment = (index: number, total: number) => {
		if (total <= 1) {
			return 'single';
		} else if (index === 0) {
			return 'start';
		} else if (index === total - 1) {
			return 'end';
		} else {
			return 'middle';
		}
	};

	return (
		<Experience length={getFullYoe()}>
			{ExperienceData.map(experience =>
				experience.positions.map((position, index) => (
					<ExperiencePeriod
						key={`${experience.company}-${position.title}-${index}`}
						company={index === 0 ? experience.company : ''}
						title={position.title}
						period={getPeriod(position.periodStart, position.periodEnd)}
						segment={getSegment(index, experience.positions.length)}
					/>
				))
			)}
		</Experience>
	);
};

export default Experiences;
