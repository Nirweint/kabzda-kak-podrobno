import React, { useState } from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string,
}
// Accordion и ACcordion2 одинаковы по результату!!!
export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    let [state, setState] = useState(false)

    const toggle = () => {
        setState(!state)
    }

    return <div>
        <AccordionTitle title={props.titleValue}/>
        <button onClick={() => {toggle()}}>Toggle</button>
        { state && <AccordionBody/> }
    </div>
}

type UncontrolledAccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    return <h3>{props.title}</h3>;
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>;
}