import React from 'react';
import ReviewList from './review-list';
import ReviewForm from './review-form';

let e = React.createElement;

export default class Review extends React.Component {
    render() {
        return e('div',
            {class: 'card w-75'},
            e('div',
                {class: 'card-header bg-siccess text-white'},
                'Username and Time'),
                e('div', 
                {class: 'card-body'},
                'Review content'),
                e('div',
                {class: 'card-footer'},
                e(ReviewList))
        )
    }
}