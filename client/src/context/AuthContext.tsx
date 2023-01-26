import { createContext, useContext, useState } from "react";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

type AuthContext = {
	signup: UseMutationResult<AxiosResponse, unknown, User>;
	login: UseMutationResult<{ token: string; user: User }, unknown, User>;
};
const Context = createContext<AuthContext | null>(null);
type User = {
	id: string;
	name: string;
	image?: string;
};
export const useAuth = () => {
	return useContext(Context) as AuthContext;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User>();
	const navigate = useNavigate();
	const signup = useMutation({
		mutationFn: (user: User) => {
			return axios.post(
				`${import.meta.env.VITE_SERVER_URL}/signup`,
				user
			);
		},
		onSuccess() {
			navigate("/login");
		},
	});

	const login = useMutation({
		mutationFn: async (id: string) => {
			const res = await axios.post(
				`${import.meta.env.VITE_SERVER_URL}/login`,
				id
			);
			return res.data;
		},
	});
	return (
		<Context.Provider value={{ signup, login }}>
			{children}
		</Context.Provider>
	);
};
