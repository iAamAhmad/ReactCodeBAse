import { ChatBubble, Search } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import './ChatScreen.css'

const ChatScreen = () => {
    return (
        <div className="chats">
            <div className="chat__header">
                <Avatar className='chat__avatar' />
                <div className="chat__search">
                    <Search />
                    <input placeholder='Search' />
                </div>
                <ChatBubble className='chat__bubble' />
            </div>
            <div className="chat__posts">

            </div>
        </div>

    )
}

export default ChatScreen