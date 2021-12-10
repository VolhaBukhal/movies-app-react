import {Movie} from 'types/types'
import {MovieAction, MovieActionType, SearchFilter, MovieFilter} from './action'

type State = {
    movies: Movie[],
    loading: boolean,
    error: string,
    searchFilter: SearchFilter,
    movieFilter: MovieFilter,
    searchWord: string,
    moviesLimit: number,
}

const initialState: State = {
    movies: [],
    loading: false,
    error: '',
    searchFilter: SearchFilter.Title,
    movieFilter: MovieFilter.RATING,
    searchWord: '',
    moviesLimit: 50,
}

export const MoiveReducer = (state: State = initialState, action: MovieAction): State => {
    switch(action.type) {
        case MovieActionType.FETCH_MOVIES: {
            return {
                ...state,
                movies: [],
                loading: true,
            }
        }
        case MovieActionType.FETCH_MOVIES_SUCCESS: {
            return {
                ...state,
                movies: [...action.payload],
                loading: false
            }
        }
        case MovieActionType.FILTER_SEARCH_MOVIES: {
            return {
                ...state,
                searchFilter: action.payload
            }
        }
        case MovieActionType.SET_MOVIE_FILTER: {
            return {
                ...state,
                movieFilter: action.payload
            }
        }
        case MovieActionType.SET_SEARCH_WORD: {
            return {
                ...state,
                searchWord: action.payload
            }
        }
        case MovieActionType.SET_MOVIES_LIMIT: {
            return {
                ...state,
                moviesLimit: action.payload
            }
        }
    }
    return state;
}