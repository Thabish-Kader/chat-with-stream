import { Outlet, createBrowserRouter } from "react-router-dom";
import AuthLayout from "./pages/layout/AuthLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./context/AuthContext";
import { RootLayout } from "./pages/layout/RootLayout";
import Home from "./pages/Home";

export const router = createBrowserRouter([
	{
		element: <ContextWrapper />,
		children: [
			{
				path: "/",
				element: <RootLayout />,
				children: [
					{ index: true, element: <Home /> },
					{
						path: "channel",
						children: [
							{
								path: "new",
								element: <h1>New channel</h1>,
							},
						],
					},
				],
			},
			{
				element: <AuthLayout />,
				children: [
					{ path: "login", element: <Login /> },
					{ path: "signup", element: <SignUp /> },
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
