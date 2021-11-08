import React from 'react';
import s from './Select.module.css';

type ItemType = {
    title: string
    value: string
}

export type SelectPropsType = {
    value: any
    onClick: () => void
    items: ItemType[]
    selectCollapsed: boolean
}

export const Select = (props: SelectPropsType) => {


    const mappedItems = props.items.map(i => {
            return (
                <div key={i.value}>{i.title}</div>
            )
        })


    return (
        <div>
            <div onClick={props.onClick}>{props.value}</div>
            {props.selectCollapsed && mappedItems}
        </div>

    );
}