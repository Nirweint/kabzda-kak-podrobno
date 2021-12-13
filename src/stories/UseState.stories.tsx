import React, {useMemo, useState} from "react";

export default {
    title: 'useState',
}

function generateData() {
    console.log("Generate data")
    return 3232323;
}

export const Counter = () => {
    console.log('Counter')

    // const initValue = useMemo(generateData, [])
    const [counter, setCounter] = useState(generateData)

    return (
        <div>
            <button onClick={() => setCounter(state => state + 1)} >+</button>
            {counter}
        </div>
    )
}