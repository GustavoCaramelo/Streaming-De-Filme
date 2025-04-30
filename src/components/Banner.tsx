'use client'

import { Box, Typography, Button } from '@mui/material'

export default function Banner() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '60vh',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '2rem',
        backgroundImage: `url('https://images.unsplash.com/photo-1581905764498-05559cf8f145?auto=format&fit=crop&w=1600&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Stranger Things
      </Typography>
      <Typography variant="body1" maxWidth="sm" mb={2}>
        Um grupo de crianças enfrenta perigos sobrenaturais em uma cidade cheia de mistérios.
      </Typography>
      <Box>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          Assistir
        </Button>
        <Button variant="outlined" color="inherit">
          Mais informações
        </Button>
      </Box>
    </Box>
  )
}
