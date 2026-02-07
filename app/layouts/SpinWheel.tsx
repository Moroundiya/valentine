import localFont from "next/font/local";
import WheelSpinner, { Wheel } from "../components/Wheel";

const fredoka = localFont({
	src: "../assets/fonts/FredokaOne-Regular.ttf",
	display: "swap",
});

export default function SpinWheel() {
	return (
		<div className="w-full lg:max-w-lg mx-auto min-h-dvh bg-[#d23369] text-black flex flex-col justify-center items-center space-y-10 py-20">
			<p
				className={`text-[1.7rem] text-center leading-tight w-10/12 mx-auto text-[#d23369] ${fredoka.className}`}
				style={{
					WebkitTextStroke: "1px #FAD6E1",
				}}>
				Spin the wheel and win free valentine gift !
			</p>

			<div className="w-full flex justify-center items-center">
				<WheelSpinner />
			</div>
			
		</div>
	);
}
