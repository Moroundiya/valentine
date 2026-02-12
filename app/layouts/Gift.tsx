import CenterGradient from "../components/CenterGradient";
import flower from "../assets/images/flower.svg";
import Image from "next/image";
import localFont from "next/font/local";
import { Icon } from "@iconify/react";
import Confetti from "../components/Confetti";
import { setActivePage } from "../redux/activePageSlice";
import { useDispatch, useSelector } from "react-redux";
import openGift from "../assets/images/open-gift.webp";

import chocolate from "../assets/images/chocolate.svg";
import ringbox from "../assets/images/Ring-box.svg";
import kiss from "../assets/images/Lips.svg";
import icecream from "../assets/images/Ice-cream.svg";
import hug from "../assets/images/Cat-Hugging.svg";
import cupcake from "../assets/images/Cupcake.svg";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const fredoka = localFont({
	src: "../assets/fonts/FredokaOne-Regular.ttf",
	display: "swap",
});

export default function Gift() {
	const boxRef = useRef<HTMLDivElement | null>(null);
	const giftRef = useRef<HTMLDivElement | null>(null);
	const dispatch = useDispatch();

	useEffect(() => {
		const tl = gsap.timeline();

		// 1️⃣ Shake for 2 seconds
		tl.to(boxRef.current, {
			rotation: 5,
			duration: 0.1,
			yoyo: true,
			repeat: 19, // 0.1 * 20 = 2 seconds
			ease: "power1.inOut",
		});

		// 2️⃣ Gift zoom up
		tl.fromTo(
			giftRef.current,
			{ scale: 0, opacity: 0, y: 400, zIndex: -10, position: "absolute" },
			{
				scale: 1.8,
				opacity: 1,
				y: -50,
				duration: 0.8,
				zIndex: 1,
				ease: "back.out(1.7)",
			},
		);

		// 3️⃣ Box disappears
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
	}, []);

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

	return (
		<div className="w-full lg:max-w-lg mx-auto min-h-dvh bg-[#d23369] text-black flex flex-col justify-center items-center space-y-5 py-20 overflow-x-hidden">
			<div className="w-full flex justify-center items-center relative">
				<div className="absolute flex justify-center items-center w-full">
					<CenterGradient />
				</div>

				{/* BOX IMAGE */}
				<div
					ref={boxRef}
					className="relative z-20">
					<Image
						src={giftImg}
						alt="Image"
						className="w-90 rotate-20"
						priority
					/>
				</div>

				{/* GIFT (emoji or image) */}
				<div
					ref={giftRef}
					className="absolute text-7xl opacity-0">
					🎁
				</div>
			</div>

			<div
				className={`${fredoka.className} w-full flex flex-col justify-center items-center text-center px-3 mt-3`}>
				<p
					className=" text-2xl text-[#d23369]"
					style={{
						WebkitTextStroke: "1px #FAD6E1",
					}}>
					Thank you for choosing me !
				</p>
			</div>
			<div className="w-11/12 mx-auto text-white text-[13px] flex flex-col justify-center itjems-center space-y-3">
				<p>In a world full of choices, being chosen is something meaningful.</p>
				<p>
					This little app might just be for fun, but the feeling behind it is
					real. Being chosen is special, it represents appreciation, affection,
					connection, and the simple things that matter most.
				</p>
				<p>
					Thank you for clicking and choosing. May this moment bring a smile and
					remind you how special it is to share love.
				</p>
				<p>Happy Valentine’s Day ❤️</p>
			</div>
			<div className="w-full flex justify-end items-center px-5">
				<button
					onClick={() => dispatch(setActivePage("be-my-val"))}
					className="w-fit mt-5 flex justify-center items-center space-x-1 bg-white rounded-full text-sm text-[#d23369] hd-button py-2 px-5 cursor-pointer">
					<Icon
						icon="ic:twotone-replay"
						className="text-xl"
					/>
					<span>Replay</span>
				</button>
			</div>
			<Confetti />
		</div>
	);
}
