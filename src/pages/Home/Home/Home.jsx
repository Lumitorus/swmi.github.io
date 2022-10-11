import React from 'react';
import SideBar from '../../../Components/SideBar/SideBar.jsx';
import Player from '../../../Components/SideBar/Player/Player.jsx';
import AudioSpectrum from 'react-audio-spectrum'
import './Home.scss';
import { songsdata } from '../../../Components/SideBar/Player/audios';
import { useRef, useState, useEffect } from 'react';
export default function Home() {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    }
    else {
      audioElem.current.pause();
    }
  }, [isplaying])

  const onPlaying = () => {
    document.getElementById("sound").volume = 0.5;
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })

  }
    return (
        <div className='home'>
            <SideBar />
            <h1>WELCOME?</h1>
                 
                 <audio
                   id="sound"
                   
                  src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
                 <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
                 <span>
      <AudioSpectrum
                width={1500}
                audioId="sound"
                capColor={"black"}
                capHeight={5}
                meterWidth={2}
                meterCount={2000}
                meterColor={[
                  { stop: 0, color: "black" },
                  { stop: 0.5, color: "transparent" },
                  { stop: 1, color: "black" },
                ]}
                gap={6}
              ></AudioSpectrum>
              </span>
    </div>
             
    )
}