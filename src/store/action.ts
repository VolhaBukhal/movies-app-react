import {Dispatch} from "react"
import {Movie, MovieData} from 'types/types'
import {Action} from 'redux'

export enum MovieFilter {
    ReleaseDate = 'release date',
    Rating = 'rating'
}

export enum MovieActionType {
    FETCH_MOVIES = 'FETCH_MOVIES',
    FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
}

export type ActionPayload <TypeAction, TypePayload> = {
    type: TypeAction;
    payload: TypePayload;
}

export type FetchMovieAction = Action<MovieActionType.FETCH_MOVIES>;
export type FetchSuccessMovieAction = ActionPayload<MovieActionType.FETCH_MOVIES_SUCCESS, Movie[]>;

export type MovieAction = FetchMovieAction
            |FetchSuccessMovieAction;


export const fetchMovies = () => {
    return (dispatch: Dispatch<MovieAction>) => {
        dispatch({type: MovieActionType.FETCH_MOVIES})
        fetch(`http://reactjs-cdp.herokuapp.com/movies`)
          .then((response):Promise<MovieData> => response.json())
          .then( movies => {
            dispatch({type: MovieActionType.FETCH_MOVIES_SUCCESS, payload: movies.data})
        }).catch(error => {
            console.log(error);
        })
    }
}

// useEffect( () => {
//     const url = 'http://reactjs-cdp.herokuapp.com/movies';
//     fetch(url)
//       .then( (data):Promise<MovieData> => data.json() )
//       .then (data => {
//         setMovies(data.data);
//         setIsLoaded(true);
//       })
//       .catch( error => console.log(error) )
// });