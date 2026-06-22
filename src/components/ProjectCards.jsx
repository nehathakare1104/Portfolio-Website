import { span } from 'framer-motion/client'
import React from 'react'

const ProjectCards = ({ title, description, image, tech }) => {
  return (
    <div className='bg-white/80 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer text-black border-gray-600 shadow-lg shadow-gray-700 '>
         <img src={image} alt={title} className='w-full h-60 '/>
        <div className='p-6'>
            <h3 className='text-xl font-semibold mb-2'>{title}</h3>
            <p className='text-grey-400 mb-4'>{description}</p>
            <div className='flex flex-wrap gap-2 mb-4 '>
                {tech.map((item, index)=>(
                    <span key={index} className='px-3 py-1 bg-dark-300 rounded-full text-sm text-white'>
                        {item}
                    </span>
                ))}
            </div>
            <div className='flex gap-2'>
                <a href="https://github.com/nehathakare1104" className='flex-1 text-center px-4 py-2 border border-purple  rounded-lg font-medium hover:bg-purple/50 transition duration-300'>
                   Code
                </a>
            </div>
        </div>      
    </div>
  )
}

export default ProjectCards;
