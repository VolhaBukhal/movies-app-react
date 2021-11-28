import {Movie} from 'types/types'
import {MovieAction, MovieActionType} from './action'

type State = {
    movies: Movie[],
    loading: boolean,
    error: string
}

const initialState: State = {
    movies: [{ 
        id: 337167, 
        title: "Fifty Shades Freed",  
        vote_average: 6.1,
        release_date: "2018-02-07",
        poster_path: "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
        overview: "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
        budget: 55000000,
        genres: [
        "Drama",
        "Romance"
        ],
        }],
    loading: false,
    error: ''
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
    }
    return state;
}