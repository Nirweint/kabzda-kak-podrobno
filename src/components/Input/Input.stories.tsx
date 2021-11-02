import React, {ChangeEvent, useState} from 'react';
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

    const addValueHandler = () => {
        setValue(value)
    }
    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }

    return (<>
        <input onChange={onChangeValueHandler}/>
        <button onClick={addValueHandler}>save</button>
        - actual value: {value}
    </>)
}


export const ControlledInputWithFixedValue = () => <input value={'i dont like storybook'}/>