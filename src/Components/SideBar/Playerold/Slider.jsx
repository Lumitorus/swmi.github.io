import React from 'react';
import {useState, useEffect, useRef} from 'react';
import './Slider.scss';
import './Thumb.scss';

export default function Slider({onChange, percentage=0}) {
    const [position, setPosition] = useState(0);
    const [marginLeft, setMarginLeft] = useState(0)
    const [progressBarWidth, setProgressBarWidth] = useState(0)

    const rangeRef = useRef()
    const thumbRef = useRef()

    useEffect (() => {
        console.log(rangeRef);
        const rangeWidth = rangeRef.current.getBoundingClientRect().width
        const thumbWidth = thumbRef.current.getBoundingClientRect().width
        const centerThumb = (thumbWidth /100) * percentage * -1
        const centerProgressBar =
        thumbWidth + (rangeWidth / 100) * percentage - (thumbWidth / 100) * percentage
        setPosition(percentage)
        setMarginLeft(centerThumb)
        setProgressBarWidth(centerProgressBar)
    }, [percentage])

    return (
        <div className='slider-container'>
            <div className='progress-bar-cover' 
            style={{
                width: `${progressBarWidth}px`
            }}
            />
            <div className='thumb'  ref={thumbRef} style={{
               left: `${position}%`,
               marginLeft: `${marginLeft}px`
            }
            }/>
            <input type='range' value={position} ref={rangeRef} step='0.01' className='range' onChange={onChange}/>
        </div>
    );
}