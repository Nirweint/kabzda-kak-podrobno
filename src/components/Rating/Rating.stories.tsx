import React, {useState} from 'react';
import {ComponentMeta, Story} from '@storybook/react';

import {Rating, RatingPropsType, RatingValueType} from './Rating';

export default {
    title: 'Rating stories',
    component: Rating,
} as ComponentMeta<typeof Rating>;

const ChangeRatingTemplate: Story<RatingPropsType> = (args) => <Rating  {...args} />;

export const EmptyRating = ChangeRatingTemplate.bind({});
EmptyRating.args = {
    value: 0,
    onClick: value => {},
};

export const Rating1 = ChangeRatingTemplate.bind({});
Rating1.args = {
    value: 1,
    onClick: value => {},
};
export const Rating2 = ChangeRatingTemplate.bind({});
Rating2.args = {
    value: 2,
    onClick: value => {},
};
export const Rating3 = ChangeRatingTemplate.bind({});
Rating3.args = {
    value: 3,
    onClick: value => {},
};
export const Rating4 = ChangeRatingTemplate.bind({});
Rating4.args = {
    value: 4,
    onClick: value => {},
};
export const Rating5 = ChangeRatingTemplate.bind({});
Rating5.args = {
    value: 5,
    onClick: value => {},
};
export const OnClickChangeRating = (args: RatingPropsType) => {
    const[rating, setRating] = useState<RatingValueType>(0)
    return <Rating  value={rating} onClick={setRating} />
}