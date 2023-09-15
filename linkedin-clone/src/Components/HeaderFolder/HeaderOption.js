import React from 'react'
import './headerOption.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function HeaderOption({ avatar, title, Icon, onClick }) {
    const user = useSelector(selectUser);
    return (
        <div
            onClick={onClick}
            className="header__option">
            {Icon && <Icon className="header__optionIcon" />}
            {avatar && (<Avatar className="header__optionIcon"

                src={user?.photoUrl} >{user?.email[0]}</Avatar>)}
            <h3 className="header__optionTitle">{title}</h3>
        </div>
    )
}

export default HeaderOption