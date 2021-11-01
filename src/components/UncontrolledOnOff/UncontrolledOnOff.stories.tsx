import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';

import {UncontrolledOnOff, UncontrolledOnOffPropsType} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnOff,
} as ComponentMeta<typeof UncontrolledOnOff>;


export const CollapsedUncontrolledAccordion = (args: UncontrolledOnOffPropsType) => {
    const [on, setOn] = useState<boolean>(true)
    return <UncontrolledOnOff onChange={() => {setOn(!on)}}/>
}