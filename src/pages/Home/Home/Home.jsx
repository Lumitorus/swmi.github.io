import React from 'react';
import SideBar from '../../../Components/SideBar/SideBar.jsx';
import Player from '../../../Components/SideBar/Player/Player.jsx';
import PlayerOld from '../../../Components/SideBar/Playerold/Player.jsx';
import AudioSpectrum from 'react-audio-spectrum'
import './Home.scss';
import { songsdata } from '../../../Components/SideBar/Player/audios';
import { useRef, useState, useEffect } from 'react';
import song from "../../../pages/Home/Music/j^p^n - Amend.mp3";

import {motion} from "framer-motion";

export default function Home() {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);

  const audioElem = useRef();

  // useEffect(() => {
  //   if (isplaying) {
  //     audioElem.current.play();
  //   }
  //   else {
  //     audioElem.current.pause();
  //   }
  // }, [isplaying])

  const onPlaying = () => {
    document.getElementById("sound").volume = 0.5;
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })

  }
  const visible = {x: 0,  width: "100%", opacity: 1, y: 0, transition: { duration: 0.9 } };
  console.log(currentSong.url);
    return (
        <motion.div
        className='home'
        initial={{opacity: 0,x: "200%", y: "200%", width: "100%", transition: { duration: 0.5 }}}
        animate={visible}
        exit={{ opacity: 0,x: "200%", y: "200%", width: 0, transition: { duration: 0.5 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
            
            <h1>WELCOME?</h1>
                 
                 <audio
                  preload='true'
                   id="sound"
                   controls="controls"
                  src={song}/>
                 {/* <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} /> */}
                 {/* <PlayerOld /> */}
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
    </motion.div>
             
    )
}