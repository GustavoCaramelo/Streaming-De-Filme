import Link from 'next/link';
import Image from 'next/image';

type Movie = {
    id: string;
    title: string;
    description: string;
    image: string;
};

export default function MovieCard({ movie }: { movie: Movie }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
            <Image
                src={movie.image}
                alt={movie.title}
                width={200}
                height={300}
            />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <Link href={`/filme/${movie.id}`}>Ver detalhes</Link>
        </div>
    );
}
