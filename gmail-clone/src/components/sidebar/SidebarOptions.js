import React from 'react'
import './SidebarOption.css'

const SidebarOptions = ({ Icon, title, number, selected }) => {
    return (
        <div className={`sidebar__option ${selected && "sidebar__active"}`}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOptions