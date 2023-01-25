import React, { useRef } from "react";
import { Input } from "../components/Input";

const SignUp = () => {
	const nameRef = useRef<HTMLInputElement>(null);
	return (
		<div>
			<h1 className="text-2xl font-bold text-center">Signup</h1>
			<div className="grid grid-cols-[auto,1fr] gap-y-2 gap-x-3">
				<label htmlFor="">Username</label>
				<Input ref={nameRef} />

				<label htmlFor="">Name</label>
				<Input type="text" />
				<label htmlFor="">Image Url</label>
				<Input type="text" />
			</div>
		</div>
	);
};

export default SignUp;
