/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Header from './Components/HeaderFolder/Header'
import SideBar from './Components/sidebar/SideBar'
import './App.css';
import Feed from './Components/Feed/Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Components/Login/Login';
import { auth } from './firebase';
import Widgets from './Components/Widgets/Widgets';
function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    photoUrl: userAuth.photoURL,
                }));
            } else {
                dispatch(logout());
            }
        });
    }, []);



    return (
        <div className="app">
            <Header />
            {!user ? (
                <Login />
            ) : (
                <div className="app__body">
                    <SideBar />
                    <Feed />
                    <Widgets />
                </div>
            )}
            {/* this is second part of ternary operator */}
        </div>


    )
}

export default App