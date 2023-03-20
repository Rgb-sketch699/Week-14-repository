import React from 'react';
import Movielist from './movie-list';
import ReviewList from './review-list';
import Review from './review';
import ReviewForm from './review-form';
import MovieList from './movie-list';

export default class Feed extends React.Component {
    render() {
        return(
        <div>
            <h1>Fanbango: Where fans rate the latest box office bangers!</h1>
            <Review />
            <ReviewList />
            <ReviewForm />
            <MovieList />
        </div>
        );
    }
}