// Компоненты. Текст (не изменяемый)
import React from "react";

export const Label = ({
	value,
	className
}) => {
	return(
		<span className = { className }>{ value }</span>
	);
};