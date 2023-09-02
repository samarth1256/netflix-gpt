import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstants'
import openai from '../utils/openAi'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {
    const dispatch=useDispatch();
    const searchText=useRef(null);
    const langKey=useSelector((store)=>store.config.lang)

    const searchMovieTmdb=async(movie)=>{
        const data= await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json=await data.json();
        return json.results;

    }
    const handleGptSearchClick=async()=>{
        const gptQuery="Act as a movie recommendation and suggest some movies for the query: "+searchText.current.value+". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholey, Don,Golmaal,Koi mil gaya";
        const gptResults=await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery}],
            model: 'gpt-3.5-turbo',
          });
//console.log(gptResults.choices)
          
          const gptMovies=gptResults.choices?.[0]?.message?.content.split(",") 
          //console.log(gptMovies);
            
        const promiseArray=gptMovies.map((movie)=>searchMovieTmdb(movie))
        //This returns five promises (searchMovieTmdb) returns 5 promise for each movie as it fetches async await api.
        //[Promise,Promise,Promise,Promise,Promise]
        const tmdbResults=await Promise.all(promiseArray); //Here await waits to get the result after all 5 promises are resolved
        //console.log(tmdbResults);
        dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));
    }
  return (
    <div className='pt-[45%] md:pt-[10%] flex justify-center'>
    <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className='col-span-3 m-4 py-2 px-4 text-white rounded-lg bg-red-700' placeholder={lang[langKey].search} onClick={handleGptSearchClick}>Search</button>
    </form>
      
    </div>
  )
}

export default GptSearchBar
