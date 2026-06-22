import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRightLong } from "react-icons/fa6"
import neha from "../assets/neha4.jpg"
const Hero = () => {
  return (
    <motion.div 
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}} 
    transition={{duration:0.6, ease:'easeout'}}
    viewport={{once:true}}
    id='home'
    className='min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r from-[#020617] via-[#050A30] to-[#0B0F3A]'
    >
        <div className='container mx-auto  px-6 flex flex-col md:flex-row items-center justify-between'>
            {/* left side Content */}
            <div className='md:w-1/2 mb-10 md:mb-0'>
                 <h1 className='text-4xl md:text-6xl font-bold mb-4 text-purple/80'>
                    Hi, I'm <br /> 
                    <span className='text-white/80'>Neha Thakare</span>
                 </h1>
                 <h2 className='text-2xl md:text-4xl font-semibold mb-6 text-purple/80 '>Full Satck Developer</h2>
                 <p className='text-lg text-gray-300 mb-8'>I build responsive and beautiful websites using React.js, Tailwind CSS and modern web technologies</p>
                 <div className='flex space-x-4 '>
                    <a href="#projects" className='px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>View Project </a>
                    <a href="#contact" className='px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300'>Contact Me</a>
                 </div>
            </div>
            {/* Right side Image */}
            <div className='md:w-1/2 flex justify-center'>
                <img className='w-100 h-100 object-cover rounded-full' src={neha} alt="Profile" />
            </div>
        </div>

      
    </motion.div>
  )
}

export default Hero
