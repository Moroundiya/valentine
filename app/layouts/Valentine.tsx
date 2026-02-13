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
import { RootState } from "../redux/store";

export default function Valentine() {
	const dispatch = useDispatch();
	const activePage = useSelector(
		(state: RootState) => state.activePage.activePage,
	);
	const valModal = useSelector((state: RootState) => state.activePage.valModal);
	const spinModal = useSelector(
		(state: RootState) => state.activePage.spinModal,
	);
	const gift = useSelector((state: RootState) => state.activePage.gift);

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
