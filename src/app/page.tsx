import { getMovies } from '@/lib/api';
import MovieList from '@/components/MovieList';
import { Container, Typography } from '@mui/material';

const Home = async () => {
  const movies = await getMovies();

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
        Filmes Studio Ghibli
      </Typography>
      <MovieList movies={movies} />
    </Container>
  );
};

export default Home;
