import BeMyVal from "./layouts/BeMyVal";
import Preloader from "./layouts/Preloader";

export default function Home() {
	return (
		<div className="w-full min-h-full bg-white">
			{/* <Preloader /> */}
			<BeMyVal />
		</div>
	);
}
