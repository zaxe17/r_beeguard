import { Container } from "@/components/ui/Container";
import {
	HiveDetailsContainer,
	HiveTabs,
	HiveProps,
} from "@/components/ui/HiveContainer";
import { SearchBar } from "@/components/ui/Input";

import hivesData from "@/data/hive.json";
const hive = hivesData as HiveProps[];

const Hives = () => {
	return (
		<div className="w-full h-full flex items-start">
			{/* CONTAINER FOR BEEFARM LOCATION TAB */}
			<Container width="40%" height="100%" borderNone>
				<div className="w-full pt-5 px-2 flex flex-col items-center gap-4">
					<h3 className="Poppins-SemiBold text-3xl text-[#020101]">
						Hives
					</h3>

					<div className="w-2/3">
						<SearchBar placeholder="Search My Hives" />
					</div>
				</div>

				{/* SCROLLABLE HIVE CARD */}
				<div className="p-2 flex-1 flex flex-col gap-2 overflow-y-auto overflow-x-hidden min-h-0">
					{hive.map((h, i) => (
						<HiveTabs
							key={i}
							hiveId={h.hiveId}
                            hive={h.hive}
							location={h.location}
							lastCheck={h.lastCheck}
							status={h.status}
							yieldThisMonth={h.yieldThisMonth}
							hiveState={h.hiveState}
						/>
					))}
				</div>
			</Container>

			<div className="flex-1 h-full">
				<div className="flex flex-col gap-10 items-center justify-center h-full">
					<h1 className="Poppins-Bold text-5xl">Hive Details</h1>

					{/* CONTAINER */}
					<HiveDetailsContainer />
				</div>
			</div>
		</div>
	);
};

export default Hives;
