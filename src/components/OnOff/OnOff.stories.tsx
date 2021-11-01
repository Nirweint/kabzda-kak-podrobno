import React, {useState} from 'react';
import {ComponentMeta, Story} from '@storybook/react';

import {OnOff, OnOffPropsType} from "./OnOff";

export default {
    title: 'OnOff stories',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;

const ToggleTemplate: Story<OnOffPropsType> = (args) => <OnOff  {...args} />;

export const OnToggle = ToggleTemplate.bind({});
OnToggle.args = {
    value: true,
    onClick: value => {},
}
export const OffToggle = ToggleTemplate.bind({});
OffToggle.args = {
    value: false,
    onClick: value => {},
}

export const OnClickToggle = (args: OnOffPropsType) => {
    let [on, setOn] = useState<boolean>(true)

    return <OnOff value={on} onClick={setOn}/>
}