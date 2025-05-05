import { getMovies } from '@/lib/api';
import MovieList from '@/components/MovieList';
import { Container, Typography } from '@mui/material';
import HeroSlider from '@/components/HeroSlider';

const Home = async () => {
  const movies = await getMovies();

  const highScoreMovies = movies.filter(
    (movie) => Number(movie.rt_score) > 95
  );

  return (
    <Container maxWidth="xl" disableGutters>
      <Typography variant="h4" fontWeight="bold" gutterBottom align="center" sx={{ paddingTop: '1%' }}>
        Filmes Studio Ghibli
      </Typography>
      <HeroSlider movies={highScoreMovies} />
      <MovieList movies={movies} />
    </Container>
  );
};


export default Home;
