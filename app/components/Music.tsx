"use client";

import gsap from "gsap";
import { Icon } from "@iconify/react";
import { useRef, useEffect, useState } from "react";

export default function Music() {
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const barsRef = useRef<HTMLDivElement[]>([]);
	const animationRef = useRef<gsap.core.Tween | null>(null);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);

	const handleToggle = async () => {
		if (!audioRef.current) return;

		try {
			if (isPlaying) {
				audioRef.current.pause();
				setIsPlaying(false);
			} else {
				await audioRef.current.play();
				setIsPlaying(true);
			}
		} catch (err) {
			console.log("Playback failed:", err);
		}
	};

	useEffect(() => {
		if (!barsRef.current.length) return;

		if (!isPlaying) {
			animationRef.current?.kill();
			gsap.to(barsRef.current, {
				scaleY: 0.3,
				duration: 0.3,
				transformOrigin: "bottom",
			});
			return;
		}
		animationRef.current = gsap.to(barsRef.current, {
			scaleY: () => gsap.utils.random(0.4, 1.6),
			transformOrigin: "bottom",
			duration: 0.4,
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut",
			stagger: { each: 0.08, from: "center" },
		});

		return () => {
			animationRef.current?.kill();
		};
	}, [isPlaying]);

	return (
		<div className="flex justify-between w-full px-4 lg:px-10 items-center fixed top-7 lg:top-10 left-0">
			<audio
				ref={audioRef}
				src="/music/love.mp3"
				loop
			/>
			<div className="flex items-end space-x-1 pointer-events-none w-10">
				{Array.from({ length: 7 }).map((_, i) => (
					<div
						key={i}
						ref={(el) => {
							if (el) barsRef.current[i] = el;
						}}
						className="w-1 bg-white rounded-full shadow-[0_0_8px_#ff4d88]"
						style={{ height: 10, transform: "scaleY(0.3)" }}
					/>
				))}
			</div>
			<button
				onClick={handleToggle}
				className="bg-white text-[#d23369] border-2 border-[#EA4986] p-1 shadow-md cursor-pointer w-10 h-10 rounded-full flex justify-center items-center">
				{isPlaying ? (
					<Icon
						icon="basil:pause-solid"
						className="text-3xl"
					/>
				) : (
					<Icon
						icon="basil:play-solid"
						className="text-3xl"
					/>
				)}
			</button>
		</div>
	);
}
