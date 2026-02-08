"use client";
import { setActivePage, setValModal } from "@/app/redux/activePageSlice";
import { Modal } from "@heroui/react";
import { Icon } from "@iconify/react";
import localFont from "next/font/local";
import { useDispatch } from "react-redux";

const fredoka = localFont({
	src: "../../assets/fonts/FredokaOne-Regular.ttf",
	display: "swap",
});

export function Congratulations({ modalOpen }) {
	const dispatch = useDispatch();
	return (
		<Modal>
			<Modal.Backdrop
				isDismissable={false}
				isOpen={modalOpen}
				variant="blur">
				<Modal.Container
					size="md"
					placement="center">
					<Modal.Dialog>
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
								It’s a YES!
							</Modal.Heading>
						</Modal.Header>
						<Modal.Body>
							<p className="my-3 text-[#c62354]">
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
							className="w-full mt-5 text-white rounded-xl bg-[#d23369] hd-button py-3 cursor-pointer">
							Continue
						</button>
					</Modal.Dialog>
				</Modal.Container>
			</Modal.Backdrop>
		</Modal>
	);
}
