import CenterGradient from "../components/CenterGradient";
import valDate from "../assets/images/val-date.svg";
import Image from "next/image";
import { Fredoka } from "next/font/google";
import localFont from "next/font/local";

const fredoka = localFont({
	src: "../assets/fonts/FredokaOne-Regular.ttf",
	display: "swap",
});

export default function BeMyVal() {
	return (
		<div className="w-full lg:max-w-lg mx-auto min-h-dvh bg-white text-black flex flex-col justify-center items-center space-y-30 py-16">
			<div className="w-full flex justify-center items-center relative">
				<CenterGradient />
				<Image
					src={valDate}
					alt="Image"
					className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 z-20"
				/>
			</div>

			<div
				className={`${fredoka.className} w-full flex flex-col justify-center items-center text-center px-3`}>
				<p
					className=" text-[1.8rem] font-bold text-[#FAD6E1] stroke"
					style={{
						WebkitTextStroke: "1px #E2599A",
					}}>
					Will you be my Valentine?
				</p>

				<div className="w-10/12 mx-auto flex flex-col mt-8 space-y-4 justify-center items-center lg:w-8/12">
					<button className="bg-[#E26493] text-white w-full cursor-pointer rounded-md shadow p-3.5 text-lg">
						Yes
					</button>
					<button className="bg-[#3E000C] text-white w-full cursor-pointer rounded-md shadow p-3.5 text-lg">
						No
					</button>
				</div>
			</div>
		</div>
	);
}
