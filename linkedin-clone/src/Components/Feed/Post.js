import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import InputOption from './InputOption'
import './Post.css'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div
            ref={ref}
            className="post">
            <div className="post__header">
                <Avatar
                    src={photoUrl}
                >{name[0]}</Avatar>
                <div className="post__info">
                    <h2> {name} </h2>
                    <p> {description} </p>
                </div>
            </div>
            <div className="post__body">
                <p> {message} </p>
                <img src={photoUrl} alt="" />
            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpIcon} title="Like" color="gray" />
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
                <InputOption Icon={ShareOutlinedIcon} title="Send" color="gray" />
            </div>
        </div>
    )
})
export default Post