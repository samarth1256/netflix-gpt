import React from 'react'
import { IMG_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath)return null
  return (
    <div className='w-36 md:w-48 pr-4'>
      <img alt="Movie card" src={IMG_URL+posterPath}></img>
    </div>
  )
}

export default MovieCard
