import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/react.svg'
import './App.css'


const req_comp = [
	{ id: 0, skill_name: "Навык 1", description: "Тут описание для навыка 1" },
	{ id: 1, skill_name: "Навык 2", description: "Тут описание для навыка 2" },
	{ id: 2, skill_name: "Навык 3", description: "Тут описание для навыка 3" },
	{ id: 3, skill_name: "Навык 4", description: "Тут описание для навыка 4" },
	{ id: 4, skill_name: "Навык 5", description: "Тут описание для навыка 5" },
	{ id: 5, skill_name: "Навык 6", description: "Тут описание для навыка 6" },
	{ id: 6, skill_name: "Навык 7", description: "Тут описание для навыка 7" },
	{ id: 7, skill_name: "Навык 8", description: "Тут описание для навыка 8" },
	{ id: 8, skill_name: "Навык 9", description: "Тут описание для навыка 9" },
	{ id: 9, skill_name: "Навык 10", description: "Тут описание для навыка 10" }
]; 

// Компоненты. Изображение
const Img = ({
	src,
	className,
	alt
}) => {
	return(
		<img src = { src } className = { className } alt = { alt } />
	);
};

// Компоненты. Текст (не изменяемый)
const Label = ({
	value,
	className = "label-default"
}) => {
	return(
		<span className = { className }>{ value }</span>
	);
};

// Компоненты. Пользовательский бокс.
const UserBox =({
	userfoto,
	username
}) => {
	return(
		<>
			<div className = "card user">
				<div>			
					<Img
						src = { userfoto.src }
						className = { userfoto.className }
						alt = { userfoto.alt } 
					/>
				</div>	
				<div>
					<Label
						value = { username.name }
						className = { username.className } 
					/>
				</div>	
			</div>	
		</>
	);
};

// Компоненты. Бокс со списком навыков.
const SkillsBox = ({
	name,
	description
}) => {

	// Массивы данных. 
	const my_skills = [
		{ id: 0, skill_name: "Навык 1", description: "Тут описание для навыка 1" },
		{ id: 1, skill_name: "Навык 2", description: "Тут описание для навыка 2" },
		{ id: 2, skill_name: "Навык 3", description: "Тут описание для навыка 3" },
		{ id: 3, skill_name: "Навык 4", description: "Тут описание для навыка 4" }
	];

	return(
		<>
			<div className = "card skills">
				<Label
					value = "Перечень навыков"
					className = "card-titile-text"
				/>
			</div>
			{my_skills.map(skills_item => (
				<div>
					<Label
						value = { skills_item.skill_name }
						className = { name.className } 
					/>
					<Label
						value = { skills_item.description }
						className = { description.className } 
					/>
				</div>
			))}
		</>
	);
};

// Компоненты. Карточка (единичный компонент бокса)
const BoxItems = ({

}) => {
	return(
		<>
		</>
	);
};

function App() {
	return (
		<>
			<UserBox 
				userfoto = {{
					"src":"src/images/user_foto.jpg", 
					"className": "round",
					"alt": "Упс! Фото пропало."
				}}
				username = {{
					"name": "Задера Валерий",
					"className": "username"
				}}	
			/>
			<SkillsBox 
				name = {{
					"value": "Навык 1",
					"className": "title_default"
				}}
				description = {{
					"value": "тут длинное описание навыка",
					"className": "body_default"
				}}
				
			/>
		</>
	)
}

export default App
