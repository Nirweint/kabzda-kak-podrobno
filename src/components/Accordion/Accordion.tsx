import React from "react";

type ItemType = {
    title: string
    value: string
}

export type AccordionPropsType = {
    titleValue: string,
    onChange: () => void
    collapsed: boolean
    items: ItemType[]
    onClickCallBack: (value: string) => void

}
export function Accordion(props: AccordionPropsType) {

        return <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            { !props.collapsed && <AccordionBody items={props.items} onClickCallBack={props.onClickCallBack}/> }
        </div>
    }

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onChange}>{props.title}</h3>;
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClickCallBack: (value: string) => void
}

function AccordionBody(props: AccordionBodyPropsType) {

    const onClickHandler = (value: string) => {
        props.onClickCallBack(value)
    }

    return <ul>
        { props.items.map(i => {
            return (
                <li onClick={() => {onClickHandler(i.value)}} key={i.value}>{i.title}</li> // using index in keys is bad practice!!! use id instead.
            )
        })}
    </ul>;
}