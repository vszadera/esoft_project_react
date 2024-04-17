import {} from "react";

import { Image } from '/src/components/Image/Image';
import { Label } from '/src/components/Label/Label';
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
					<Image
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

