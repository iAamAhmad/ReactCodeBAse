import React from 'react';

import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'



import { logo } from '../utils/constants'
import SearchBar from './SearchBar'




const Navbar = () => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            px={1}
            pt={1}

            sx={{
                position: 'sticky', top: 0,
                backgroundColor: '#000',
                color: '#fff',
                justifyContent: 'space-between',
            }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="logo" style={{ height: '40px' }} />
            </Link>
            <SearchBar />
        </Stack>
    )

}

export default Navbar