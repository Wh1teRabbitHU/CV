import React from 'react';

import Skill from '../../../../components/main/skill';
import SkillGroup from '../../../../components/main/skill-group';
import SkillData from '../../../../data/skill';

const Skills = () => (
	<Skill title='Skills'>
		{SkillData.map(item => (
			<SkillGroup key={item.category} category={item.category} list={item.list} />
		))}
	</Skill>
);

export default Skills;
