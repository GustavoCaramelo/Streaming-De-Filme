'use client';

import { useEffect, useState } from 'react';
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

export default function MinhaListaPage() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMyList = async () => {
            const storedIds: string[] = JSON.parse(localStorage.getItem('myList') || '[]');
            if (storedIds.length === 0) {
                setMovies([]);
                setLoading(false);
                return;
            }

            const responses = await Promise.all(
                storedIds.map((id) =>
                    fetch(`https://ghibliapi.vercel.app/films/${id}`).then((res) => res.json())
                )
            );

            setMovies(responses);
            setLoading(false);
        };

        fetchMyList();
    }, []);

    if (loading) return <p>Carregando...</p>;
    if (movies.length === 0) return <p style={{ padding: '2rem' }}>Nenhum filme adicionado à sua lista.</p>;

    return (
        <div>
            <h2 style={{ padding: '2rem 0 0 2rem' }}>Minha Lista</h2>
            <MovieList movies={movies} />
        </div>
    );
}
