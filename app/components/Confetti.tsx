"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Confetti() {
	useEffect(() => {
		const canvas = document.createElement("canvas");
		canvas.style.position = "fixed";
		canvas.style.top = "0";
		canvas.style.left = "0";
		canvas.style.width = "100%";
		canvas.style.height = "100%";
		canvas.style.pointerEvents = "none";
		canvas.style.zIndex = "9999";
		document.body.appendChild(canvas);

		const myConfetti = confetti.create(canvas, {
			resize: true,
			useWorker: true,
		});

		myConfetti({
			particleCount: 250,
			spread: 180,
			startVelocity: 45,
			origin: { x: 0.5, y: 0.5 },
			gravity: 0.9,
			scalar: 1,
		});

		const duration = 3 * 1000;
		const end = Date.now() + duration;

		const frame = () => {
			if (Date.now() > end) return;

			myConfetti({
				particleCount: 5,
				angle: 90,
				spread: 360,
				origin: {
					x: Math.random(),
					y: 0,
				},
				gravity: 0.8,
				scalar: 0.9,
				drift: (Math.random() - 0.5) * 0.8,
			});

			requestAnimationFrame(frame);
		};

		frame();
		return () => {
			document.body.removeChild(canvas);
		};
	}, []);

	return null;
}
