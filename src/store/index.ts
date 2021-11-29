import {createStore, applyMiddleware, combineReducers} from 'redux'
import {MoiveReducer} from './MovieReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'



export const RootReducer = combineReducers({
    movies: MoiveReducer,
})

export type RootState = ReturnType<typeof RootReducer>;

export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));