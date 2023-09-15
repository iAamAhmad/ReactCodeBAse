import React, { useEffect, useState } from 'react'
import './Nav.css'

const Nav = () => {
    const [show, handleShow] = useState(false);
    const transitionNavBar = () => {
        if (window.screenY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => {
            window.removeEventListener('scroll', transitionNavBar);
        }
    }, [])
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__content">
                <img
                    className='logo__img'
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

                <img
                    className='avatar__img'
                    src="https://www.freeiconspng.com/uploads/blue-smiley-face-png-31.png" alt="" />
            </div>

        </div>
    )
}

export default Nav