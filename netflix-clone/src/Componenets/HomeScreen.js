import React from 'react'
import Banner from './Banner'
import './HomeScreen.css'
import Nav from './Nav'

const HomeScreen = () => {
    return (
        <div className="home__screen">
            < Nav />
            <Banner />
        </div>


    )
}

export default HomeScreen