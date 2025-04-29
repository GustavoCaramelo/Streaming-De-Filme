import MovieCard from '@/components/MovieCard';
import { movies } from '@/lib/api';

export default function BrowsePage() {
  return (
    <main style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </main>
  );
}