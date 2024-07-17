"use client"

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import {Typewriter} from 'react-simple-typewriter'

import {MagicButton} from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import {FlipWords} from './ui/FlipWords'


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
   
    <div className='pb-20 pt-36   flex items-center justify-center '>
      
      <Spotlight className='-top-20 -left-10 md:-left-32 md:-top-20 h-screen' fill='yellow'/>
      <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='cyan'/>
      <Spotlight className='top-28 left-80 h-[80vh] w-[50vw] ' fill='purple'/>
     
      <div className=" absolute top-0 left-0 h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.3] bg-grid-black/[0.2]  flex items-center justify-center opacity-20">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        </div>
      </div>
      

      <img src={selectedImage} className='lg:h-[400px] left-44 rounded-full lg:w-[400px] absolute hidden lg:block border-4 border-green-300 border-spacing-72' />
      <div className='flex items-center justify-center my-20 gap-80 z-10 relative lg:left-72' >
     
      
      <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-between'>
          <h2 className='uppercase tracking-widest text-xs text-blue-100 max-w-80' >A dynamic site to my simple self</h2>
          <TextGenerateEffect words={`Hello I am`} className='text-center text-[40px] md:text-5xl lg:text-6xl'/>
         
        <span > 
        <FlipWords words={['Tanmay Deobhankar' , 'A coder ' , 'A FullStack developer ' , 'A student' , 'A guitarist' , 'A photographer']} duration={2000}  className='text-center text-[50px] md:text-6xl lg:text-6xl mb-6 text-blue-400 font-extrabold '/>
        </span>
        
        
          
         
   
          <p className='text-center md:tracking-widest mb-4 text-sm md:text-lg lg:text-xl '>Currently Studying at IIITDM JABALPUR</p>

          <a href='https://github.com/Zapper9982'>
            <MagicButton title='See my work ' icon={<FaLocationArrow/>} position='right'/>
          </a>



      <div className='bg-orange-200  w-72 h-2 mt-7 rounded-lg  md:block lg:block'>

</div>


        </div>
   
     
       
   
      </div>
     
      
    </div>
   
    
   
  )
}

export default Hero
