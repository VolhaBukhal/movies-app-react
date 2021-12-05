import {Dispatch} from "react"
import {Movie, MovieData} from 'types/types'
import {Action} from 'redux'

export enum MovieFilter {
    RELEASE_DATE = 'release date',
    RATING = 'rating'
}

export enum SearchFilter {
    Title = 'Title', 
    Genre = 'Genre'
}

export enum MovieActionType {
    FETCH_MOVIES = 'FETCH_MOVIES',
    FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
    FILTER_SEARCH_MOVIES = "FILTER_SEARCH_MOVIES",
    SET_SEARCH_WORD = "SET_SEARCH_WORD",
    SET_MOVIE_FILTER = "SET_MOVIE_FILTER",
}

export type ActionPayload <TypeAction, TypePayload> = {
    type: TypeAction;
    payload: TypePayload;
}

export type FetchMovieAction = Action<MovieActionType.FETCH_MOVIES>;
export type FetchSuccessMovieAction = ActionPayload<MovieActionType.FETCH_MOVIES_SUCCESS, Movie[]>;
export type SetFilterSearchMovieAction = ActionPayload<MovieActionType.FILTER_SEARCH_MOVIES, SearchFilter>;
export type SetSearchWordMovieAction = ActionPayload<MovieActionType.SET_SEARCH_WORD, string>;
export type SetFilterMovieAction = ActionPayload<MovieActionType.SET_MOVIE_FILTER, MovieFilter>;

export type MovieAction = FetchMovieAction
            | FetchSuccessMovieAction
            | SetFilterSearchMovieAction
            | SetSearchWordMovieAction
            | SetFilterMovieAction;

export const fetchMovies = () => {
    return (dispatch: Dispatch<MovieAction>) => {
        dispatch({type: MovieActionType.FETCH_MOVIES})
        fetch(`http://reactjs-cdp.herokuapp.com/movies?limit=50`)
          .then((response):Promise<MovieData> => response.json())
          .then( movies => {
            dispatch({type: MovieActionType.FETCH_MOVIES_SUCCESS, payload: movies.data})
        }).catch(error => {
            console.log(error);
        })
    }
}

export const setSearchFilterMovie = (filter: SearchFilter): SetFilterSearchMovieAction  => ({
    type: MovieActionType.FILTER_SEARCH_MOVIES,
    payload: filter
})

export const setSearchWord = (word: string): SetSearchWordMovieAction  => ({
    type: MovieActionType.SET_SEARCH_WORD,
    payload: word
})

export const setMovieFilter = (filter: MovieFilter): SetFilterMovieAction  => ({
    type: MovieActionType.SET_MOVIE_FILTER,
    payload: filter
})
