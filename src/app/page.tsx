import Banner from "@/components/Banner";
import MovieList from '@/components/MovieList';

const sampleMovies = [
  { id: 1, title: 'Stranger Things', image: '/images/strangerThings.png' },
  { id: 2, title: 'Breaking Bad', image: '/images/breakingBad.png' },
  { id: 3, title: 'Dark', image: '/images/dark.png' },
  { id: 4, title: 'The Witcher', image: '/images/theWitcher.png' },
];

export default function Home() {
  return (
    <main style={{ backgroundColor: '#111', color: 'white', minHeight: '100vh' }}>
      <Banner />
      <MovieList title="Populares" movies={sampleMovies} />
    </main>
  );
}