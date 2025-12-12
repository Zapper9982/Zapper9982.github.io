"use client"

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import {Typewriter} from 'react-simple-typewriter'

import {MagicButton} from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import {FlipWords} from './ui/FlipWords'
import Image from 'next/image'


const images = [
  '/Tanmay-profile-1.png',
  '/Tanmay-profile-2.png',
  '/Tanmay-profile-3.png',
  '/Tanmay-profile-4.png',
]



const Hero = () => {

  const [selectedImage, setSelectedImage] = React.useState('')

  React.useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length)
    setSelectedImage(images[randomIndex])
  }, [])

  return (
   
    <div className='pb-20 pt-36 flex items-center justify-center relative overflow-hidden w-full min-h-screen'>
      
      <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
      <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
      <Spotlight className='top-28 left-80 h-[80vh] w-[50vw] ' fill='blue'/>
     
      <div className="absolute inset-0 w-full h-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 w-full h-full flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        </div>
      </div>
      
      <div className='flex flex-col-reverse lg:flex-row items-center justify-between z-10 relative w-full px-5 md:px-10 lg:px-20 gap-8 lg:gap-12'>
        
        <div className='flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2 lg:flex-1'>
            <h2 className='uppercase tracking-widest text-xs text-blue-100 max-w-full text-center lg:text-left mb-4' >
              Transforming Concepts into Seamless Experiences
            </h2>
            
            <div className="text-center lg:text-left">
              <TextGenerateEffect words={`Hi, I'm Tanmay Deobhankar`} className='text-[40px] md:text-5xl lg:text-6xl font-bold leading-tight'/>
            </div>
          
            <div className="mt-4 mb-6 h-20 md:h-24"> 
              <FlipWords 
                words={['Full Stack Developer', 'Competitive Programmer', 'Open Source Enthusiast', 'Tech Explorer']} 
                duration={2000}  
                className='text-[30px] md:text-5xl lg:text-5xl text-purple font-bold'
              />
            </div>
            
            <p className='text-center lg:text-left md:tracking-wider mb-8 text-sm md:text-lg lg:text-xl text-white-200 max-w-full'>
              Computer Science Undergrad at IIITDM Jabalpur. <br/>
              Building scalable solutions and exploring the depths of technology.
            </p>

            <a href='#projects' className='w-full flex justify-center lg:justify-start'>
              <MagicButton title='Explore My Work' icon={<FaLocationArrow/>} position='right'/>
            </a>
        </div>

        <div className='relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] mb-10 lg:mb-0 flex-shrink-0'>
           {selectedImage && (
             <Image 
               src={selectedImage} 
               alt="Tanmay Deobhankar"
               fill
               className='rounded-full object-cover border-4 border-purple/50 shadow-2xl shadow-purple/20'
               priority
             />
           )}
        </div>
   
      </div>
    </div>
  )
}

export default Hero
