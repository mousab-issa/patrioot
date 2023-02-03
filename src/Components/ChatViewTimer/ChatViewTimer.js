import React, { useEffect, useState } from 'react';
import {
    Text,
    View
} from 'react-native';
import Styles from './Styles';



function chatViewTimer(props) {

    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [countDownTime, setCountDownTime] = useState(0);


    useEffect(() => {
        let timer = setInterval(() => onTimerTick(), 1000);
        return () => clearInterval(timer)
    });

    function onTimerTick() {
        setCountDownTime(countDownTime + 1)
        const minute = Math.floor(countDownTime / 60)
        const second = countDownTime % 60
        setMinutes(minute < 10 ? ('0' + minute) : minute)
        setSeconds(second < 10 ? ('0' + second) : second)
    }

    return (
        <View style={Styles.bottomTime}>
            <Text style={Styles.bottomTimeText}>{minutes}{':'}{seconds}</Text>
        </View>
    );
}

export default chatViewTimer;

