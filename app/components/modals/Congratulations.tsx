"use client";
import { Button, Modal } from "@heroui/react";
import { Icon } from "@iconify/react";
import localFont from "next/font/local";

const fredoka = localFont({
	src: "../../assets/fonts/FredokaOne-Regular.ttf",
	display: "swap",
});

export function Congratulations() {
	return (
		<Modal>
			<Button variant="secondary">Open Modal</Button>
			<Modal.Backdrop
				isDismissable={false}
				variant="blur">
				<Modal.Container
					size="md"
					placement="center">
					<Modal.Dialog>
						{/* <Modal.CloseTrigger /> */}
						<Modal.Header>
							<Icon
								icon="line-md:emoji-smile-wink-filled"
								className="text-[#d23369] text-7xl text-center mx-auto"
							/>
							<Modal.Heading
								className={`text-center text-3xl text-[#FAD6E1] ${fredoka.className}`}
								style={{
									WebkitTextStroke: "1.5px #d23369",
								}}>
								Congratulations!
							</Modal.Heading>
						</Modal.Header>
						<Modal.Body>
							<p className="my-3 text-[#c62354]">
								You literally made the right choice - since the day you chose me
								actually hahahahahaha.
							</p>
						</Modal.Body>
						<button className="w-full mt-5 text-white rounded-xl bg-[#d23369] hd-button py-3 cursor-pointer">
							Continue
						</button>
					</Modal.Dialog>
				</Modal.Container>
			</Modal.Backdrop>
		</Modal>
	);
}
