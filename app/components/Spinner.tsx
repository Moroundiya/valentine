"use client";
import { RotatingLines } from "react-loader-spinner";

export default function Spinner() {
	return (
		<RotatingLines
			visible={true}
			height="40"
			width="40"
			color="#fa97cb"
			strokeWidth="5"
			animationDuration="0.75"
			ariaLabel="rotating-lines-loading"
			wrapperStyle={{}}
			wrapperClass=""
		/>
	);
}
