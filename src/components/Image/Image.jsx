// Компоненты. Изображение

export const Image = ({
	src,
	className,
	alt
}) => {
	return(
		<img src = { src } className = { className } alt = { alt } />
	);
};
