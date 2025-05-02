'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import { Box, Typography, Button } from '@mui/material';
import { Movie } from '@/lib/api';

interface HeroSliderProps {
  movies: Movie[];
}

const HeroSlider = ({ movies }: HeroSliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Slider {...settings}>
        {movies.map((movie) => (
          <Box
            key={movie.id}
            sx={{
              height: '80vh',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: '2rem',
              backgroundColor: 'black',
            }}
          >
            <Image
              src={movie.image}
              alt={movie.title}
              fill
              style={{ objectFit: 'cover', zIndex: -1, opacity: 0.7 }}
              priority
            />
            <Box sx={{ maxWidth: '600px', color: 'white', zIndex: 1 }}>
              <Typography variant="h2" fontWeight="bold">
                {movie.title}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                {movie.description.slice(0, 140)}...
              </Typography>
              <Box display="flex" gap={2} mt={3}>
                <Button variant="contained">Assistir</Button>
                <Button variant="outlined" color="inherit">
                  Mais informações
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSlider;
