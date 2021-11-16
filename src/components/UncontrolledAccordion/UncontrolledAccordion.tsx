import React, {useReducer} from "react";
import {reducer, TOGGLE_STATE} from "./reducer";

export type UncontrolledAccordionPropsType = {
    titleValue: string,
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    // let [state, setState] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    const toggle = () => {
        dispatch({type: TOGGLE_STATE})
    }

    return <div>
        <AccordionTitle title={props.titleValue} toggle={toggle}/>
        {state.collapsed && <AccordionBody/>}
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