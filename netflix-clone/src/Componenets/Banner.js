import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from '../Request'
import instance from '../axios';


const Banner = () => {
    const [movie, setMovie] = useState([]);
    function getData() {
        instance.get(requests.fetchNetflixOriginals)
            .then(response => {
                const movieData = response.data;
                setMovie(movieData);
            });
    }
    useEffect(() => {
        getData();
    }, []);
    console.log(movie);

    function truncate(string, n) {
        return string?.length > n
            ? string.substr(0, n - 1) + '...'
            : string
    }
    return (
        <header
            className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmbd.org/t/p/original/w500/${movie?.backdrop_path
                    }")`,
                backgroundPosition: 'center center'

            }}>
            <div className="banner__contents">
                <h1 className="title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className='btn__banner'>Play</button>
                    <button className='btn__banner'>My Items</button>
                </div>
                <h1 className="banner__description">
                    {truncate(`This is description for Banner here`, 120)}
                </h1>
            </div>
            <div className="fade__bottom" />
        </header>
    )
}

export default Banner