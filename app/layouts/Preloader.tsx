import Image from "next/image";
import preloaderImg from "@/app/assets/images/bg-cropped.svg";
import loveLock from "@/app/assets/images/love-lock.svg";

export default function Preloader() {
	return (
		<div className="w-full lg:max-w-lg mx-auto min-h-dvh bg-white text-black flex flex-col justify-center items-center space-y-30">
			<div className="w-full flex justify-center items-center relative">
				<div className="w-60 h-60 bg-pink-500 rounded-full blur-3xl"></div>
				<Image
					src={loveLock}
					alt="Image"
					className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 z-20"
				/>
			</div>
			<p>Preloader</p>
		</div>
	);
}
