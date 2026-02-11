
import CenterGradient from "../components/CenterGradient";
import flower from "../assets/images/flower.svg";
import Image from "next/image";
import localFont from "next/font/local";
import { Icon } from "@iconify/react";
import Confetti from "../components/Confetti";
import { setActivePage } from "../redux/activePageSlice";
import { useDispatch, useSelector } from "react-redux";

import chocolate from "../assets/images/chocolate.svg";
import ringbox from "../assets/images/Ring-box.svg";
import kiss from "../assets/images/Lips.svg";
import icecream from "../assets/images/Ice-cream.svg";
import hug from "../assets/images/Cat-Hugging.svg";
import cupcake from "../assets/images/Cupcake.svg";

const fredoka = localFont({
	src: "../assets/fonts/FredokaOne-Regular.ttf",
	display: "swap",
});

export default function Gift() {
	const dispatch = useDispatch();

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
				<div className="absolute flex justify-center items-center w-full ">
					<CenterGradient />
				</div>
				<Image
					src={giftImg}
					alt="Image"
                    className="w-90 rotate-20 relative z-20"
                    priority
				/>
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
