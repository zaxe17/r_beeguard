"use client";

import { Icon } from "@iconify/react";
import { Button, CancelButton } from "../ui/Button";

interface ModalProps {
	isOpen?: boolean;
	onClose: () => void;
	onConfirm?: () => void;
	title: string;
	content?: string;
	sub_content?: string;
	labelButton?: string;
}

interface ModalContainerProps {
	children: React.ReactNode;
	width?: string;
	height?: string;
	header?: string;
	onClose: () => void;
}

export const Modal = ({
	isOpen,
	onClose,
	onConfirm,
	title,
	content,
	sub_content,
	labelButton,
}: ModalProps) => {
	if (!isOpen) return null;

	return (
		<div className="fixed w-full h-full bg-black/50 z-50 flex justify-center items-center">
			{/* CONTAINER */}
			<div className="w-1/4 bg-[#fefefd] rounded-3xl border-2 border-[#a6a3a3] border-solid p-5">
				{/* CONTENTS */}
				<div className="flex flex-col items-center text-center gap-5">
					{/* TITLE */}
					<h2 className="Poppins-Bold text-[#ffce1c] text-2xl">
						{title}
					</h2>

					{/* CONTENT */}
					{content && (
						<p className="text-[#817b70] text-sm">{content}</p>
					)}

					{/* SUB-CONTENT */}
					{sub_content && (
						<p className="text-base font-black">{sub_content}</p>
					)}

					{/* BUTTONS */}
					<div className="flex items-center gap-3 w-full">
						<CancelButton onClick={onClose} />
						<Button
							buttonType="button"
							label={labelButton}
							onClick={onConfirm}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export const ModalContainer = ({
	children,
	width,
	height,
	header,
	onClose,
}: ModalContainerProps) => {
	return (
		<div className="fixed w-full h-full bg-black/50 z-50 flex justify-center items-center capitalize p-5">
			{/* CONTAINER */}
			<div
				className={`${width} ${height} bg-[#fefefd] rounded-3xl border-2 border-[#a6a3a3] border-solid p-5 flex flex-col`}>
				<div className="w-full flex-1 flex flex-col gap-5 min-h-0">
					{/* HEADER */}
					<div className="relative w-full text-center flex items-center justify-center shrink-0">
						<div
							onClick={onClose}
							className="absolute -right-3.5 -top-3.5 w-7 h-7 cursor-pointer">
							<Icon
								icon="iconamoon:close-circle-2-duotone"
								className="w-full h-full text-[#4A2F00]"
							/>
						</div>
						<h1 className="Poppins-Bold relative text-2xl text-[#4A2F00]">
							{header}
						</h1>
					</div>

					{children}
				</div>
			</div>
		</div>
	);
};
