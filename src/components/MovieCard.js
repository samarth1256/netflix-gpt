import React from 'react'
import { IMG_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
      <img alt="Movie card" src={IMG_URL+posterPath}></img>
    </div>
  )
}

export default MovieCard
