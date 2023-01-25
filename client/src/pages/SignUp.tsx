import React from "react";

const SignUp = () => {
	return (
		<div>
			<h1 className="text-2xl font-bold text-center">Signup</h1>
			<div className="grid grid-cols-[auto,1fr] gap-y-2 gap-x-3">
				<label htmlFor="">Username</label>
				<input type="text" />
				<label htmlFor="">Name</label>
				<input type="text" />
				<label htmlFor="">Image Url</label>
				<input type="text" />
			</div>
		</div>
	);
};

export default SignUp;
