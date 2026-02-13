"use client";
import gsap from "gsap";
import Image from "next/image";
import arrow from "../assets/images/arrow.svg";
import center from "../assets/images/center.svg";
import localFont from "next/font/local";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { useDispatch } from "react-redux";
import { setGift, setSpinModal } from "../redux/activePageSlice";

const fredoka = localFont({
	src: "../assets/fonts/FredokaOne-Regular.ttf",
	display: "swap",
});

export default function WheelSpinner() {
	useGSAP(() => {
		gsap.from("#slideUp", {
			y: 50,
			opacity: 0,
			duration: 1,
			ease: "power2.out",
			stagger: 0.3,
			delay: 3,
		});

		gsap.from("#slideIn", {
			x: 50,
			opacity: 0,
			duration: 1,
			ease: "power2.out",
			delay: 2.3,
		});
	});

	const dispatch = useDispatch();
	const items = [
		"Chocolate",
		"Free Kiss",
		"Ice Cream",
		"Flowers",
		"Ring Box",
		"Free Hug",
		"Cup Cake",
	];

	const colors = [
		"#ff7675",
		"#74b9ff",
		"#55efc4",
		"#ffeaa7",
		"#a29bfe",
		"#fd79a8",
		"#fab1a0",
	];

	const sliceAngle = 360 / items.length;

	const [rotation, setRotation] = useState<number>(0);
	const [isSpinning, setIsSpinning] = useState<boolean>(false);

	const wheelBackground = `conic-gradient(${items
		.map((_, i) => {
			const start = i * sliceAngle;
			const end = start + sliceAngle;
			return `${colors[i]} ${start}deg ${end}deg`;
		})
		.join(", ")})`;

	const spinWheel = () => {
		if (isSpinning) return;

		setIsSpinning(true);

		const winningIndex = Math.floor(Math.random() * items.length);

		const spins = 6;
		const targetAngle = 360 - (winningIndex * sliceAngle + sliceAngle / 2);

		setRotation((prev) => prev + spins * 360 + targetAngle);

		setTimeout(() => {
			dispatch(setGift(items[winningIndex]));
			dispatch(setSpinModal(true));
			setIsSpinning(false);
		}, 4000);
	};

	return (
		<div
			className="flex flex-col items-center gap-6 p-6 sm:p-10 overflow-hidden relative w-full px-5"
			id="slideIn">
			<div className="absolute z-20 top-2 lg:top-9 left-1/2 -translate-x-1/2">
				<Image
					src={arrow}
					alt="Image"
				/>
			</div>
			<div
				className="relative aspect-square w-80 shadow-md lg:w-96 rounded-full border-10 border-[#A02956] pointer-events-none
        transition-transform duration-4000 ease-[cubic-bezier(0.17,0.67,0.12,0.99)] before:content-[''] before:w-full before:h-full before:bg-transparent before:border-6 before:border-[#EA4986] before:absolute before:top-0 before:left-0 before:rounded-full"
				style={{
					transform: `rotate(${rotation}deg)`,
					background: wheelBackground,
				}}>
				<div className="absolute top-1/2 left-1/2 z-30 -translate-1/2">
					<Image
						src={center}
						alt="Image"
					/>
				</div>
				{items.map((item, index) => {
					const angle = index * sliceAngle;
					return (
						<div
							key={item}
							className="absolute inset-0 flex justify-center"
							style={{ transform: `rotate(${angle}deg)` }}>
							<div
								className={`${fredoka.className} absolute top-[20%] left-1/2 -translate-x-1/2 ms-9 lg:ms-13 w-full text-center -rotate-[90deg] text-sm md:text-base text-white`}
								style={{ transform: `rotate(${sliceAngle / 2}deg)` }}>
								{item}
							</div>
						</div>
					);
				})}
			</div>

			<div className="w-5/12 mx-auto mt-6 flex flex-col space-y-5 justify-center relative z-20 items-center">
				<button
					onClick={spinWheel}
					disabled={isSpinning}
					id="slideUp"
					className="text-[#d23369] hd-button disabled:opacity-50 font-semibold bg-white w-full cursor-pointer rounded-xl shadow-md p-2.5 text-lg">
					{isSpinning ? "Spinning..." : "Spin"}
				</button>
			</div>
		</div>
	);
}
