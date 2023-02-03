import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import React, { useEffect, useState } from 'react'
import Animated from 'react-native-reanimated';
import Constants from './Constants';
const TimerCountdown = ({ duration, remainingTime, strokeWidth, animatedColor, colors, trailColor, size, onComplete }) => {
    const [displayTime, setDisplayTime] = useState(remainingTime)
    useEffect(() => {

        const time = setInterval(() => {
            if (displayTime > 0) {
                setDisplayTime(displayTime - 1)
            }
            else {
                clearInterval(time)
            }
        }, 1000);
        return () => {
            clearInterval(time)
        };
    }, [displayTime]);
    return (
        <CountdownCircleTimer
            isPlaying
            duration={duration}
            colors={colors}
            strokeWidth={strokeWidth}
            size={size}
            trailColor={trailColor}
            onComplete={onComplete}

        >
            <Animated.Text style={{ color: animatedColor, fontSize: Constants.ResponsiveSize.f14, fontWeight: 'bold' }}>
                {displayTime}
            </Animated.Text>
        </CountdownCircleTimer>
    )
}

export default TimerCountdown;