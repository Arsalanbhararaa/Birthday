import { useEffect, useRef, useState } from "react";

export function useAudio(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
      audio.src = "";
    };
  }, [src]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [isMuted, volume]);

  const play = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.log("Audio playback prevented by browser:", error);
      }
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const setVolumeLevel = (level: number) => {
    setVolume(Math.max(0, Math.min(1, level)));
  };

  return {
    isPlaying,
    isMuted,
    volume,
    play,
    pause,
    togglePlay,
    toggleMute,
    setVolume: setVolumeLevel,
  };
}
