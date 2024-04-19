import React from "react";

import { Img } from '/src/components/Img';
import { Label } from '/src/components/Label';
import './SkillsBox.css';

// Компоненты. Бокс со списком навыков.
export const SkillsBox = ({
	title,	
	arraySkills
}) => {

	return(
		<>
			<div className = "skillbox box">
				<div className="title"> 
					<Label
						value = { title }
					/>
				</div>

				{ arraySkills.map(skills_item => (
					<div key={ skills_item.id }>
						<Label
							value = { skills_item.skill_name }
							className = "skills_title" 
						/>
						<Label
							value = { skills_item.description }
							className = "skills_description" 
						/>
					</div>
				)) }
			</div>
		</>
	);
};