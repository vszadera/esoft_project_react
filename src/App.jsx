import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/react.svg'
import './App.css'

const Img = ({
	src,
	className,
	alt
}) => {
	return(
		<img src={src} className={className} alt={alt} />
	);
};

const Label = ({
	text,
	className = "label-default"
}) => {
	return(
		<span className={className}>{text}</span>
	);
};

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Img
				src="src/images/user_foto.jpg" 
				className = "round"
				alt="Упс! Фото пропало."
			/>
			<Label
				text="Задера"
				className="label-title"
			/>
			<Label
				text="Валерий Сергеевич"
				className="label-default"
			/>

		</>
	)
}

export default App
