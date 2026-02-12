"use client";
import { setActivePage, setValModal } from "@/app/redux/activePageSlice";
import { Modal } from "@heroui/react";
import { Icon } from "@iconify/react";
import localFont from "next/font/local";
import { useDispatch, useSelector } from "react-redux";

import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const fredoka = localFont({
	src: "../../assets/fonts/FredokaOne-Regular.ttf",
	display: "swap",
});

export function Congratulations({ modalOpen }) {
	const dispatch = useDispatch();

	const valModal = useSelector((state: boolean) => state.activePage.valModal);

	useLayoutEffect(() => {
		if (!valModal) return;

		gsap.from("#icon", {
			x: 100,
			opacity: 0,
			duration: 1,
			ease: "power3.out",
			delay: 0.5,
		});

		gsap.from("#slideUp", {
			y: 10,
			opacity: 0,
			duration: 1,
			ease: "power3.out",
			delay: 3.5,
		});

		gsap.from("#modalContainer", {
			y: 100,
			opacity: 0,
			duration: 1,
			ease: "power3.out",
		});

		const splitAnswer = new SplitText("#answer", { type: "words" });
		const splitWriteUp = new SplitText("#writeUp", { type: "words" });

		gsap.from(splitAnswer.words, {
			opacity: 0,
			duration: 1,
			stagger: 0.3,
			delay: 0.5,
			ease: "power3.out",
		});

		gsap.from(splitWriteUp.words, {
			opacity: 0,
			duration: 1,
			stagger: 0.1,
			delay: 1.3,
			ease: "power3.out",
		});

		return () => {
			splitAnswer.revert();
			splitWriteUp.revert();
		};
	}, [valModal]);

	return (
		<Modal>
			<Modal.Backdrop
				isDismissable={false}
				isOpen={modalOpen}
				variant="blur">
				<Modal.Container
					size="md"
					placement="center">
					<Modal.Dialog id="modalContainer">
						<Modal.Header>
							<div
								className="w-full flex justify-center items-center"
								id="icon">
								<Icon
									icon="line-md:emoji-smile-wink-filled"
									className="text-[#d23369] text-7xl text-center"
								/>
							</div>
							<Modal.Heading
								className={`text-center text-3xl text-[#FAD6E1] ${fredoka.className}`}
								style={{
									WebkitTextStroke: "1.5px #d23369",
								}}
								id="answer">
								It’s a YES!
							</Modal.Heading>
						</Modal.Header>
						<Modal.Body>
							<p
								className="my-3 text-[#c62354] overflow-hidden"
								id="writeUp">
								I’m genuinely happy you said yes, being chosen is something
								special. Now let’s move forward and see where this Valentine
								journey takes us.
							</p>
						</Modal.Body>
						<button
							onClick={() => {
								dispatch(setValModal(false));
								dispatch(setActivePage("spin"));
							}}
							className="w-full mt-5 text-white rounded-xl bg-[#d23369] hd-button py-3 cursor-pointer"
							id="slideUp">
							Continue
						</button>
					</Modal.Dialog>
				</Modal.Container>
			</Modal.Backdrop>
		</Modal>
	);
}
