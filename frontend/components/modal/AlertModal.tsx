import React from "react";
import { ModalContainer } from "./Modal";
import Map from "../ui/google-maps/Map";
import { Button, CancelButton } from "../ui/Button";
import { Input, RangeInput } from "../ui/Input";

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	onConfirm?: () => void;
};

export const AddAlert = ({ isOpen, onClose }: ModalProps) => {
	if (!isOpen) return null;
	return (
		<ModalContainer width="w-1/3" header="Add New Hive" onClose={onClose}>
			{/* MAP */}
			<div className="w-full h-80">
				<Map />
			</div>

			<div className="flex flex-col gap-3">
				<h2 className="Poppins-SemiBold text-[#817b70]">
					Alert Information
				</h2>

				<RangeInput label="Danger Radius" min={1} max={25} unit="km" />

				<Input label="Scheduled Date & Time" type="date" />

				<div className="flex items-center gap-3 w-full">
					<CancelButton onClick={onClose} />
					<Button buttonType="button" label="Publish Alert" />
				</div>
			</div>
		</ModalContainer>
	);
};
