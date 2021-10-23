import React, { useState } from "react";

type UncontrolledRatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: UncontrolledRatingPropsType) {

    let value1 = 0;

    let [value, setValue] = useState(value1)

    const toggleRating = (value: 0 | 1 | 2 | 3 | 4 | 5) => {
        setValue(value)
    }

    return (
        <div>
            <button onClick={() => {toggleRating(0)}}>0</button>
            <Star selected={value > 0}/>
            <button onClick={() => {toggleRating(1)}}>1</button>
            <Star selected={value > 1}/>
            <button onClick={() => {toggleRating(2)}}>2</button>
            <Star selected={value > 2}/>
            <button onClick={() => {toggleRating(3)}}>3</button>
            <Star selected={value > 3}/>
            <button onClick={() => {toggleRating(4)}}>4</button>
            <Star selected={value > 4}/>
            <button onClick={() => {toggleRating(5)}}>5</button>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log("Star rendering");
    if (props.selected) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }

}