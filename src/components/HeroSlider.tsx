'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import { Box, Typography, Button, Link } from '@mui/material';
import { Movie } from '@/lib/api';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    <Box sx={{ width: '100%', height: '80vh', position: 'relative', overflow: 'hidden', mb: 4 }}>
      <Slider {...settings}>
        {movies.map((movie) => (
          <Box
            key={movie.id}
            sx={{
              position: 'relative',
              width: '100%',
              height: '70vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              px: 8,
              boxSizing: 'border-box',
            }}
          >
            {/* BACKGROUND IMAGE */}
            <Image
              src={movie.movie_banner}
              alt={movie.title}
              fill
              style={{ objectFit: 'cover', zIndex: -1, opacity: 0.6 }}
              priority
            />

            {/* OVERLAY TEXT */}
            <Box sx={{ maxWidth: '600px', color: 'white', zIndex: 1 }}>
              <Typography variant="h2" fontWeight="bold" sx={{ color: 'black', marginTop: '4%' }}>
                {movie.title}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, color: 'black' }}>
                {movie.description.slice(0, 140)}...
              </Typography>
              <Box display="flex" gap={2} mt={3}>
                <Link href={`/filme/${movie.id}`}>
                  <Button variant="contained">Assistir</Button>
                </Link>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
export default HeroSlider;
