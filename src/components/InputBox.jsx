import { Label } from '/src/components/Label';
import './InputBox.css';

// Компоненты. Элемент бокса навыков.
export const InputBox = () => {
	return(
		<>
			<div>
				<Label
					value = "Наименование компетенции"
					className = "" 
				/>
				<input 
					className = "input"
					onChange = ""
				>
				</input>
				<Label
					value = "Описание компетенции"
					className = "" 
				/>
				<input 
					className = "input"
					onChange = ""
				>
				</input>
				<Label
					value = "Текущий уровень подготовки"
					className = "" 
				/>
				<button>
					Добавить
				</button>
			</div>
		</>
	);
};