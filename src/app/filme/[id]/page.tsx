import { movies } from '@/lib/api';
import Image from 'next/image';

type PageProps = {
    params: { id: string };
};

export default function FilmePage({ params }: PageProps) {
    const movie = movies.find(m => m.id === params.id);

    if (!movie) return <h1>Filme não encontrado</h1>;

    return (
        <main>
            <h1>{movie.title}</h1>
            <Image
                src={movie.image}
                alt={movie.title}
                width={400}
            />
            <p>{movie.description}</p>
        </main>
    );
}