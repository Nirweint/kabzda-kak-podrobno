import React from 'react';
import {ComponentMeta} from '@storybook/react';

import {UncontrolledAccordion, UncontrolledAccordionPropsType} from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion stories',
    component: UncontrolledAccordion,
} as ComponentMeta<typeof UncontrolledAccordion>;


export const CollapsedUncontrolledAccordion = (args: UncontrolledAccordionPropsType) => {
    return <UncontrolledAccordion titleValue={"Menu"}/>
}