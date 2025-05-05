'use client';

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  addToMyList,
  removeFromMyList,
  isInMyList
} from '@/utils/myList';

interface Movie {
  id: string;
  title: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  image: string;
  rt_score: number;
}

const MovieList = ({ movies }: { movies: Movie[] }) => {
  const [myList, setMyList] = useState<string[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('myList') || '[]');
    setMyList(stored);
  }, []);

  const toggleList = (id: string) => {
    const updatedList = isInMyList(id)
      ? removeFromMyList(id)
      : addToMyList(id);

    setMyList(updatedList);
  };

  return (
    <Grid container spacing={4} sx={{ paddingLeft: '10%' }}>
      {movies.map((movie) => (
        <Box
          key={movie.id}
          sx={{
            width: {
              xs: '100%',
              md: '20%',
            },
          }}
        >
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Link href={`/filme/${movie.id}`}>
              <CardMedia
                component="img"
                height="400"
                image={movie.image}
                alt={movie.title}
              />
            </Link>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6">{movie.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {movie.release_date} | Diretor: {movie.director}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Score: {movie.rt_score}
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                onClick={() => toggleList(movie.id)}
              >
                {myList.includes(movie.id)
                  ? 'Remover da Lista'
                  : 'Adicionar à Lista'}
              </Button>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Grid>
  );
};

export default MovieList;