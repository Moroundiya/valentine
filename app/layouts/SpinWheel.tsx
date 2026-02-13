import gsap from "gsap";
import localFont from "next/font/local";
import SplitText from "gsap/SplitText";
import WheelSpinner from "../components/Wheel";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

const fredoka = localFont({
	src: "../assets/fonts/FredokaOne-Regular.ttf",
	display: "swap",
});

export default function SpinWheel() {
	const textRef = useRef(null);
	useGSAP(() => {
		const split = new SplitText(textRef.current, { type: "words" });
		gsap.from(split.words, {
			opacity: 0,
			duration: 1,
			stagger: 0.2,
			delay: 0.2,
			ease: "power3.out",
		});

		return () => {
			split.revert();
		};
	});
	return (
		<div className="w-full lg:max-w-lg mx-auto min-h-dvh bg-[#d23369] text-black flex flex-col justify-center items-center space-y-10 py-20">
			<p
				className={`text-[1.7rem] text-center leading-tight w-10/12 mx-auto text-[#d23369] ${fredoka.className}`}
				style={{
					WebkitTextStroke: "1px #FAD6E1",
				}}
				ref={textRef}>
				Spin the wheel and win free valentine gift !
			</p>
			<div className="w-full flex justify-center items-center overflow-hidden">
				<WheelSpinner />
			</div>
		</div>
	);
}
