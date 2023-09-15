import React from 'react'
import '../styles/Header.css'
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon
                    className='header__icon'
                    fontSize='large' />
            </IconButton>
            <img className='header__logo'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD18ZZnFcUrIVRT6dA1UKnfJ61CLT-650FChzmD-Ab&s'
                alt='logo'
            />
            <IconButton>
                <ForumIcon
                    className='header__icon'
                    fontSize='large' />
            </IconButton>
        </div>
    )
}

export default Header