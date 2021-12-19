import React, {useEffect, useState} from "react";
import s from './Clock.module.css'


type PropsType = {}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => {
            console.log("tick")
            setDate(new Date())
        }, 1000)
        return () => clearInterval(id)
    }, [])

    const seconds = date.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    const mins = date.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;

    const hour = date.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;


    return (
        <div className={s.clock}>
            <div className={s.outerClockFace}>
                <div className={`${s.marking} ${s.markingOne}`}></div>
                <div className={`${s.marking} ${s.markingTwo}`}></div>
                <div className={`${s.marking} ${s.markingThree}`}></div>
                <div className={`${s.marking} ${s.markingFour}`}></div>
            </div>
            <div className={s.innerClockFace}>
                <div className={`${s.hand} ${s.hourHand}`} style={{transform: `rotate(${hourDegrees}deg)`}}></div>
                <div className={`${s.hand} ${s.minHand}`} style={{transform: `rotate(${minsDegrees}deg)`}}></div>
                <div className={`${s.hand} ${s.secondHand}`} style={{transform: `rotate(${secondsDegrees}deg)`}}></div>
            </div>
        </div>
    )
}