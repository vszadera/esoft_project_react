import { useEffect } from "react";

import { Label } from '/src/components/Label';
import './ItemBox.css';

// Компоненты. Элемент бокса навыков.
export const ItemBox = ({
	itembox
}) => {

	useEffect(() => {
		console.log('Mount Item ', itembox.skill_name);
	}, [itembox]);

	return(
		<>
			<Label
				value = { itembox.skill_name }
				className = "itembox_title" 
			/>
			<Label
				value = { itembox.description && itembox.description }
				className = "itembox_description" 
			/>
		</>
	);
};