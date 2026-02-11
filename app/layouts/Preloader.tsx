import Image from "next/image";
import loveLock from "@/app/assets/images/love-lock.webp";
import CenterGradient from "../components/CenterGradient";
import Spinner from "../components/Spinner";
import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Preloader() {
	useGSAP(() => {
		gsap.from("#logo", {
			scale: 1.3,
			// x: -100,
			opacity: 0,
			duration: 1,
			ease: "power1.inOut",
		});
	});

	return (
		<div className="w-full lg:max-w-lg mx-auto min-h-dvh bg-[#d23369] text-black flex flex-col justify-center items-center overflow-x-hidden space-y-26">
			<div className="w-full flex justify-center items-center relative h-75.5 lg:h-100">
				<div className="absolute flex justify-center items-center w-full top-1/2 left-1/2 -translate-1/2">
					<CenterGradient />
				</div>
				<Image
					src={loveLock}
					alt="Image"
					className="relative z-20 w-full h-full object-contain"
					id="logo"
					priority
				/>
			</div>
			<Spinner />
		</div>
	);
}
