import React, { useState, useEffect } from 'react';
import { userNavigate } from 'react-router-dom'
import { Paper, IconButton, InputBase, Button, Divider, Input, InputLabel } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
        <Paper component="form"
            onSubmit={() => { }}
            sx={{
                pl: '2',
                width: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: 'none',
                borderRadius: '20px',
                border: '1px solid #fff',
                mr: { sm: 5 },
            }}>
            <InputBase
                sx={{ ml: 1 }}
                placeholder="Search..."
                value=''
                onChange={() => { }}
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit"
                sx={{ p: '10px', color: 'red', }}
                aria-label="search">
                <SearchIcon />
            </IconButton>
            {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <Button color="primary" variant="contained" sx={{ p: '10px 16px' }}>Search</Button> */}
        </Paper>

    )
}

export default SearchBar