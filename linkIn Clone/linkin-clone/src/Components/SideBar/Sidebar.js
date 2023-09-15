import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="span_hash">#</span>
            <p>{topic}</p>
        </div>


    )
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img className='image_sidebar' src="https://images.unsplash.com/photo-1528465424850-54d22f092f9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                <Avatar className='avatar_sidebar' />
                <h2 className='title_sidebar'> I am Khan</h2>
                <h4 className='description_sidebar'>khan.email@gamil.com</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p >Who viewed you</p>
                    <p className='sidebar_number'>1.2k views </p>
                </div>
                <div className="sidebar_stat">
                    <p >Views on post</p>
                    <p className='sidebar_number'>1.2k views</p>
                </div>
            </div>
            <div className="button_button">
                <p className='button_button_text'>Recent</p>
                {recentItem('react')}
                {recentItem('reactNative')}
                {recentItem('reactDevelopment')}
                {recentItem('reactFramework')}
                {recentItem('reactDeveloper')}
            </div>

        </div>
    )
}

export { Sidebar }