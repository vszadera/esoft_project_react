import { Label } from '/src/components/Label/Label';
import { Slider } from '/src/components/Slider/Slider';
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
				<Slider
					min_value = { 0 }
					max_value = { 100 }
					step_value = { 1 }
					this_value = { 25 }
					/>
				<button>
					Добавить
				</button>
			</div>
		</>
	);
};