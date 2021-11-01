import React, {useState} from "react";

export type UncontrolledRatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

export type ValueRatingType = 0 | 1 | 2 | 3 | 4 | 5;

export function UncontrolledRating(props: UncontrolledRatingPropsType) {

    const [value, setValue] = useState<ValueRatingType>(0)

    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    setValue: (value: ValueRatingType) => void
    value: ValueRatingType
}

function Star(props: StarPropsType) {
    const onClickToggleRatingHandler = () => props.setValue(props.value)

    return <span style={{cursor: "pointer"}} onClick={onClickToggleRatingHandler}>
        {props.selected ? <b>star </b> : "star "}
    </span>

}