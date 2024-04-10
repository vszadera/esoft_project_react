import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/react.svg'
import './App.css'

const Container = ({
	className = "block"
}) => {
	return (
		<div className={className}>
			<div className="scroll"></div>
		</div>
	);
};


function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Container 
				className = "user_info block"
			/>
			<Container 
				className = "user_skills block"
			/>
			<Container 
				className = "user_technology block"
			/>
		</>
	)
}

export default App
