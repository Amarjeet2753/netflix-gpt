import { FETCH_MOVIE_LOADING,FETCH_MOVIE_SUCCESS,FETCH_MOVIE_ERROR } from "../constants/moviesConstant";


const initialState = {
    loading :false,
    error :null,
    movies :null
}


export const movieReducer = (state=initialState,action) =>{
    
    switch(action.type) {

        case FETCH_MOVIE_LOADING : return{
            ...state,
            loading :true
        }

        case FETCH_MOVIE_SUCCESS : return {
            ...state,
            loading :false,
            movies :action.payload,
        }

        case FETCH_MOVIE_ERROR : return{
            ...state,
            loading :false,
            error :action.payload,
            movies :null
        }

        default : return state

    }

}