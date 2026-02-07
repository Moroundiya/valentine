"use client";
import localFont from "next/font/local";
import { useState } from "react";

const fredoka = localFont({
	src: "../assets/fonts/FredokaOne-Regular.ttf",
	display: "swap",
});

export default function WheelSpinner() {
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

	const [rotation, setRotation] = useState(0);
	const [isSpinning, setIsSpinning] = useState(false);
	const [result, setResult] = useState(null);

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
		setResult(null);

		const winningIndex = Math.floor(Math.random() * items.length);

		const spins = 6;
		const targetAngle = 360 - (winningIndex * sliceAngle + sliceAngle / 2);

		const finalRotation = rotation + spins * 360 + targetAngle;

		setRotation(finalRotation);

		setTimeout(() => {
			const normalized = ((finalRotation % 360) + 360) % 360;
			const index = Math.floor((360 - normalized) / sliceAngle) % items.length;
			setResult(items[index]);
			setIsSpinning(false);
		}, 4000);
	};

	return (
		<div className="flex flex-col items-center gap-6 p-6 sm:p-10 overflow-hidden relative w-full px-5">
			{/* Arrow */}
			<div className="w-0 h-0 border-l-8 border-r-8 border-b-16 absolute z-20 top-2 lg:top-9 left-1/2 -translate-x-1/2 border-transparent border-b-gray-900" />

			<div
				className="relative aspect-square w-80 shadow-md lg:w-96 rounded-full border-10 border-[#A02956]
        transition-transform duration-[4000ms] ease-[cubic-bezier(0.17,0.67,0.12,0.99)] before:content-[''] before:w-full before:h-full before:bg-transparent before:border-6 before:border-[#EA4986] before:absolute before:top-0 before:left-0 before:rounded-full"
				style={{
					transform: `rotate(${rotation}deg)`,
					background: wheelBackground,
				}}>
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

			<div className="w-9/12 mx-auto mt-10 flex flex-col space-y-5 justify-center items-center lg:w-9/12">
				<button
					onClick={spinWheel}
					disabled={isSpinning}
					className="text-[#d23369] hd-button disabled:opacity-50 font-semibold bg-white w-full cursor-pointer rounded-xl shadow-md p-3.5 text-xl">
					{isSpinning ? "Spinning..." : "Spin"}
				</button>
			</div>

			{/* Result */}
			{result && (
				<div className="text-lg sm:text-xl font-bold">🎯 Result: {result}</div>
			)}
		</div>
	);
}
