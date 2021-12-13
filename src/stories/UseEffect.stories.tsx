import React, {useEffect, useState} from 'react';

export default {
    title: "useEffect demo",
}


export const CounterUseEffect = () => {
    console.log('CounterUseEffect')
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("useEffect every render!!!")
    })

    useEffect(() => {
        console.log("useEffect only first render!!!")
    }, [])

    useEffect(() => {
        console.log("useEffect first render and render every time when counter change!!!")
    }, [counter])


    return (
        <div>
            <button onClick={() => setCounter(counter + 1)} >+</button>
           Hello,  {counter}
        </div>
    )
}