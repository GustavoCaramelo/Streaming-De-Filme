'use client';

import { Box, Typography, Button, Container } from '@mui/material';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import { addToMyList, removeFromMyList, isInMyList } from '@/utils/myList';

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
    movie_banner: string;
}

async function getMovie(id: string): Promise<Movie | null> {
    try {
        const res = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
        if (!res.ok) return null;
        return res.json();
    } catch {
        return null;
    }
}

export default function MoviePage({ params }: { params: { id: string } }) {
    const [movie, setMovie] = useState<Movie | null>(null);
    const [inList, setInList] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            const data = await getMovie(params.id);
            if (!data) return notFound();
            setMovie(data);
            setInList(isInMyList(params.id));
        };
        fetchMovie();
    }, [params.id]);

    if (!movie) return null;

    const handleToggleList = () => {
        if (inList) {
            removeFromMyList(movie.id);
        } else {
            addToMyList(movie.id);
        }
        setInList(!inList);
    };

    return (
        <Box
            sx={{
                position: 'relative',
                color: '#fff',
                backgroundColor: '#000',
                minHeight: '100vh',
                pb: 6,
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: 300, md: 600 },
                    overflow: 'hidden',
                }}
            >
                <Image
                    src={movie.movie_banner}
                    alt={movie.title}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                        p: 3,
                    }}
                >
                    <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                        {movie.title}
                    </Typography>
                </Box>
            </Box>

            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    {movie.description}
                </Typography>

                <Typography variant="body2" sx={{ mb: 1 }}>
                    🎬 Diretor: {movie.director}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                    ⏱ Duração: {movie.running_time} min
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                    ⭐ Score: {movie.rt_score}
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                    <Button variant="contained" color="primary">
                        Assistir
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={handleToggleList}>
                        {inList ? 'Remover da Lista' : 'Adicionar à Lista'}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}