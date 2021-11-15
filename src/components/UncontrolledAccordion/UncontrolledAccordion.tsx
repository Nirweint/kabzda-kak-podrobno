import React, {useReducer, useState} from "react";

export type UncontrolledAccordionPropsType = {
    titleValue: string,
}
type ActionType = {
    type: string

}

const reducer = (state: boolean, action: ActionType) => {
    if (action.type === "TOGGLE-COLLAPSED") {
        return !state
    }

    return state
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    // let [state, setState] = useState(false)
    let [state, dispatch] = useReducer(reducer, false)

    const toggle = () => {
        dispatch({type: "TOGGLE-COLLAPSED"})
    }

    return <div>
        <AccordionTitle title={props.titleValue} toggle={toggle}/>
        {state && <AccordionBody/>}
    </div>
}

type UncontrolledAccordionTitlePropsType = {
    title: string
    toggle: () => void
}

function AccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    const onClickToggleHandler = () => props.toggle()

    return <h3 style={{cursor: "pointer"}}
               onClick={onClickToggleHandler}>
        {props.title}
    </h3>;
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>;
}