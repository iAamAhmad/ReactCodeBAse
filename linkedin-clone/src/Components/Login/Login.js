import React, { useState } from 'react'
import './Login.css'
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const disPatch = useDispatch();

    const register = () => {
        if (!name) {
            return alert('Please enter a full name!');
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        disPatch(login({
                            //this login is being imported from user slice redux for using it here a sa gun
                            email: authUser.user.email,
                            uid: authUser.user.uid,
                            displayName: name,
                            photoUrl: profilePic,
                        })
                        );
                    });


            }).catch((error) => alert(error.message));
    }

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((authUser) => {
                disPatch(login({
                    email: authUser.user.email,
                    uid: authUser.user.uid,
                    displayName: authUser.user.displayName,
                    photoURL: authUser.user.profilePic,
                })
                );
            }).catch((error) => alert(error.message));
    }



    return (
        <div className="login">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="" />
            <form action="">
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text"
                    placeholder="Full name (required if registering)" />
                <input
                    value={profilePic}
                    onChange={e => setProfilePic(e.target.value)}
                    type="text"
                    placeholder="Profile pic URL (optional)" />
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email" />
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password" />
                <button type="submit" onClick={loginToApp}>Sign In</button>
                <p>Not a member?
                    <span className="login__register" onClick={register}>Register Now</span></p>

            </form>
        </div>
    );
}

export default Login