import { useState } from 'react';
import { Label } from '/src/components/Label/Label';
import { ItemBox } from '/src/components/ItemBox/ItemBox';
import { InputBox } from '/src/components/InputBox/InputBox'
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './SkillsBox.css';


// Компоненты. Бокс со списком навыков.
export const SkillsBox = ({
	is_inputbox = false,
	title,	
	arraySkills
}) => {
	const [visible, setVisible] = useState(false);

	const onClick = () => {
		setVisible(visible => !visible);
	}

	return(
		<>
			<div className = "skillbox box">
				<div className="title"> 
					<Label
						value = { title }
					/>
					<IconButton 
						className="icon_button"
						onClick = { onClick } 
						title = { visible ? "Скрыть компетенции" : "Отобразить компетенции" }
					>
						{ visible ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/> }
					</IconButton>
				</div>
				{ is_inputbox && 
					<InputBox 
						this_value = { 30 }
					/> 
				}

				{ visible && arraySkills.map(skills_item => (
					<div key={ skills_item.id }>
						<ItemBox
							itembox = { skills_item }
						/>
					</div>
				)) }
			</div>
		</>
	);
};