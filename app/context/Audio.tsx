"use client";

import { createContext, ReactNode, useContext, useRef } from "react";

interface AudioContextType {
	audioRef: React.RefObject<HTMLAudioElement | null>;
	playAudio: () => void;
	pauseAudio: () => void;
	stopAudio: () => void;
	killAudio: () => void;
}
const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
	const audioRef = useRef<HTMLAudioElement | null>(null);

	const playAudio = () => {
		audioRef.current?.play();
	};

	const pauseAudio = () => {
		audioRef.current?.pause();
	};

	const stopAudio = () => {
		if (audioRef.current) {
			audioRef.current.pause();
			audioRef.current.currentTime = 0;
		}
	};

	const killAudio = () => {
		if (audioRef.current) {
			audioRef.current.pause();
			audioRef.current.removeAttribute("src");
			audioRef.current.load();
		}
	};

	return (
		<AudioContext.Provider
			value={{ playAudio, pauseAudio, stopAudio, killAudio, audioRef }}>
			<audio
				ref={audioRef}
				preload="auto"
				loop
				className="hidden">
				<source
					src="/music/love.mp3"
					type="audio/mpeg"
				/>
			</audio>
			{children}
		</AudioContext.Provider>
	);
}

export const useAudio = (): AudioContextType => {
	const context = useContext(AudioContext);
	if (!context) throw new Error("useAudio ");
	return context;
};
