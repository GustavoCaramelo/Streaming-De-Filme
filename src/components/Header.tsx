'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box, Button, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const navLinks = ['Início', 'Filmes', 'Séries', 'Minha Lista'];

    return (
        <AppBar position="static" color="primary">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" component="div">
                    MyFlix
                </Typography>

                {/* Desktop Menu */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                    {navLinks.map((link) => (
                        <Button key={link} sx={{ color: 'white' }}>
                            {link}
                        </Button>
                    ))}
                </Box>

                {/* Mobile Menu */}
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton onClick={handleMenuOpen} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        {navLinks.map((link) => (
                            <MenuItem key={link} onClick={handleMenuClose}>
                                {link}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
