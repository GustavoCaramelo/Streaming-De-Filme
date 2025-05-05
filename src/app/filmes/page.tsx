import MovieList from '@/components/MovieList';

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

async function getMovies(): Promise<Movie[]> {
    const res = await fetch('https://ghibliapi.vercel.app/films');
    if (!res.ok) throw new Error('Erro ao buscar filmes');
    return res.json();
}

export default async function FilmesPage() {
    const movies = await getMovies();

    return (
        <div>
            <h2 style={{ padding: '2rem 0 0 2rem' }}>Todos os Filmes</h2>
            <MovieList movies={movies} />
        </div>
    );
}