export interface Movie {
    id: number;
    title: string;
    release_date: string;
    vote_average: number;
    overview: string;
    poster_path: string;
    budget: number;
    genres: string[];
}

export interface MovieData {
    data: Movie[];
}