import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentMeta, Story} from '@storybook/react';

export default {
    title: 'UncontrolledInput',
    // component: input,
}
// as ComponentMeta<typeof input>;

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }

    return (<>
        <input onChange={onChangeValueHandler}/>
        - {value}
    </>)
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickSave = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return (<>
        <input ref={inputRef}/>
        <button onClick={onClickSave}>save</button>
        - actual value: {value}
    </>)
}
export const ControlledInputWithFixedValue = () => <input value={'i dont like storybook'}/>

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChangeHandler}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type={'checkbox'} checked={parentValue} onChange={onChangeHandler}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("2")

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChangeHandler}>
        <option value="">none</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
    </select>
}