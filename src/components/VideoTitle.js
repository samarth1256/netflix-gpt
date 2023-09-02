import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-3 text-base w-1/2'>{overview}</p>
      <div>
        <button className='bg-white text-black py-1 md:py-2 px-3 md:px-12 text-xl rounded-lg hover:bg-opacity-70 md:my-0 my-2'>▶️ Play</button>
        <button className='hidden md:inline-block bg-gray-500 mx-2 text-white p-2 px-12 text-xl bg-opacity-40 rounded-lg'>ℹ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
