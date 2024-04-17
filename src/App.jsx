import './App.css';

import { UserBox } from '/src/components/UserBox/UserBox';
import { SkillsBox } from '/src/components/SkillsBox/SkillsBox';


// Массив данных с навыками пользователя. Тут мы их типа получили из БД
const my_skills = [
	{ id: 0, skill_name: "Навык 1", description: "Тут описание для навыка 1" },
	{ id: 1, skill_name: "Навык 2", description: "Тут описание для навыка 2" },
	{ id: 2, skill_name: "Навык 3", description: "Тут описание для навыка 3" },
	{ id: 3, skill_name: "Навык 4", description: "Тут описание для навыка 4" }
];

// Массив данных с требуемыми к изучению технологиями. Тут мы их типа получили из БД
const my_new_skills = [
	{ id: 0, skill_name: "Технология 1", description: "Тут описание требований к процессу изучения технологии 1" },
	{ id: 1, skill_name: "Технология 2", description: "Тут описание требований к процессу изучения технологии 2" },
	{ id: 2, skill_name: "Технология 3", description: "Тут описание требований к процессу изучения технологии 3" },
	{ id: 3, skill_name: "Технология 4", description: "Тут описание требований к процессу изучения технологии 4" },
	{ id: 4, skill_name: "Технология 5", description: "Тут описание требований к процессу изучения технологии 5" },
	{ id: 5, skill_name: "Технология 6", description: "Тут описание требований к процессу изучения технологии 6" },
	{ id: 6, skill_name: "Технология 7", description: "Тут описание требований к процессу изучения технологии 7" },
	{ id: 7, skill_name: "Технология 8", description: "Тут описание требований к процессу изучения технологии 8" },
	{ id: 8, skill_name: "Технология 9", description: "Тут описание требований к процессу изучения технологии 9" },
	{ id: 9, skill_name: "Технология 10", description: "Тут описание требований к процессу изучения технологии 10" }
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
				is_inputbox = { true }
				title = "Перечень навыков:"
				arraySkills = { my_skills }
			/>
			<SkillsBox
				title = "Требуется изучить:"
				arraySkills = { my_new_skills }
			/>
		</>
	)
}

export default App
