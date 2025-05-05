import { getMovies } from '@/lib/api';
import { Container } from '@mui/material';
import HeroSlider from '@/components/HeroSlider';

const BrowsePage = async () => {
  const movies = await getMovies();

  return (
    <>
      <HeroSlider movies={movies} />
      <Container sx={{ py: 4 }}>
      </Container>
    </>
  );
};

export default BrowsePage;
