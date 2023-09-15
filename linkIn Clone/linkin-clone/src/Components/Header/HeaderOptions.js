import React from 'react'
import "./headerOption.css"
import { Avatar } from '@mui/material'

function HeaderOptions({ avatar, Icon, title }) {
    return (
        <div className="headerOption">
            {Icon && <Icon className='headerOption_Icon' />}
            {avatar && <Avatar className='headerOption_Icon' src={avatar} alt='avatar' />}
            <h3 className='headerOption_title'>{title}</h3>
        </div>
    )
}

export { HeaderOptions }