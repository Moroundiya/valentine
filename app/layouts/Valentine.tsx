"use client";

import Gift from "./Gift";
import Preloader from "./Preloader";
import BeMyVal from "./BeMyVal";
import Rejected from "./Rejected";
import SpinWheel from "./SpinWheel";

import { Win } from "../components/modals/Win";
import { useEffect } from "react";
import { setActivePage } from "../redux/activePageSlice";
import { Congratulations } from "../components/modals/Congratulations";
import { useDispatch, useSelector } from "react-redux";

export default function Valentine() {
	const dispatch = useDispatch();
	const activePage = useSelector(
		(state: string) => state.activePage.activePage,
	);
	const valModal = useSelector((state: boolean) => state.activePage.valModal);
	const spinModal = useSelector((state: boolean) => state.activePage.spinModal);
	const gift = useSelector((state: string) => state.activePage.gift);

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
