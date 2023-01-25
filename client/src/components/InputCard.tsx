import React from "react";

export const InputCard = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
			{children}
		</div>
	);
};

InputCard.body = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="max-w-md w-full bg-white p-2 shadow-sm">{children}</div>
	);
};

InputCard.bottom = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="max-w-md w-full bg-white p-2 shadow-sm">{children}</div>
	);
};
