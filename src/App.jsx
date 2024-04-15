import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/react.svg';
import './App.css';

import { UserBox } from '/src/components/UserBox';
import { SkillsBox } from '/src/components/SkillsBox';


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







// Компоненты. Карточка (единичный компонент бокса)
const BoxItems = ({

}) => {
	return(
		<>
		</>
	);
};


// Массив данных с навыками пользователя. Тут мы их типа получили из БД
const my_skills = [
	{ id: 0, skill_name: "Навык 1", description: "Тут описание для навыка 1" },
	{ id: 1, skill_name: "Навык 2", description: "Тут описание для навыка 2" },
	{ id: 2, skill_name: "Навык 3", description: "Тут описание для навыка 3" },
	{ id: 3, skill_name: "Навык 4", description: "Тут описание для навыка 4" }
];


function App() {
	return (
		<>
			<UserBox 
				userfoto = {{
					"src":"/src/images/user_foto.jpg", 
					"className": "userfoto",
					"alt": "Упс! Фото пропало."
				}}
				username = {{
					"name": "Задера Валерий",
					"className": "username"
				}}	
			/>
			<SkillsBox
				arraySkills = { my_skills }
			/>
		</>
	)
}

export default App
