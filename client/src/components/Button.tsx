import React, { DetailedHTMLProps, forwardRef } from "react";

export const Button = forwardRef<
	HTMLButtonElement,
	DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	>
>(({ className, children, ...rest }, ref) => {
	return (
		<button
			className={`border-2 border-gray-900 bg-blue-600 rounded p-2 w-full text-white hover:bg-blue-500 focus:bg-blue-400 transition-colors  disabled:bg-gray-500 ${className}`}
			{...rest}
		>
			{children}
		</button>
	);
});
