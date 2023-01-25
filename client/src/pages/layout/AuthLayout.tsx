import React from "react";
import { Outlet } from "react-router-dom";
import { InputCard } from "../../components/InputCard";

const AuthLayout = () => {
	return (
		<>
			<InputCard>
				<InputCard.body>
					<Outlet />
				</InputCard.body>
			</InputCard>
		</>
	);
};

export default AuthLayout;
