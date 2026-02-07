import Image from "next/image";
import loveLock from "@/app/assets/images/love-lock.svg";
import CenterGradient from "../components/CenterGradient";
import Spinner from "../components/Spinner";

export default function Preloader() {
	return (
		<div className="w-full lg:max-w-lg mx-auto min-h-dvh bg-[#d23369] text-black flex flex-col justify-center items-center space-y-35">
			<div className="w-full flex justify-center items-center relative">
				<CenterGradient />
				<Image
					src={loveLock}
					alt="Image"
					className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 z-20"
				/>
			</div>
			<Spinner />
		</div>
	);
}
