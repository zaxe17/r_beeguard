import { Icon } from "@iconify/react";
import { AlertContainer } from "@/components/ui/Alert";

const AlertDetails = () => {
	return (
		<div className="h-screen w-full flex gap-15 py-15 px-20">
			{/* LEFT */}
			<div className="w-1/2 capitalize flex flex-col gap-8">
				{/* ALERT DETAILS */}
				<AlertContainer title="Alert Details">
					<div className="w-full h-full flex items-center gap-4">
						<div className="w-15 h-15">
							<Icon
								icon="line-md:alert-twotone"
								className="w-full h-full block"
								style={{
									color: "red",
								}}
							/>
						</div>

						{/* ALERT DETAILS */}
						<div className="w-full flex flex-col text-[#817b70] text-xs capitalize">
							<div className="flex justify-between items-center text-base">
								<h3
									className="Poppins-SemiBold text-sm text-black"
									style={{}}>
									Pestiside Spraying Alert
								</h3>

								{/* ALERT STATUS */}
								<span
									className="Poppins-SemiBold w-18 text-[10px] text-center py-1 px-3 rounded-md"
									style={{
										color: "red",
										backgroundColor: "#00000433",
									}}>
									high
								</span>
							</div>

							{/* LOCATION */}
							<span className="Poppins-SemiBold">
								Atok, Benguet
							</span>
							{/* DATE & TIME */}
							<span className="Poppins-SemiBold mb-7">
								May 16, 2026 • 8:00 AM
							</span>
							{/*  */}
							<p className="w-1/2">
								Pesticide spraying activity detected in your
								area.
							</p>
						</div>
					</div>
				</AlertContainer>

				<AlertContainer title="Alert Information">
					<div className="w-full flex flex-col gap-3 text-sm">
						<div className="flex justify-between items-center">
							<span className="">Pesticide Type</span>
							<span className="Poppins-SemiBold">
								Cypermethrin
							</span>
						</div>
						<div className="flex justify-between items-center">
							<span className="">Application Method</span>
							<span className="Poppins-SemiBold">
								Aeral Spray
							</span>
						</div>
						<div className="flex justify-between items-center">
							<span className="">Scheduled Date</span>
							<span className="Poppins-SemiBold">
								May 16, 2024 • 8:00 AM{" "}
							</span>
						</div>
						<div className="flex justify-between items-center">
							<span className="">Danger Radius</span>
							<span className="Poppins-SemiBold">5 km</span>
						</div>
						<div className="flex justify-between items-center">
							<span className="">Issued By</span>
							<span className="Poppins-SemiBold">Atok LGU</span>
						</div>
						<div className="flex justify-between items-center">
							<span className="">Contact</span>
							<span className="Poppins-SemiBold">
								(074) 123-4567
							</span>
						</div>
					</div>
				</AlertContainer>
			</div>

			{/* RIGHT */}
			<div className="w-1/2 ">
				<h1>yadgas</h1>
				{/* MAPS */}
				<div className=""></div>
			</div>
		</div>
	);
};

export default AlertDetails;
