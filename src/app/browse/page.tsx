import { getMovies } from '@/lib/api';
import HeroSlider from '@/components/HeroSlider';
import MovieList from '@/components/MovieList';
import { Container } from '@mui/material';

const BrowsePage = async () => {
  const movies = await getMovies();

  return (
    <>
      <HeroSlider movies={movies} />
      <Container sx={{ py: 4 }}>
        <MovieList movies={movies} />
      </Container>
    </>
  );
};

export default BrowsePage;
