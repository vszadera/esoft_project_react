import {} from "react";

// Компоненты. Кнопка
export const Button = ({
	value 
}) => {
	return(
		<button
			className = "button"
		>
			{ value}
		</button>
	);
};
