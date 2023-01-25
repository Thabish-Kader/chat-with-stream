import React, { useRef } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

const SignUp = () => {
	const usernameRef = useRef<HTMLInputElement>(null);
	const nameRef = useRef<HTMLInputElement>(null);
	const imageUrlRef = useRef<HTMLInputElement>(null);
	return (
		<>
			<h1 className="text-3xl font-bold mb-8 text-center">Sign Up</h1>
			<form className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-5 items-center justify-items-end">
				<label htmlFor="userName">Username</label>
				<Input id="name" required ref={usernameRef} />
				<label htmlFor="name">Name</label>
				<Input id="name" type="url" required ref={nameRef} />
				<label htmlFor="imageUrl">Image Url</label>
				<Input id="imageUrl" type="url" required ref={imageUrlRef} />
				<Button type="submit" className="col-span-full">
					Sign up
				</Button>
			</form>
		</>
	);
};

export default SignUp;
