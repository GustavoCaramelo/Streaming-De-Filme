'use client';

import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Filmes', path: '/filmes' },
    { label: 'Minha Lista', path: '/minha-lista' },
  ];

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          MyFlix
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.path} passHref>
              <Button sx={{ color: 'white' }}>{link.label}</Button>
            </Link>
          ))}
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton onClick={handleMenuOpen} color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            {navLinks.map((link) => (
              <MenuItem key={link.label} onClick={handleMenuClose}>
                <Link href={link.path} passHref style={{ textDecoration: 'none', color: 'inherit' }}>
                  {link.label}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
