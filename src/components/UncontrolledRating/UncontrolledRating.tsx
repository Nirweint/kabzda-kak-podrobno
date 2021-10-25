import React, {useState} from "react";

type UncontrolledRatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

type ValueRatingType = 0 | 1 | 2 | 3 | 4 | 5;

export function UncontrolledRating(props: UncontrolledRatingPropsType) {

    let [value, setValue] = useState(0)

    const toggleRating = (value: ValueRatingType) => {
        setValue(value)
    }

    return (
        <div>
            <Star selected={value > 0} toggleRating={toggleRating} value={1}/>
            <Star selected={value > 1} toggleRating={toggleRating} value={2}/>
            <Star selected={value > 2} toggleRating={toggleRating} value={3}/>
            <Star selected={value > 3} toggleRating={toggleRating} value={4}/>
            <Star selected={value > 4} toggleRating={toggleRating} value={5}/>

        </div>
    )

}

type StarPropsType = {
    selected: boolean
    toggleRating: (value: ValueRatingType) => void
    value: ValueRatingType
}

function Star(props: StarPropsType) {
    console.log("Star rendering");
    return props.selected ?
        <span onClick={() => {props.toggleRating(props.value)}}>
            <b>star </b>
        </span>
        :
        <span onClick={() => {props.toggleRating(props.value)}}>
            star
        </span>
}