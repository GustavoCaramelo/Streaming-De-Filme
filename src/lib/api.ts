export interface Movie {
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

export const getMovies = async (): Promise<Movie[]> => {
  try {
    const res = await fetch('https://ghibliapi.vercel.app/films');
    if (!res.ok) throw new Error('Erro ao buscar filmes');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Erro na API:', error);
    return [];
  }
};