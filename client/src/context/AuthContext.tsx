import { createContext, useContext } from "react";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

type AuthContext = {
	signup: UseMutationResult<AxiosResponse<any, any>, unknown, void, unknown>;
};
const Context = createContext<AuthContext | null>(null);

export const useAuth = () => {
	useContext(Context);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const signup = useMutation({
		mutationFn: () =>
			axios.post(`/${import.meta.env.VITE_SERVER_URL}/signup`),
	});
	return <Context.Provider value={{ signup }}>{children}</Context.Provider>;
};
