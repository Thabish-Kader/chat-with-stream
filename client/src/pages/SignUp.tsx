import React, { useRef } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {
	const { signup } = useAuth();
	const usernameRef = useRef<HTMLInputElement>(null);
	const nameRef = useRef<HTMLInputElement>(null);
	const imageUrlRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (signup.isLoading) return;
		const username = usernameRef.current?.value;
		const name = nameRef.current?.value;
		const imageUrl = imageUrlRef.current?.value;
		if (
			username == null ||
			username === "" ||
			name == null ||
			name === ""
		) {
			return;
		}
		signup.mutate({ id: username, name, image: imageUrl });
	};

	return (
		<>
			<h1 className="text-3xl font-bold mb-8 text-center">Sign Up</h1>
			<form
				onSubmit={handleSubmit}
				className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-5 items-center justify-items-end"
			>
				<label htmlFor="userName">Username</label>
				<Input id="name" required ref={usernameRef} />
				<label htmlFor="name">Name</label>
				<Input id="name" ref={nameRef} />
				<label htmlFor="imageUrl">Image Url</label>
				<Input id="imageUrl" type="url" ref={imageUrlRef} />
				<Button type="submit" className="col-span-full">
					Sign up
				</Button>
			</form>
		</>
	);
};

export default SignUp;
