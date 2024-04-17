import { useState } from 'react';

export const Slider = ({
	min_value = 0,
	max_value = 100,
	step_value = 1,
	this_value
}) => {
	const [value, setValue] = useState(this_value);

	const handleSliderChange = (event) => {
		const newValue = event.target.value;
		setValue(Number(newValue));
	};

	return (
		<div>
			<input
				type = 'range'
				min = { min_value }
				max = { max_value }
				step = { 5 }
				value = { value }
				onChange = { handleSliderChange }
			/>
			<p>{ value }</p>
		</div>
  );
}

