"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../redux/activePageSlice";
import { Congratulations } from "../components/modals/Congratulations";
import { Win } from "../components/modals/Win";
import Preloader from "./Preloader";
import BeMyVal from "./BeMyVal";
import Rejected from "./Rejected";
import SpinWheel from "./SpinWheel";
import Gift from "./Gift";

export default function Valentine() {
	const activePage = useSelector((state: any) => state.activePage.activePage);
	const valModal = useSelector((state: any) => state.activePage.valModal);
	const spinModal = useSelector((state: any) => state.activePage.spinModal);
	const gift = useSelector((state: any) => state.activePage.gift);

	const dispatch = useDispatch();

	useEffect(() => {
		setTimeout(() => {
			dispatch(setActivePage("be-my-val"));
		}, 3000);
	}, []);

	return (
		<>
			<Congratulations modalOpen={valModal} />
			<Win
				modalOpen={spinModal}
				gift={gift}
			/>
			{activePage === "preloader" && <Preloader />}
			{activePage === "be-my-val" && <BeMyVal />}
			{activePage === "no" && <Rejected />}
			{activePage === "spin" && <SpinWheel />}
			{activePage === "gift" && <Gift />}
		</>
	);
}
