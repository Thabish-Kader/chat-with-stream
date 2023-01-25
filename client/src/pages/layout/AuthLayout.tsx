import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
	return (
		<>
			<div>
				<h1>hello</h1>
			</div>
			<Outlet />
		</>
	);
};

export default AuthLayout;
