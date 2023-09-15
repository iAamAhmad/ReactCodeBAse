import React from 'react'
import { Stack } from '@mui/system'
import { categories } from '../utils/constants'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Stack
            direction='row'
            sx={{
                overflowY: 'auto',
                height: { sx: 'auto', md: '95%' },
                flexDirection: { sx: 'row', md: 'column' },
            }}>
            {categories.map((category) => (
                <button
                    onClick={() => setSelectedCategory(category.name)}
                    className='category-btn'
                    style={{
                        background: category.name === selectedCategory && '#Fc1503',
                        color: 'white',
                    }}
                    key={category.name}
                >
                    <span
                        style={{
                            color: category.name === selectedCategory ? '#fff' : 'red',
                            marginRight: '15px',
                        }}
                    >{category.icon}</span>
                    <span
                        opacity={category.name === selectedCategory ? '1' : '0.8'}
                    >{category.name}</span>

                </button>
            ))}
        </ Stack>
    )
}

export default Sidebar