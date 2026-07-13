import Image, { StaticImageData } from "next/image";
import React from "react";

interface ContainerProps {
	children?: React.ReactNode;
	width?: string;
	height?: string;
	borderNone?: boolean;
	scroll?: boolean;
}

type BeeFarmProps = {
	image: string | StaticImageData;
	farmName?: string;
	location?: string;
	miles?: number;
};

// FORM CONTAINER
export const FormContainer = ({ children, width }: ContainerProps) => {
	return (
		<form
			action=""
			className={`${width} lg:p-4.75 bg-[#fbf9ee]/60 rounded-3xl backdrop-blur-xs flex flex-col min-h-0`}
			style={{
				boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
			}}>
			<div className="p-4.75 flex-1 overflow-y-auto overflow-x-hidden min-h-0">
				{children}
			</div>
		</form>
	);
};

// FOR BOXES CONTAINER
export const Container = ({
	children,
	width,
	height,
	borderNone,
	scroll,
}: ContainerProps) => {
	return (
		<div
			className={`p-1.5 flex flex-col min-h-0 ${borderNone ? "" : "rounded-2xl"} ${scroll ? "scroll-container" : ""}`}
			style={{
				boxShadow: `rgba(0, 0, 0, 0.35) ${borderNone ? "2px" : "0px"} 5px 15px`,
				width: width,
				height: height,
			}}>
			<div
				className={`p-1.5 flex-1 flex flex-col gap-5 overflow-y-auto overflow-x-hidden min-h-0 ${scroll ? "scroll" : ""}`}>
				{children}
			</div>
		</div>
	);
};
