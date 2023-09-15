import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import { logout } from '../../features/userSlice';
function Header() {

    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };


    return (
        <div className="header">
            <div className="left__header">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                {/* search bar */}
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>

            </div>

            <div className="right__header">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsNoneIcon} title="Notifications" />
                <HeaderOption
                    onClick={logoutOfApp}
                    avatar title="Me" />

            </div>

        </div>
    )
}

export default Header