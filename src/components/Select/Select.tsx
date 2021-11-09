import React, {useState} from 'react';
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

    const [pickedItem, setPickedItem] = useState('')

    const onClickHandler = (title: string) => {
        setPickedItem(title)
        props.onClick()

    }

    const mappedItems = <div className={s.items}>
        {props.items.map(i => {
            return (
                <div className={s.item} key={i.value} onClick={() => {onClickHandler(i.title)}}>{i.title}</div>
            )
        })}
    </div>

    const selectFinalStyle = `${s.select} ${props.selectCollapsed ? s.collapsed : ''}`;


    return (
        <div className={s.selectWrapper}>
            <div className={selectFinalStyle} onClick={props.onClick}>{pickedItem ? pickedItem : "Users"}</div>
            {props.selectCollapsed && mappedItems}
        </div>

    );
}