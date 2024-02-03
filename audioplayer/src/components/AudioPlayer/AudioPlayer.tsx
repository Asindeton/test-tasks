import style from "./AudioPlayer.module.scss";
import { Arrow } from "../../assets/icons/arrow.tsx";
import { Button } from "../button";
import { Play } from "../../assets/icons/play.tsx";
import loader from "../../assets/images/risian-X21.png";
import classNames from "classnames";
import { Volume } from "../../assets/icons/volume.tsx";
import { VolumeCross } from "../../assets/icons/volumeCross.tsx";
import { useAudio } from "./useAudio.ts";
import { Stop } from "../../assets/icons/stop.tsx";
import { useEffect, useState } from "react";
export const AudioPlayer = () => {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const {
    audio,
    audioName,
    isAudioPlay,
    prevSoundEventHandler,
    nextSoundEventHandler,
    togglePlayHandler,
    changeVolumeHandler,
    changeCurrentTimeHandler,
  } = useAudio();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isAudioPlay && audio) {
        setCurrentTime(audio.currentTime);
      }
    }, 300);

    return () => {
      clearInterval(intervalId);
    };
  }, [audio, isAudioPlay]);

  return (
    <div className={style.wrapper}>
      <div className={style.navigationButtonArea}>
        <Button onClick={prevSoundEventHandler}>
          <Arrow />
        </Button>
        <Button onClick={togglePlayHandler}>{isAudioPlay ? <Stop /> : <Play />}</Button>
        <Button onClick={nextSoundEventHandler}>
          <Arrow style={{ rotate: "180deg" }} />
        </Button>
      </div>
      <div className={style.mainInformationDataArea}>
        <div className={style.volumeAreaWrapper}>
          <VolumeCross />
          <input
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="100"
            onChange={(event) => {
              changeVolumeHandler(Number(event.target.value));
            }}
          />
          <Volume />
        </div>
        <h2 style={{ fontSize: 24 }}>{audioName}</h2>
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          value={currentTime}
          style={{ width: "100%" }}
          max={audio.duration ?? 0}
          className={classNames(style.progress, { [style.hidden]: !isAudioPlay })}
          onChange={(event) => {
            changeCurrentTimeHandler(Number(event.target.value));
          }}
        />
      </div>
      <div className={style.playImageWrapper}>
        <img
          src={loader}
          alt={"loader"}
          className={classNames(style.playImage, { [style.animate]: isAudioPlay })}
        />
      </div>
    </div>
  );
};
