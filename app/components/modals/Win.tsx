"use client";
import { Button, Modal } from "@heroui/react";
import localFont from "next/font/local";
import { Icon } from "@iconify/react";
import Image from "next/image";
import giftBox from "../../assets/images/gift-box.svg";
import { setActivePage, setSpinModal } from "@/app/redux/activePageSlice";
import { useDispatch } from "react-redux";

const fredoka = localFont({
	src: "../../assets/fonts/FredokaOne-Regular.ttf",
	display: "swap",
});

export function Win({ modalOpen, gift }) {
	const dispatch = useDispatch();
	return (
		<Modal>
			<Modal.Backdrop
				isOpen={modalOpen}
				isDismissable={false}
				variant="blur">
				<Modal.Container
					size="md"
					placement="center">
					<Modal.Dialog>
						<Modal.Header>
							
							<div className="w-full flex justify-center items-center">
								<Image
									src={giftBox}
									alt="Gift Box"
									width={150}
								/>
							</div>
							<Modal.Heading
								className={`text-center text-3xl text-[#FAD6E1] ${fredoka.className}`}
								style={{
									WebkitTextStroke: "1.5px #d23369",
								}}>
								Congratulations!
							</Modal.Heading>
						</Modal.Header>
						<Modal.Body>
							<p className="mb-3 text-[#c62354] text-center">
								You won <span className="font-bold capitalize">{gift}</span>
							</p>
						</Modal.Body>
						<button
							onClick={() => {
								dispatch(setSpinModal(false));
								dispatch(setActivePage("gift"));
							}}
							className="w-full mt-5 text-white rounded-xl bg-[#d23369] hd-button py-3 cursor-pointer">
							Claim Gift
						</button>
					</Modal.Dialog>
				</Modal.Container>
			</Modal.Backdrop>
		</Modal>
	);
}
