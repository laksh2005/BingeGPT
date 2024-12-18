import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button 
            className='rounded-lg bg-white text-black p-3 px-12 text-xl roudnded-lg hover:bg-opacity-80'>
                ▶ Play</button>
            <button 
            className='mx-2 rounded-lg bg-gray-500 text-white p-3 px-12 text-xl roudnded-lg'>
                ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;