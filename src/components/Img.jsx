// Компоненты. Изображение
import React from "react";

export const Img = ({
	src,
	className,
	alt
}) => {
	return(
		<img src = { src } className = { className } alt = { alt } />
	);
};
