import { motion } from 'framer-motion'
import React from 'react'
import Portfolio from "../assets/nehaportfolio.png"
import WeatherApp from "../assets/WeatherApp.png"
import FlowerShop from "../assets/floweShop.png"
import ProjectCards from "./ProjectCards"
import { FaArrowRight } from "react-icons/fa";

const ProjectData=[
    {
        title:"Portfolio Website",
        description:"A modern and interactive portfolio website that highlights my work, technical skills in web development.",
        image: Portfolio, 
        tech: ["React", "Tailwind"],
    },
    {
        title:"Weather App",
        description:"A user-friendly weather application that helps users check current weather conditions.",
        image: WeatherApp, 
        tech: ["HTML", "CSS", "JavaScript"],
    },
    {
        title:"Flower Shop Home Page",
        description:"A modern flower shop homepage created to highlight products through a clean and engaging design.",
        image: FlowerShop, 
        tech: ["HTML", "CSS"],
    },
];

const Projects = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ation: 1, ease: "easeout" }}
      viewport={{ once: true }}
      id="projects"
      className='py-20 bg-white/80'
    >
        <div className="container mx-auto px-6">
        <p className="text-purple-500 font-semibold uppercase tracking-wider">
          Project
        </p>
        <h2 className="text-5xl font-bold text-gray-900 mt-3 ">My Projects</h2>
        <div className="w-18 h-1 bg-linear-to-r from-purple-600 to-purple-900 rounded-full mt-4  animate-pulse"></div>

        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto '>
           {/* project card */}
           {
               ProjectData.map((project,index)=>(
                <ProjectCards key={index} {...project}/>
               ))
           }

        </div>
        <div className='text-center mt-12 text-black'>
           <a href="#" className='inline-flex item-center px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/50 transition duration-300'>
            <span>View More Projects</span>
             <FaArrowRight className='ml-2 mt-1' />
           </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
