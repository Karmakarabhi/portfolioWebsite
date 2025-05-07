import React from 'react'
import SmButton from '../Components/SmButton'
import LogoGrid from '../Components/LogoGrid'
function About() {
  return (
    <div className='flex justify-between p-10 sm:px-20 md:px-10 lg:px-20 xl:px-50'>
      <div className='py-20 pl-20  hidden md:flex '> 
        <LogoGrid/>
      </div>
      <div className='w-100 items-center'>
        <h1 className='text-3xl md:text-5xl text-blue-400 font-bold'>About ME</h1>
        <p className='pt-5'>My name is Abhijit Karmakar. I'm from Udaipur, Tripura. <br /> I enjoy building websites and learning how things work on the internet. I’ve been working on projects using HTML, CSS, JavaScript, and React to improve my skills and create useful things. I’m always looking to learn more and get better at web development.</p>
        <div className='mt-5 flex flex-wrap'>
          <p className='w-full py-4 text-xl underline underline-offset-8'>Skills and Technologies :</p>
          <SmButton name={"#Javascript"}/>
          <SmButton name={"#HTML"}/>
          <SmButton name={"#CSS"}/>
          <SmButton name={"#  C"}/>
          <SmButton name={"# C++"}/>
          <SmButton name={"#Java"}/>
          <SmButton name={"#git"}/>
          <SmButton name={"#Github"}/>
          <SmButton name={"#React"}/>
          <SmButton name={"#Tailwind"}/>
          <SmButton name={"#firebase"}/>
          <SmButton name={"#motion"}/>
        </div>
      </div>
    </div>
  )
}

export default About