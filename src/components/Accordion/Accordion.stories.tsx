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
    items: [{value: "1", title: "Alex"},{value: "2", title: "Sofi"},{value: "3", title: "Pasha"},{value: "4", title: "Oleg"},],
    onChange: () => {},
};
export const UncollapsedAccordion = ChangeAccordionTemplate.bind({});
UncollapsedAccordion.args = {
    collapsed: false,
    titleValue: 'Menu',
    items: [{value: "1", title: "Alex"},{value: "2", title: "Sofi"},{value: "3", title: "Pasha"},{value: "4", title: "Oleg"},],
    onChange: () => {},
};

export const OnClickChangeAccordion = (args: AccordionPropsType) => {
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    const onClickCallBackHandler = (value: string) => {
        alert(value)
    }

    return <Accordion
        onClickCallBack={onClickCallBackHandler}
        items={[{value: "1", title: "Alex"},{value: "2", title: "Sofi"},{value: "3", title: "Pasha"},{value: "4", title: "Oleg"},]}
        collapsed={accordionCollapsed}
        titleValue={'Stats'}
        onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}
    />
}