import CenterGradient from "../components/CenterGradient";
import valDate from "../assets/images/val-date.svg";
import Image from "next/image";
import localFont from "next/font/local";

const fredoka = localFont({
	src: "../assets/fonts/FredokaOne-Regular.ttf",
	display: "swap",
});

export default function BeMyVal() {
	return (
		<div className="w-full lg:max-w-lg mx-auto min-h-dvh bg-[#d23369] text-black flex flex-col justify-center items-center space-y-30 py-16">
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
					className=" text-[1.7rem] text-[#d23369]"
					style={{
						WebkitTextStroke: "1px #FAD6E1",
					}}>
					Will you be my Valentine?
				</p>

				<div className="w-9/12 mx-auto flex flex-col mt-8 space-y-5 justify-center items-center lg:w-8/12">
					<button className="text-[#d23369] hd-button bg-white w-full cursor-pointer rounded-xl shadow-md p-3.5 text-xl">
						Yes
					</button>
					<button className="bg-[#3E000C] hd-button text-white w-full cursor-pointer rounded-xl shadow-md p-3.5 text-xl">
						No
					</button>
				</div>
			</div>
		</div>
	);
}
