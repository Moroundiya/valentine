import Image from "next/image";
import localFont from "next/font/local";
import angry from "../assets/images/heartbreak.webp";
import { useDispatch } from "react-redux";
import { setValModal } from "../redux/activePageSlice";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

const fredoka = localFont({
	src: "../assets/fonts/FredokaOne-Regular.ttf",
	display: "swap",
});

export default function Rejected() {
	const dispatch = useDispatch();
	useGSAP(() => {
		const split = new SplitText("#text", { type: "words" });

		gsap.from(split.words, {
			opacity: 0,
			duration: 1,
			stagger: 0.2,
			delay: 0.2,
			ease: "power3.out",
		});

		gsap.from("#zoomOut", {
			scale: 0,
			opacity: 0,
			duration: 1,
			ease: "power2.out",
			delay: 1.5,
		});

		gsap.from("#slideUp > *", {
			y: 50,
			opacity: 0,
			duration: 1,
			ease: "power2.out",
			stagger: 0.3,
			delay: 2.5,
		});


		return () => {
			split.revert();
		};
	});
	return (
		<div className="w-full lg:max-w-lg mx-auto min-h-dvh bg-[#d23369] text-black flex flex-col justify-center items-center space-y-3">
			<p
				className={`text-[1.7rem] text-[#d23369] ${fredoka.className}`}
				style={{
					WebkitTextStroke: "1px #FAD6E1",
				}}
				id="text">
				How dare you say NO!
			</p>
			<Image
				src={angry}
				alt="Image"
				id="zoomOut"
				className="w-90"
			/>

			<div className="w-full flex flex-col justify-center items-center" id="slideUp">
			<p className="text-sm text-white">or just say YES!</p>

			<div className="w-9/12 mx-auto flex flex-col mt-8 space-y-5 justify-center items-center lg:w-8/12">
				<button
					onClick={() => dispatch(setValModal(true))}
					className="text-[#d23369] hd-button font-semibold bg-white w-full cursor-pointer rounded-xl shadow-md p-3.5 text-xl">
					Yes
				</button>
			</div>
			</div>
		</div>
	);
}
