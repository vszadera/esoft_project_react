import React from "react";

import { Img } from '/src/components/Img';
import { Label } from '/src/components/Label';
import './SkillsBox.css';

// Компоненты. Бокс со списком навыков.
export const SkillsBox = ({
	arraySkills,
	name,
	description
}) => {

	return(
		<>
			<div className = "skillbox box">
				<div className = "title">
					<Label
						value = "Перечень навыков"
					/>
				</div>
				{ arraySkills.map(skills_item => (
					<div>
						<Label
							value = { skills_item.skill_name }
							className = "item_skills" 
						/>
						<Label
							value = { skills_item.description }
							className = "item_description" 
						/>
					</div>
				)) }
			</div>
		</>
	);
};