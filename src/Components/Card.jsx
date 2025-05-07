import React from 'react'

function Card({website = "", lang = ""}) {
  return (
    <div className='p-4 w-75'>
        <img src="https://placehold.co/300x300" className='rounded-lg' />
        <div>
            <h1 className='text-2xl py-4'>{website}</h1>
            <p className='text-[16px]  text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, ipsa. Cum saepe nostrum perferendis aliquid!</p>
            <div>
                <p>Tech Stack : {lang}</p>
                <button className='bg-cyan-600 p-2 px-10 rounded-lg my-5'>Codebase</button>
            </div>

        </div>
    </div>
  )
}

export default Card