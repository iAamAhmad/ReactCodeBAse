import { ArrowBack, CheckCircle, Delete, ErrorOutline, ExitToApp, LabelImportant, MoreVert, MoreVertTwoTone, MoveToInbox, Print, UnfoldMore, WatchLater } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import './Mail.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Mail = () => {
    const navigate = useNavigate();
    return (
        <div className="mail">
            <div className="mails__tools">
                <div className="mailTools__left">
                    <IconButton onClick={() => navigate('/')}>
                        <ArrowBack />
                    </IconButton>
                    <IconButton>
                        <MoveToInbox />
                    </IconButton>
                    <IconButton>
                        <ErrorOutline />
                    </IconButton>
                    <IconButton>
                        <Delete />
                    </IconButton>
                    <IconButton>
                        <WatchLater />
                    </IconButton>
                    <IconButton>
                        <CheckCircle />
                    </IconButton>
                    <IconButton>
                        <LabelImportant />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="mailTools__right">
                    <IconButton>
                        <UnfoldMore />
                    </IconButton>
                    <IconButton>
                        <Print />
                    </IconButton>
                    <IconButton>
                        <ExitToApp />
                    </IconButton>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>Important</h2>
                    <LabelImportant className='mail__important' />
                    <p>Hello, i am intro</p>
                    <p className='mail__time'>10pm </p>
                </div>
                <div className="mail__message">
                    <p>This is Subject of email You have sent earlier</p>
                </div>

            </div>
        </div>

    )
}

export default Mail



