import { getMovies } from '@/lib/api';
import { Container, Typography, Box, Button } from '@mui/material';
import HeroSlider from '@/components/HeroSlider';
import Link from 'next/link';

const Home = async () => {
  const movies = await getMovies();

  const highScoreMovies = movies.filter(
    (movie) => Number(movie.rt_score) > 95
  );

  return (
    <Container maxWidth="xl" disableGutters>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        align="center"
        sx={{ paddingTop: '1%' }}
      >
        Filmes Studio Ghibli
      </Typography>

      <HeroSlider movies={highScoreMovies} />

      <Box display="flex" justifyContent="center" marginTop="-85px" >
        <Link href="/filmes" passHref>
          <Button variant="contained" color="primary" size="large">
            Ver todos
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
