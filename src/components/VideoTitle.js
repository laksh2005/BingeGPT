import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-36 px-12">
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button 
            className='rounded-lg bg-gray-500 text-white p-3 px-12 text-xl bg-opacity-50 roudnded-lg'>
                ▶ Play</button>
            <button 
            className='mx-2 rounded-lg bg-gray-500 text-white p-3 px-12 text-xl bg-opacity-50 roudnded-lg'>
                More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;