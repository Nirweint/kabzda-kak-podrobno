import React from "react";

type AccordionPropsType = {
    titleValue: string,
    onClick: (value: boolean) => void
    value: boolean
}
export function Accordion(props: AccordionPropsType) {

        return <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} value={!props.value}/>
            { !props.value && <AccordionBody/> }
        </div>
    }

type AccordionTitlePropsType = {
    title: string
    onClick: (value: boolean) => void
    value: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickToggleCollapsed = () => {
        props.onClick(props.value)
    }


    return <h3 onClick={onClickToggleCollapsed}>{props.title}</h3>;
}

function AccordionBody() {

    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>;
}