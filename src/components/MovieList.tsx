'use client';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface Movie {
  id: string;
  title: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  image: string;
}

const MovieList = ({ movies }: { movies: Movie[] }) => {
  return (
    <Grid container spacing={3} sx={{ padding: 4 }}>
      {movies.map((movie) => (
        <Box
          key={movie.id}
          sx={{
            width: {
              xs: '100%',
              sm: '50%',
              md: '33.33%',
              lg: '25%',
            },
            padding: 1,
          }}
        >
          <Card sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="400" // aumente de 300 para 400 ou 450
              image={movie.image}
              alt={movie.title}
            />
            <CardContent>
              <Typography variant="h6">{movie.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {movie.release_date} | Diretor: {movie.director}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Grid>
  );
};

export default MovieList;
