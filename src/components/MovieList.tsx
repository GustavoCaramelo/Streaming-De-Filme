'use client';

import { Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

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

          <Card sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="400"
              image={movie.image}
              alt={movie.title}
            />
            <CardContent>
              <Typography variant="h6">{movie.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {movie.release_date} | Diretor: {movie.director} | Score: {movie.rt_score}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Grid>
  );
};

export default MovieList;
