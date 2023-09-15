import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography, Button, Divider, Paper, InputBase, IconButton, Input, InputLabel } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { userNavigate } from 'react-router-dom'
import { Sidebar, Videos } from '../components';

import { fetchFromApi } from '../utils/fetchFromApi';


const Feed = () => {
    const [videos, setVideos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('New')
    useEffect(() => {
        fetchFromApi(`search?part=snippet&q={selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory])

    return (
        <Stack
            sx={{
                flexDirection: {
                    sx: 'column',
                    md: 'row',
                },
            }}>
            <Box sx={{
                height: { sx: 'auto', md: '92vh' },
                borderRight: '1px solid grey',
                px: { sx: 0, md: 2 },
            }}>
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <Typography
                    className="sidebar__title"
                    variant="subtitle2"
                    sx={{

                        color: '#fff',
                    }}
                >copyrights 2020 and Now </Typography>
            </Box>
            <Box
                p={2}

                sx={{
                    height: { sx: 'auto', md: '92vh' },
                    overflowY: 'auto',
                    flex: 2,
                    backgroundColor: '#000',
                    color: '#fff',
                }}>
                <Typography variant='h4'
                    fontWeight='bold'
                    mb={2}
                    sx={{
                        color: '#fff',
                    }}
                >
                    {selectedCategory}  <span style={{
                        color: 'red',
                    }}>
                        videos
                    </span>
                </Typography>

                <Videos videos={videos} />
            </Box>

        </Stack >
    )

}

export default Feed