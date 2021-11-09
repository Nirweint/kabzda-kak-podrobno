import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';
import {NewSelect, NewSelectPropsType} from "./NewSelect";

export default {
    title: 'NewSelect stories',
    component: NewSelect,
} as ComponentMeta<typeof NewSelect>;


export const WithValue = (args: NewSelectPropsType) => {

    const [value, setValue] = useState('1')

    return (
            <NewSelect
                onChange={setValue}
                value={value}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Moscow"},
                    {value: "3", title: "Kiev"},
                ]}
            />
    )
}

export const DontHaveValue = (args: NewSelectPropsType) => {

    const [value, setValue] = useState(null)

    return (
        <NewSelect
            onChange={setValue}
            value={value}
            items={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Moscow"},
                {value: "3", title: "Kiev"},
            ]}
        />
    )
}