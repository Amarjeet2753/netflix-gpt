import { useDispatch, useSelector } from "react-redux"
import { fetchMovies } from "../redux/actions/movieActions"
import { useEffect } from "react"


export const useMovies = (page,option)=>{

    const url=`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`

   
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(fetchMovies(url,option))
    },[page,option,dispatch])


    const movies = useSelector(state=>state.movie)
    
    return movies;

} 