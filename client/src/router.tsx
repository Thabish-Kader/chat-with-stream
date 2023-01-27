import { Outlet, createBrowserRouter } from "react-router-dom";
import AuthLayout from "./pages/layout/AuthLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./context/AuthContext";
import { RootLayout } from "./pages/layout/RootLayout";
import Home from "./pages/Home";
import NewChannel from "./pages/channel/new";

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
								element: <NewChannel />,
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
