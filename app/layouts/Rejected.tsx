import Image from "next/image";
import CenterGradient from "../components/CenterGradient";
import localFont from "next/font/local";
import angry from "../assets/images/angry.gif";

const fredoka = localFont({
	src: "../assets/fonts/FredokaOne-Regular.ttf",
	display: "swap",
});

export default function Rejected() {
	return (
		<div className="w-full lg:max-w-lg mx-auto min-h-dvh bg-[#d23369] text-black flex flex-col justify-center items-center space-y-3">
			<p
				className={`text-[1.7rem] text-[#d23369] ${fredoka.className}`}
				style={{
					WebkitTextStroke: "1px #FAD6E1",
				}}>
				How dare you say NO!
			</p>
			<Image
				src={angry}
				alt="Image"
				className=""
			/>
			<p>or just say YES!</p>

			<div className="w-9/12 mx-auto flex flex-col mt-8 space-y-5 justify-center items-center lg:w-8/12">
				<button className="text-[#d23369] hd-button font-semibold bg-white w-full cursor-pointer rounded-xl shadow-md p-3.5 text-xl">
					Yes
				</button>
			</div>
		</div>
	);
}
