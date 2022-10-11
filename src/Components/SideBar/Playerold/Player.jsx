import React from 'react';
import { useState, useRef } from 'react'

import './Player.scss';
import Slider from './Slider.jsx';
import ControlPanel from './Buttons/ControlPanel.jsx';
import song from '../../../pages/Home/Music/0001-Bad Boys Blue-A Train To Nowhere.wav';

export default function Player() {

    const [percentage, setPercentage] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    const audioRef = useRef()

    const onChange = (e) => {
        const audio = audioRef.current
        audio.currentTime = (audio.duration / 100) * e.target.value
        setPercentage(e.target.value)
      }

    const play = () => {
        const audio = audioRef.current
        audio.volume = 0.1
    
        if (!isPlaying) {
          setIsPlaying(true)
          audio.play()
        }
    
        if (isPlaying) {
          setIsPlaying(false)
          audio.pause()
        }
      }
    
      const getCurrDuration = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
        const time = e.currentTarget.currentTime
    
        setPercentage(+percent)
        setCurrentTime(time.toFixed(2))
      }
      
    return (
        <div className='player'>
            <span>
                {/* <label>{playing}</label> */}
                <span><Slider onChange={onChange} percentage={percentage} /></span>
                <div className='btn'>

        <audio 
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2))
        }}
        id="sound"
        src={song}
        type="audio/wav"
        crossOrigin={"anonymous"}
      ></audio>
      <ControlPanel
        play={play}
        isPlaying={isPlaying}
        duration={duration}
        currentTime={currentTime}
      />
                </div>
            </span>
        </div>        
    )
}