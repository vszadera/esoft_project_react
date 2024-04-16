import {} from "react";

import { Img } from '/src/components/Img';
import { Label } from '/src/components/Label';
import './UserBox.css';

// Компоненты. Пользовательский бокс.
export const UserBox =({
	userfoto,
	username
}) => {
	return(
		<>
			<div className = "userbox box">
				<div>			
					<Img
						src = { userfoto.src }
						className = { userfoto.className }
						alt = { userfoto.alt } 
					/>
				</div>	
				<div>
					<Label
						value = { username.name }
						className = { username.className } 
					/>
				</div>	
			</div>	
		</>
	);
};

