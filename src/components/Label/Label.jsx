// Компоненты. Текст (не изменяемый)

export const Label = ({
	value,
	className
}) => {
	return(
		<span className = { className && className }>{ value }</span>
	);
};