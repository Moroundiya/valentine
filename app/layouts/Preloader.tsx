import Image from "next/image";
import loveLock from "@/app/assets/images/love-lock.svg";
import CenterGradient from "../components/CenterGradient";
import Spinner from "../components/Spinner";

export default function Preloader() {
	return (
		<div className="w-full lg:max-w-lg mx-auto min-h-dvh bg-[#d23369] text-black flex flex-col justify-center items-center overflow-x-hidden space-y-26">
			<div className="w-full flex justify-center items-center relative">
				<div className="absolute flex justify-center items-center w-full top-1/2 left-1/2 -translate-1/2">
					<CenterGradient />
				</div>
				<Image
					src={loveLock}
					alt="Image"
					className="relative z-20"
					preload={true}
				/>
			</div>
			<Spinner />
		</div>
	);
}
