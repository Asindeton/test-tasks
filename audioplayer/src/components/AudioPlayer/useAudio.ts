import { useCallback, useEffect, useState } from "react";
import paperback from "../../assets/music/paperback.mp3";
import onrepeat from "../../assets/music/onrepeat.mp3";
import creativeminds from "../../assets/music/creativeminds.mp3";

const audioList = [
  { name: "paperback", url: paperback },
  { name: "onrepeat", url: onrepeat },
  { name: "creativeminds", url: creativeminds },
];
export const useAudio = () => {
  const [audioIndex, setAudioIndex] = useState(0);
  const [audio, setAudio] = useState(new Audio(audioList[Math.abs(audioIndex)].url));
  const [audioName, setAudioName] = useState(audioList[Math.abs(audioIndex)].name);
  const [isAudioPlay, setIsAudioPlay] = useState<boolean>(false);
  const prevSoundEventHandler = () => {
    audio.pause();
    audio.currentTime = 0;
    setAudioIndex((prevState) => (prevState - 1) % audioList.length);
  };

  const nextSoundEventHandler = useCallback(() => {
    audio.pause();
    audio.currentTime = 0;
    setAudioIndex((prevState) => (prevState + 1) % audioList.length);
  }, [audio]);

  const changeVolumeHandler = (val: number) => {
    audio.volume = val / 100;
  };
  const changeCurrentTimeHandler = (val: number) => {
    audio.currentTime = val;
  };
  const togglePlayHandler = async () => {
    setIsAudioPlay((prevState) => !prevState);
  };

  useEffect(() => {
    if (isAudioPlay) {
      audio?.play();
    } else {
      audio?.pause();
    }
  }, [audio, isAudioPlay]);

  useEffect(() => {
    setAudio(() => new Audio(audioList[Math.abs(audioIndex)].url));
    setAudioName(() => audioList[Math.abs(audioIndex)].name);
  }, [audioIndex]);

  useEffect(() => {
    audio.addEventListener("ended", nextSoundEventHandler);
    return () => {
      audio.removeEventListener("ended", nextSoundEventHandler);
    };
  }, [audio, nextSoundEventHandler]);

  return {
    audio,
    audioName,
    isAudioPlay,
    changeVolumeHandler,
    changeCurrentTimeHandler,
    prevSoundEventHandler,
    nextSoundEventHandler,
    togglePlayHandler,
  };
};
