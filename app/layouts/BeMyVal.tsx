import CenterGradient from "../components/CenterGradient";
import valDate from "../assets/images/val-date.webp";
import Image from "next/image";
import localFont from "next/font/local";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage, setValModal } from "../redux/activePageSlice";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(SplitText);

const fredoka = localFont({
	src: "../assets/fonts/FredokaOne-Regular.ttf",
	display: "swap",
});

export default function BeMyVal() {
	useGSAP(() => {
		gsap.from("#logo", {
			y: -50,
			opacity: 0,
			duration: 3,
			ease: "power3.out",
		});

		gsap.from("#slideUp > *", {
			y: 50,
			opacity: 0,
			duration: 1,
			ease: "power3.out",
			stagger: 0.3,
			delay: 2.8,
		});

		const splitQuestion = new SplitText("#question", { type: "words" });

		gsap.from(splitQuestion.words, {
			opacity: 0,
			duration: 1,
			stagger: 0.18,
			delay: 1,
			ease: "power3.out",
		});

		return () => {
			splitQuestion.revert();
		};
	});

	const dispatch = useDispatch();
	const activePage = useSelector(
		(state: string) => state.activePage.activePage,
	);

	return (
		<div className="w-full lg:max-w-lg mx-auto min-h-dvh bg-[#d23369] text-black flex flex-col justify-center items-center overflow-hidden py-16">
			<div className="w-full flex justify-center items-center relative h-87.5 lg:h-100">
				<div className="absolute flex justify-center items-center w-full top-1/2 left-1/2 -translate-1/2 h-full">
					<CenterGradient />
				</div>
				<Image
					src={valDate}
					alt="Image"
					className="relative z-20 w-full h-full object-contain"
					id="logo"
				/>
			</div>
			<div
				className={`${fredoka.className} w-full flex flex-col justify-center items-center text-center`}>
				<p
					className=" text-[1.5rem] text-[#d23369]"
					style={{
						WebkitTextStroke: "1px #FAD6E1",
					}}
					id="question">
					Will you be my Valentine?
				</p>

				<div
					className="w-9/12 mx-auto flex flex-col mt-8 space-y-5 justify-center items-center lg:w-8/12"
					id="slideUp">
					<button
						onClick={() => dispatch(setValModal(true))}
						className="text-[#d23369] hd-button bg-white w-full cursor-pointer rounded-xl shadow-md p-3.5 text-xl">
						Yes
					</button>
					<button
						onClick={() => {
							dispatch(setActivePage("no"));
						}}
						className="bg-[#3E000C] hd-button text-white w-full cursor-pointer rounded-xl shadow-md p-3.5 text-xl">
						No
					</button>
				</div>
			</div>
		</div>
	);
}
