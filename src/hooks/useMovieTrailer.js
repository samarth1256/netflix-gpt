import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();
    
    //Fetch trailer video and update the store with trailer video data.
        const getMovieVideos=async()=>{
            const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)
            const json=await data.json()
            const filterData=json.results.filter((video)=>video.type==="Trailer")
            const trailer=filterData.length?filterData[0]:json.results[0]
            console.log(trailer)
            dispatch(addTrailerVideo(trailer))
            
    
        };
        
        useEffect(()=>{
            getMovieVideos();
    
        },[])
}

export default useMovieTrailer;