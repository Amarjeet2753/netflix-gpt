
import { useSelector } from "react-redux";
import { FETCH_MOVIE_LOADING,FETCH_MOVIE_SUCCESS,FETCH_MOVIE_ERROR } from "../constants/moviesConstant";




export const fetchMovies =(url,options)=>{
   return async (dispatch)=>{
        try{
            dispatch(fetchMovieLoading())
            const res=await fetch(url,options)
            const data= await res.json()

            const pre_movies = useSelector(state=>state.movie.movies)
            dispatch(fetchMovieSuccess([...pre_movies,data?.results]))
        }catch(error){
            dispatch(fetchMovieError(error))
        }
   }
}



export const fetchMovieSuccess=(movies)=>{
  return {
    type :FETCH_MOVIE_SUCCESS,
    payload : movies
  }
}



export const fetchMovieError = (error) => ({
  type: FETCH_MOVIE_ERROR,
  payload: error,
});

export const fetchMovieLoading = () => ({
  type: FETCH_MOVIE_LOADING,
});