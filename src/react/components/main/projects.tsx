import React from 'react';

import { ProjectItem } from '../../data/project';
import { formatMonth } from '../../utils/date';
import Company from './company';
import Project from './project';
import ProjectPeriod from './project-period';

interface ProjectsProps {
	companies: ProjectItem[];
}

const Projects = ({ companies }: ProjectsProps) => {
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
		<Project>
			{companies.map(company =>
				company.projects.map((project, index) => (
					<>
						{index === 0 ? <Company name={company.company} /> : null}

						<ProjectPeriod
							title={project.name}
							period={getPeriod(project.start, project.end)}
							technologies={project.technologies}
							segment={getSegment(index, company.projects.length)}
						>
							{project.descriptionParts.map((part, partIndex) => (
								<>
									{part}
									{partIndex < project.descriptionParts.length - 1 ? <br /> : null}
								</>
							))}
						</ProjectPeriod>
					</>
				))
			)}
		</Project>
	);
};

export default Projects;
