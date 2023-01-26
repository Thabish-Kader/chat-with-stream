import { Outlet, createBrowserRouter } from "react-router-dom";
import AuthLayout from "./pages/layout/AuthLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./context/AuthContext";

export const router = createBrowserRouter([
	{
		element: <ContextWrapper />,
		children: [
			{
				element: <AuthLayout />,
				children: [
					{
						path: "login",
						element: <Login />,
					},
					{
						path: "signup",
						element: <SignUp />,
					},
				],
			},
		],
	},
]);

function ContextWrapper() {
	return (
		<AuthProvider>
			<Outlet />
		</AuthProvider>
	);
}
