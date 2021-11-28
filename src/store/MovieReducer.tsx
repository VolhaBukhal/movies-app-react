import {Movie} from 'types/types'
import {MovieAction, MovieActionType, SearchFilter} from './action'

type State = {
    movies: Movie[],
    loading: boolean,
    error: string,
    searchFilter: SearchFilter,
    searchWord: string
}

const initialState: State = {
    movies: [],
    loading: false,
    error: '',
    searchFilter: SearchFilter.Title,
    searchWord: ''
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
        case MovieActionType.SET_SEARCH_WORD: {
            return {
                ...state,
                searchWord: action.payload
            }
        }
    }
    return state;
}