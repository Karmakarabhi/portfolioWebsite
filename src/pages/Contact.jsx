import React from 'react'
import { SocialIcon } from 'react-social-icons'
function Contact() {
  return (
    <div className='flex justify-center flex-col items-center'>
      <p className='text-3xl md:text-5xl text-blue-400 font-bold my-5'>Contact</p>
      <div className='my-10  mb-30'>
      <SocialIcon url="https://twitter.com" className='mx-4' />
      <SocialIcon url="https://github.com" className='mx-4' />
      <SocialIcon url="https://linkedin.com" className='mx-4' />
      <SocialIcon url="https://email.com" className='mx-4' />
      </div>
    </div>
  )
}

export default Contact