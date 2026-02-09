import { Congratulations } from "./components/modals/Congratulations";
import { Win } from "./components/modals/Win";
import BeMyVal from "./layouts/BeMyVal";
import Preloader from "./layouts/Preloader";
import Rejected from "./layouts/Rejected";
import SpinWheel from "./layouts/SpinWheel";

export default function Home() {
	return (
		<div className="w-full min-h-full bg-[#d23369]">
			{/* <Preloader /> */}
			{/* <BeMyVal /> */}
			{/* <Congratulations /> */}
			{/* <Rejected /> */}
			{/* <SpinWheel /> */}
			<Win />
		</div>
	);
}
