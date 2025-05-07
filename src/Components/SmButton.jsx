import React from 'react'

function SmButton({name="hello"}) {
  return (
    <div className='p-1 px-8 m-2 border-1 w-fit rounded-lg'>{name}</div>
  )
}

export default SmButton