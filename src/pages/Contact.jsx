import React from 'react'
import { SocialIcon } from 'react-social-icons'
function Contact() {
  return (
    <div className='flex justify-center flex-col items-center my-20'>
      <p className='text-3xl md:text-5xl text-blue-400 font-bold '>Contact</p>
      <div className='pt-10 md:pt-30'>
      <SocialIcon url="https://twitter" className='mx-4' />
      <SocialIcon url="https://github.com/Karmakarabhi?tab=repositories" className='mx-4' />
      <SocialIcon url="https://linkedin" className='mx-4' />
      <SocialIcon url="mailto:karmokarr87@gmail.com" className='mx-4' />
      </div>
    </div>
  )
}

export default Contact