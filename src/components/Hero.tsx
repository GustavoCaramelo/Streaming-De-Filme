'use client';

import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { Movie } from '@/lib/api';

interface HeroProps {
  movie: Movie;
}

const Hero = ({ movie }: HeroProps) => {
  return (
    <Box
      position="relative"
      height="80vh"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      padding="2rem"
      sx={{
        backgroundColor: 'black',
      }}
    >
      <Image
        src={movie.image}
        alt={movie.title}
        fill
        style={{ objectFit: 'cover', zIndex: -1 }}
        priority
      />

      <Box maxWidth="600px" sx={{ zIndex: 1 }}>
        <Typography variant="h2" fontWeight="bold" color="white" gutterBottom>
          {movie.title}
        </Typography>
        <Typography variant="body1" color="white" gutterBottom>
          {movie.description.slice(0, 150)}...
        </Typography>
        <Box display="flex" gap={2} mt={2}>
          <Button variant="contained" color="primary">
            Assistir
          </Button>
          <Button variant="outlined" color="inherit">
            Mais informações
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
