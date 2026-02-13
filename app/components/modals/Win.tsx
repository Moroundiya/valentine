"use client";
import localFont from "next/font/local";
import Image from "next/image";
import giftBox from "../../assets/images/gift-box.webp";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { Modal } from "@heroui/react";
import { setActivePage, setSpinModal } from "@/app/redux/activePageSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLayoutEffect } from "react";

gsap.registerPlugin(SplitText);

const fredoka = localFont({
	src: "../../assets/fonts/FredokaOne-Regular.ttf",
	display: "swap",
});

export function Win({ modalOpen, gift }: { modalOpen: boolean; gift: string }) {
	const dispatch = useDispatch();
	const winModal = useSelector((state: boolean) => state.activePage.spinModal);

	useLayoutEffect(() => {
		if (!winModal) return;

		gsap.from("#winIcon", {
			y: -50,
			opacity: 0,
			duration: 1,
			ease: "power3.out",
		});

		gsap.to("#winIcon", {
			rotation: -8,
			duration: 0.1,
			yoyo: true,
			repeat: 60,
			ease: "power1.inOut",
		});

		gsap.from("#winSlideUp", {
			y: 10,
			opacity: 0,
			duration: 1,
			ease: "power3.out",
			delay: 4,
		});

		gsap.from("#winModalContainer", {
			y: 100,
			opacity: 0,
			duration: 1,
			ease: "power3.out",
		});

		const splitAnswer = new SplitText("#winAnswer", { type: "chars" });
		const splitWriteUp = new SplitText("#winWriteUp", { type: "words" });

		gsap.from(splitAnswer.chars, {
			opacity: 0,
			duration: 1,
			stagger: 0.1,
			delay: 0.5,
			ease: "power3.out",
		});

		gsap.from(splitWriteUp.words, {
			opacity: 0,
			duration: 1,
			stagger: 0.1,
			delay: 3,
			ease: "power3.out",
		});

		return () => {
			splitAnswer.revert();
			splitWriteUp.revert();
		};
	}, [winModal]);
	return (
		<Modal>
			<Modal.Backdrop
				isOpen={modalOpen}
				isDismissable={false}
				variant="blur">
				<Modal.Container
					size="md"
					placement="center">
					<Modal.Dialog id="winModalContainer">
						<Modal.Header>
							<div className="w-full flex justify-center items-center">
								<Image
									src={giftBox}
									alt="Gift Box"
									width={150}
									id="winIcon"
								/>
							</div>
							<Modal.Heading
								className={`text-center text-3xl text-[#FAD6E1] ${fredoka.className}`}
								style={{
									WebkitTextStroke: "1.5px #d23369",
								}}
								id="winAnswer">
								Congratulations!
							</Modal.Heading>
						</Modal.Header>
						<Modal.Body>
							<p
								className="mb-3 text-[#c62354] text-center"
								id="winWriteUp">
								You won <span className="font-bold capitalize">{gift}</span> as
								your valentine gift
							</p>
						</Modal.Body>
						<button
							onClick={() => {
								dispatch(setSpinModal(false));
								dispatch(setActivePage("gift"));
							}}
							className="w-full mt-5 text-white rounded-xl bg-[#d23369] hd-button py-3 cursor-pointer"
							id="winSlideUp">
							Claim Gift
						</button>
					</Modal.Dialog>
				</Modal.Container>
			</Modal.Backdrop>
		</Modal>
	);
}
