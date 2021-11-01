import React from 'react';
import {ComponentMeta} from '@storybook/react';

import {UncontrolledRating, UncontrolledRatingPropsType} from "./UncontrolledRating";

export default {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating,
} as ComponentMeta<typeof UncontrolledRating>;


export const UncontrolledRatingToggle = (args: UncontrolledRatingPropsType) => {
    return <UncontrolledRating />
}