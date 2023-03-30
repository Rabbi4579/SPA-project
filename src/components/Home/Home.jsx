import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import './Home.css'
const Home = () => {
    const [movies, setMovies] = useState([])
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setMovies(data))
    },[])


    const [watchTime, setWatchTime] = useState('')
    const handleWatchTime = (time) =>{
        const previousWatchTime = JSON.parse(localStorage.getItem('watchTime'));
        if(previousWatchTime){
            const sum = previousWatchTime + time;
            localStorage.setItem('watchTime', sum)
            setWatchTime(sum)
        }
        else{
            localStorage.setItem('watchTime', time)
            setWatchTime(time)
        }
    }

    const [time, setTime] = useState('')
    useEffect(() =>{
        const getWatchTimeLocal = localStorage.getItem('watchTime') 
        setTime(getWatchTimeLocal)
    },[watchTime])



    return (
        <div>
            <div className="movie-container">
                <div className="movie-card-container ">
                    {
                        movies.map(movie => <SingleCard movie ={movie} handleWatchTime={handleWatchTime}></SingleCard>)
                    }
                </div>
                <div className="cart-container card">
                    <h1>My cart</h1>
                    <input type="text" value={time} disabled />
                    <div className='mt-4'>
                        <button className='btn btn-primary px-3 me-2'>15</button>
                        <button className='btn btn-info px-3 me-2'>15</button>
                        <button className='btn btn-secondary px-3'>15</button>
                    </div>
                    <input className='mt-4' type="text" value={0} disabled />
                </div>
            </div>
        </div>
    );
};

export default Home;