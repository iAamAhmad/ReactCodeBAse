import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import './sidebar.css'

function SideBar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">

            <div className="sidebar__top">
                <img src="https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg" alt="" />
                <Avatar
                    src={user.photoUrl}
                    className="sidebar__avatar" > {user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who Listened You</p>
                    <p className="sidebar__statNumber">123545</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on posts</p>
                    <p className="sidebar__statNumber">1234567</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactJs')}
                {recentItem('programming')}
                {recentItem('softwareEngineering')}
                {recentItem('design')}
                {recentItem('developer')}
                {recentItem('webDevelopment')}
                {recentItem('softwareDevelopment')}
                {recentItem('softwareDeveloper')}
                {recentItem('softwareEngineer')}


            </div>

        </div>
    )
}

export default SideBar