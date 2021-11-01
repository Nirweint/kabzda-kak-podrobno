import React, {useState} from "react";

export type UncontrolledAccordionPropsType = {
    titleValue: string,
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    let [state, setState] = useState(false)

    const toggle = () => {
        setState(!state)
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