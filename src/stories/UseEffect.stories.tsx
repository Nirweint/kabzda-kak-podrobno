import React, {useEffect, useState} from 'react';

export default {
    title: "useEffect demo",
}


export const CounterUseEffect = () => {
    console.log('CounterUseEffect')
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("useEffect every render!!!")
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log("useEffect only first render!!!")
        document.title = counter.toString()

    }, [])

    useEffect(() => {
        console.log("useEffect first render and render every time when counter change!!!")
        document.title = counter.toString()
    }, [counter])


    return (
        <div>
            <button onClick={() => setCounter(counter + 1)} >+</button>
           Hello,  {counter}
        </div>
    )
}

export const SetTimeOutUseEffect = () => {
    console.log('SetTimeOutUseEffect')
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {
        console.log("useEffect every render!!!")

        setTimeout(() => {
            console.log("setTimeout")
            document.title = counter.toString()
        }, 1000)

    }, [counter])



    return (
        <div>
            <button onClick={() => setCounter(counter + 1)} >+ counter</button>
            <button onClick={() => setFake(fake + 1)} >+ fake</button>
            Hello,  {counter}
            Fake, {fake}
        </div>
    )
}

export const SetIntervalUseEffect = () => {
    console.log('SetIntervalUseEffect')

    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {
        console.log("useEffect every render!!!")

        setInterval(() => {
            console.log("time")
            setDate(new Date())
        }, 1000)

    }, [])

    let time = date.toLocaleTimeString()

    return (
        <div>
            {time}
        </div>
    )
}