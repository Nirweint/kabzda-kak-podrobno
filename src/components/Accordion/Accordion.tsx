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
export const Accordion = React.memo(function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClickCallBack={props.onClickCallBack}/>}
    </div>
})

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

const AccordionTitle = React.memo(function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("Title rendered")
    return <h3 onClick={props.onChange}>{props.title}</h3>;
})

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClickCallBack: (value: string) => void
}

const AccordionBody = React.memo( function AccordionBody(props: AccordionBodyPropsType) {
    console.log("Body rendered")

    const onClickHandler = (value: string) => {
        props.onClickCallBack(value)
    }

    return <ul>
        {props.items.map(i => {
            return (
                <li onClick={() => {
                    onClickHandler(i.value)
                }} key={i.value}>{i.title}</li> // using index in keys is bad practice!!! use id instead.
            )
        })}
    </ul>;
})