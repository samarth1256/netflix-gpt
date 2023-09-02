import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { API_OPTIONS } from "../utils/constants";

const WatchPage = (movieId) => {
    const [keydedo,setKeyDedo]=useState(null);
    const [searchParams]=useSearchParams();

    useEffect(() => {
        console.log(searchParams.get("v"));
        getMovieVideos(searchParams.get("v"));

    }, [])
     
    const getMovieVideos=async(movieId)=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)
        const json=await data.json()
        const filterData=json.results.filter((video)=>video.type==="Clip")
        const trailer=filterData.length?filterData[0]:json.results[0]
        if(trailer?.key) {
            setKeyDedo(trailer?.key)
        }

    }

  return (

    <div>
       <div className='flex flex-col w-full'>
    {/* <div className=flex'> */}
    <div className='w-screen h-screen bg-black'>
        {keydedo && 
            <iframe className='w-screen aspect-video' 
                src={"https://www.youtube.com/embed/"+keydedo+'?&autoplay=1&mute=1'} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            </iframe>
        }
    </div>
     
    </div>
    {/* </div> */}
    </div>
  )
}

export default WatchPage

