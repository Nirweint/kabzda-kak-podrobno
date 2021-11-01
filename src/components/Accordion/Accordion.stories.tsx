import React, {useState} from 'react';
import {ComponentMeta, Story} from '@storybook/react';

import {Accordion, AccordionPropsType} from "./Accordion";

export default {
    title: 'Accordion stories',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const ChangeAccordionTemplate: Story<AccordionPropsType> = (args) => <Accordion  {...args} />;

export const CollapsedAccordion = ChangeAccordionTemplate.bind({});
CollapsedAccordion.args = {
    collapsed: true,
    titleValue: 'Menu',
    onChange: () => {
    },
};
export const UncollapsedAccordion = ChangeAccordionTemplate.bind({});
UncollapsedAccordion.args = {
    collapsed: false,
    titleValue: 'Menu',
    onChange: () => {
    },
};

export const OnClickChangeAccordion = (args: AccordionPropsType) => {
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    return <Accordion
        collapsed={accordionCollapsed}
        titleValue={'Stats'}
        onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}
    />
}