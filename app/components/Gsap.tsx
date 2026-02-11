"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Gsap() {
	useGSAP(() => {
		gsap.from("#logo", {
			scale: 1.5,
			opacity: 0,
			duration: 1,
			ease: "power1.inOut",
		});


		const texts = gsap.utils.toArray("#heroDesc > *");
		texts.forEach((text, i) => {
			gsap.from(text as gsap.TweenTarget, {
				y: 50,
				delay: i * 0.3,
				duration: 1,
				opacity: 0,
				stagger: 0.5,
			});
		});

		gsap.from("#view", {
			y: 50,
			duration: 1,
		});

		const heroDescLine = new SplitText("#heroDescLine", { type: "lines" });
		heroDescLine?.lines?.forEach((text, i) => {
			gsap.from(text, {
				y: 50,
				opacity: 0,
				stagger: 0.5,
				delay: i * 0.15,
				duration: 1,
				ease: "power2.out",
			});
		});

		const textSplit = new SplitText("#heroTitle", { type: "chars" });
		textSplit.chars?.forEach((text) => text.classList.add("text-gradient"));
		textSplit?.chars?.forEach((text, i) => {
			gsap.from(text, {
				y: 100,
				opacity: 0,
				stagger: 0.2,
				delay: i * 0.15,
				duration: 1,
				ease: "power2.out",
			});
		});

		gsap.from("#cocktails > *", {
			y: 50,
			duration: 1,
			opacity: 0,
			stagger: 0.2,
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: "#cocktails > *",
				start: "top bottom",
				end: "top top",
				scrub: true,
			},
		});
		gsap.from("#mocktails > *", {
			y: 50,
			duration: 1,
			opacity: 0,
			stagger: 0.2,
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: "#mocktails > *",
				start: "top bottom",
				end: "top top",
				scrub: true,
			},
		});

		const video = document.querySelector("video");
		const pinnedEl = document.querySelector("#videoContainer");
		const endEl = document.querySelector("#cocktailsSection");

		gsap.to(video, {
			currentTime: video?.duration,
			scrollTrigger: {
				trigger: pinnedEl,
				start: "top top",
				end: () => {
					const pinnedHeight = pinnedEl?.offsetHeight;
					const endTriggerTop = endEl?.offsetTop;
					const endTriggerHeight = endEl?.offsetHeight;
					return endTriggerTop + endTriggerHeight - pinnedHeight;
				},
				scrub: true,
				pin: true,
				pinSpacing: false,
			},
		});

		gsap.from("#tag", {
			y: -100,
			opacity: 0,
			duration: 1,
			ease: "power2.out",
			scrollTrigger: {
				trigger: "#tag",
				start: "top bottom",
				toggleActions: "restart none restart none",
			},
		});

		gsap.from("#rating", {
			y: -20,
			opacity: 0,
			duration: 1,
			ease: "power2.inOut",
			scrollTrigger: {
				trigger: "#rating",
				start: "top bottom",
				toggleActions: "restart none restart none",
			},
		});

		gsap.from("#ratingText", {
			y: 40,
			opacity: 0,
			duration: 1,
			ease: "power2.out",
			scrollTrigger: {
				trigger: "#ratingText",
				start: "top bottom",
				toggleActions: "restart none restart none",
			},
		});

		const tagDesc = new SplitText("#tagDesc", { type: "lines" });
		tagDesc.lines.forEach((line, i) => {
			gsap.from(line, {
				y: 50,
				opacity: 0,
				duration: 1,
				ease: "power2.out",
				delay: i * 0.2,
				scrollTrigger: {
					trigger: "#tagDesc",
					start: "top bottom",
					end: "bottom top",
					toggleActions: "restart none restart none",
				},
			});
		});

		const everyText = new SplitText("#everyText", { type: "lines" });
		everyText.lines.forEach((line, i) => {
			gsap.from(line, {
				y: 50,
				opacity: 0,
				duration: 1,
				ease: "power2.out",
				delay: i * 0.2,
				scrollTrigger: {
					trigger: "#everyText",
					start: "top bottom",
					end: "bottom top",
					toggleActions: "restart none restart none",
				},
			});
		});

		gsap.from(["#photoGallery1 > *", "#photoGallery2 > *"], {
			y: 50,
			x: 50,
			scale: 0.5,
			opacity: 0,
			stagger: 1.2,
			duration: 1,
			scrollTrigger: {
				trigger: ["#photoGallery1 > *", "#photoGallery2 > *"],
				start: "top bottom",
				end: "top top",
				toggleActions: "restart none restart none",
				scrub: true,
			},
			ease: "power2.out",
		});
	});
	return null;
}
