import { ArrowDropDown, CheckBox, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, People, Settings, } from '@mui/icons-material'
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './MailList.css'
import { IconButton } from '@mui/material'
import React from 'react'
import Section from './Section';
import EmailRow from './EmailRow';

const MailList = () => {
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <CheckBox />
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <KeyboardHide />
                    </IconButton>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon={Inbox} title='Primary' color='red' selected />
                <Section Icon={People} title='Social' color='#1A73E8' />
                <Section Icon={LocalOffer} title='Promotions' color='green' />
            </div>
            <div className="emailList__list">
                <EmailRow
                    title='The Nokia 3310 '
                    subject='Hey, Welcome back'
                    description='This is a test'
                    time='10pm'
                />
            </div>
        </div>
    )
}

export default MailList