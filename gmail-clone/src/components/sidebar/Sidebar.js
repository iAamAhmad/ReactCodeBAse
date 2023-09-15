import { Button, IconButton } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOptions from './SidebarOptions';
import StarIcon from '@mui/icons-material/Star';
import SnoozeIcon from '@mui/icons-material/Snooze';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import MoreIcon from '@mui/icons-material/More';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Button
                className="sidebar__compose"
                startIcon={<AddIcon fontSize='large'
                />}
            >
                COMPOSE
            </Button>
            <SidebarOptions Icon={InboxIcon} title='Inbox' number={54} selected={true} />
            <SidebarOptions Icon={StarIcon} title='Starred' number={54} />
            <SidebarOptions Icon={SnoozeIcon} title='Snoozed' number={54} />
            <SidebarOptions Icon={LabelImportantIcon} title='Important' number={54} />
            <SidebarOptions Icon={SendIcon} title='Sent' number={54} />
            <SidebarOptions Icon={DraftsIcon} title='Drafts' number={54} />
            <SidebarOptions Icon={MoreIcon} title='More' number={54} />
            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>

                </div>
            </div>

        </div >
    )
}

export default Sidebar