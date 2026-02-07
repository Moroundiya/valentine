import { Congratulations } from "./components/modals/Congratulations";
import BeMyVal from "./layouts/BeMyVal";
import Preloader from "./layouts/Preloader";

export default function Home() {
	return (
		<div className="w-full min-h-full bg-[#d23369]">
			{/* <Preloader /> */}
			{/* <BeMyVal /> */}
			<Congratulations />
		</div>
	);
}
