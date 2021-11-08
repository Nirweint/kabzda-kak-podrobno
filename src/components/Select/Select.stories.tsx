import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';
import {Select, SelectPropsType} from "./Select";

export default {
    title: 'Select stories',
    component: Select,
} as ComponentMeta<typeof Select>;


export const OnClickChangeSelect = (args: SelectPropsType) => {

    const [selectCollapsed, setSelectCollapsed] = useState<boolean>(false)


    return <Select
        selectCollapsed={selectCollapsed}
        value={'Users'}
        onClick={() => {setSelectCollapsed(!selectCollapsed)}}
        items={[{value: "1", title: "Alex"},{value: "2", title: "Sofi"},{value: "3", title: "Pasha"},{value: "4", title: "Oleg"},]}
    />
}