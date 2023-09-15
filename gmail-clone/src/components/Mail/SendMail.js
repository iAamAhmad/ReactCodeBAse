import { Close, CloseFullscreen } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import React from 'react'
import './SendMail.css'

const SendMail = () => {
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <IconButton>
                    <Close />
                </IconButton>

            </div>

            <form>
                <input type="text" className="sendMail__one" placeholder=" Subject" />
                <input type="text" className="sendMail__two" placeholder=" Body" />
                <input type="text" className="sendMail__submit" value="Send" />
            </form>
            <div className="sendMailOptions">
                <Button
                    variant='contained'
                    color='primary'


                    className='sendMail__send'>Send</Button>
            </div>
        </div>

    )
}

export default SendMail