import React from 'react';
import './SingleCard.css'
const SingleCard = ({movie, handleWatchTime}) => {
    return (
        <div className='Single-card'>
            <img src={movie.poster} alt="" />
            <h5>{movie.movieName}</h5>
            <p>{movie.description}</p>
            <div className='d-flex justify-content-around'>
                <p>WatchTime: {movie.watchTime}</p>
                <p>Ratings: {movie.imdbRating}</p>
            </div>
            <button onClick={() =>handleWatchTime(movie.watchTime)} className='btn btn-info w-75'>Book Now</button>
        </div>
    );
};

export default SingleCard;