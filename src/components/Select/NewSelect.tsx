import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './NewSelect.module.css';

type ItemType = {
    title: string
    value: string
}

export type NewSelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const NewSelect = React.memo( (props: NewSelectPropsType) => {
    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredElementValue)

    const toggleItems = () => {
        setActive(!active)
    }
    const itemClicked = (value: string) => {
        props.onChange(value)
        toggleItems()
    }
    const onMouseEnterHandler = (value: string) => {
        setHoveredElementValue(value)
    }

    const onArrowPressChangeHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const nextElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (nextElement) {
                        props.onChange(nextElement.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }

    return (
        <>
            <div className={s.select} onKeyUp={onArrowPressChangeHandler} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active && <div className={s.items}>
                    {props.items.map(i => {
                        return (
                            <div
                                onMouseEnter={() => {
                                    onMouseEnterHandler(i.value)
                                }}
                                key={i.value}
                                className={s.item + " " + (hoveredItem === i ? s.selected : '')}
                                onClick={() => {
                                    itemClicked(i.value)
                                }}
                            >
                                {i.title}</div>
                        )
                    })}
				</div>}
            </div>
        </>
    );
})