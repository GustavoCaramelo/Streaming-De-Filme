'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface MovieListProps {
  title: string;
  movies: { id: number; title: string; image: string }[];
}

export default function MovieList({ title, movies }: MovieListProps) {
  return (
    <Box sx={{ padding: '1rem' }}>
      <Typography variant="h6" color="white" sx={{ marginBottom: '0.5rem' }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2 }}>
        {movies.map((movie) => (
          <Box
            key={movie.id}
            sx={{
              minWidth: 220,
              height: 255,
              position: 'relative',
              borderRadius: 1,
              overflow: 'hidden',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <Image
              src={movie.image}
              alt={movie.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
