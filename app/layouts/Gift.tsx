import CenterGradient from "../components/CenterGradient";
import Image from "next/image";
import localFont from "next/font/local";
import { Icon } from "@iconify/react";
import Confetti from "../components/Confetti";
import { setActivePage } from "../redux/activePageSlice";
import { useDispatch, useSelector } from "react-redux";
import openGift from "../assets/images/open-gift.webp";

import chocolate from "../assets/images/chocolate.webp";
import ringbox from "../assets/images/Ring-box.webp";
import kiss from "../assets/images/Lips.webp";
import icecream from "../assets/images/Ice-cream.webp";
import hug from "../assets/images/Cat-Hugging.webp";
import cupcake from "../assets/images/Cupcake.webp";
import flower from "../assets/images/flower.webp";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(SplitText, ScrollTrigger);

const fredoka = localFont({
	src: "../assets/fonts/FredokaOne-Regular.ttf",
	display: "swap",
});

export default function Gift() {
	const [showConfetti, setShowConfetti] = useState<boolean>(false);
	const [showMessage, setShowMessage] = useState<boolean>(false);
	const boxRef = useRef<HTMLDivElement | null>(null);
	const giftRef = useRef<HTMLDivElement | null>(null);
	const dispatch = useDispatch();

	useGSAP(() => {
		const tl = gsap.timeline();
		tl.to(boxRef.current, {
			rotation: 5,
			duration: 0.1,
			yoyo: true,
			repeat: 19,
			ease: "power1.inOut",
		});

		tl.fromTo(
			giftRef.current,
			{ scale: 0, opacity: 0, y: 400, zIndex: -10, position: "absolute" },
			{
				scale: 1.8,
				opacity: 1,
				y: 0,
				duration: 0.8,
				zIndex: 1,
				ease: "back.out(1.7)",
				onComplete: () => {
					setShowConfetti(true);
					setShowMessage(true);
				},
			},
		);
		tl.to(
			boxRef.current,
			{
				opacity: 0,
				scale: 0.7,
				duration: 0.6,
				ease: "power2.inOut",
			},
			"-=0.6",
		);
	});

	const gift = useSelector((state: string) => state.activePage.gift);

	const giftImages: Record<string, string> = {
		Chocolate: chocolate,
		"Free Kiss": kiss,
		"Ice Cream": icecream,
		Flowers: flower,
		"Ring Box": ringbox,
		"Free Hug": hug,
		"Cup Cake": cupcake,
	};
	const giftImg = giftImages[gift] ?? null;

	useLayoutEffect(() => {
		if (!showMessage) return;

		const splitThanks = new SplitText("#thanks", { type: "words" });
		const splitMessage = new SplitText("#message", { type: "words" });

		gsap.from(splitThanks.words, {
			opacity: 0,
			duration: 1,
			stagger: 0.18,
			delay: 1,
			ease: "power3.out",
		});

		gsap.from(splitMessage.words, {
			opacity: 0,
			duration: 1,
			stagger: 0.18,
			delay: 3,
			ease: "power3.out",
		});

		gsap.from("#replay", {
			x: 50,
			opacity: 0,
			duration: 1,
			ease: "power3.out",
			scrollTrigger: {
				trigger: "#replay",
				start: "top 90%",
				toggleActions: "play reverse play reverse",
			},
		});

		return () => {
			splitThanks.revert();
			splitMessage.revert();
		};
	}, [showMessage]);

	return (
		<div className="w-full lg:max-w-lg mx-auto min-h-dvh bg-[#d23369] text-black flex flex-col justify-center items-center space-y-5 py-20 overflow-x-hidden">
			<div className="w-full flex justify-center items-center relative">
				<div className="absolute flex justify-center items-center w-full">
					<CenterGradient />
				</div>
				<div
					ref={boxRef}
					className="relative z-20">
					<Image
						src={openGift}
						alt="Image"
						className="w-90 rotate-20"
						priority
					/>
				</div>
				<div
					ref={giftRef}
					className="absolute opacity-0">
					<Image
						src={giftImg}
						alt="Image"
						className="w-50 rotate-20"
						priority
					/>
				</div>
			</div>

			{showMessage && (
				<>
					<div
						className={`${fredoka.className} w-full flex flex-col justify-center items-center text-center px-3`}>
						<p
							className=" text-2xl text-[#d23369]"
							style={{
								WebkitTextStroke: "1px #FAD6E1",
							}}
							id="thanks">
							Thank you for choosing me !
						</p>
					</div>
					<div
						className="w-11/12 mx-auto text-white text-[13px] flex flex-col justify-center items-center space-y-3"
						id="message">
						<p>
							In a world full of choices, being chosen is something meaningful.
						</p>
						<p>
							This little app might just be for fun, but the feeling behind it
							is real. Being chosen is special, it represents appreciation,
							affection, connection, and the simple things that matter most.
						</p>
						<p>
							Thank you for clicking and choosing. May this moment bring a smile
							and remind you how special it is to share love.
						</p>
						<p>Happy Valentine’s Day ❤️</p>
					</div>
					<div className="w-full flex justify-end items-center px-5">
						<button
							onClick={() => dispatch(setActivePage("be-my-val"))}
							className="w-fit mt-5 flex justify-center items-center space-x-1 bg-white rounded-full text-sm text-[#d23369] hd-button py-2 px-5 cursor-pointer"
							id="replay">
							<Icon
								icon="ic:twotone-replay"
								className="text-xl"
							/>
							<span>Replay</span>
						</button>
					</div>
				</>
			)}

			{showConfetti && <Confetti />}
		</div>
	);
}
