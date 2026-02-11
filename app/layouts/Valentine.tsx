"use client";

import { useEffect } from "react";
import Preloader from "./Preloader";
import { useDispatch, useSelector } from "react-redux";
import BeMyVal from "./BeMyVal";
import Rejected from "./Rejected";
import { setActivePage } from "../redux/activePageSlice";
import { Congratulations } from "../components/modals/Congratulations";
import SpinWheel from "./SpinWheel";

export default function Valentine() {
	const activePage = useSelector((state: any) => state.activePage.value);
	const valModal = useSelector((state: any) => state.valModal.value);
	const dispatch = useDispatch();

	useEffect(() => {
		setTimeout(() => {
			dispatch(setActivePage("be-my-val"));
		}, 4000);
	}, []);

	useEffect(() => {
		console.log("activePage is", activePage);
	}, [activePage]);

	return (
		<>
			<Congratulations modalOpen={valModal} />
			{activePage === "preloader" && <Preloader />}
			{activePage === "be-my-val" && <BeMyVal />}
			{activePage === "no" && <Rejected />}
			{activePage === "spin" && <SpinWheel />}
			{/* <BeMyVal /> */}
			{/* <Congratulations /> */}
			{/* <Rejected /> */}
			{/* <SpinWheel /> */}
			{/* <Win /> */}
			{/* <Gift /> */}
		</>
	);
}
