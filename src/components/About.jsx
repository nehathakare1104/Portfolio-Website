import React from "react";
import { motion } from "framer-motion";
import neha from "../assets/neha4.jpg";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import { IoMdDownload } from "react-icons/io";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeout" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-white/80"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-32">
        {/* Image */}
        <div className="md:w-1/2 rounded-2xl overflow:hidden">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeout" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full object-cover rounded-2xl shadow-2xl ml-24 "
            src={neha}
            alt="Profile img"
          />
        </div>
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeout" }}
          viewport={{ once: false, amount: 0.2 }}
          id="about"
          className="py-20 bg-white/80"
          className="rounded-2xl w-full ml-24"
        >
          {/* heading */}
          <p className="text-purple-500 font-semibold uppercase tracking-wider">
            About Me
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-3 ">Who I am?</h2>
          <div className="w-28 h-1 bg-linear-to-r from-purple-600 to-purple-900 rounded-full mt-4  animate-pulse"></div>

          <p className="text-gray-400 mb-6 text-lg leading-9 mt-8 max-w-175">
            I’m a passionate Full Stack Developer fresher with skills in
            React.js, Tailwind CSS, HTML, CSS, and JavaScript. I enjoy creating
            responsive and user-friendly websites.
          </p>

          <p className="text-gray-400 mb-6 text-lg leading-9 mt-5 max-w-175">
            My goal is to build modern web applications with great user
            experience while gaining real-world project experience and growing
            as a professional Full Stack Developer.
          </p>
          <div className="flex flex-wrap gap-6 mt-10" >
            {/* card 1 */}
            <div className="bg-white px-8 py-5 rounded-2xl shadow-md flex items-center gap-4 border">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-2xl">
                <SlCalender />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Age</p>
                <h3 className=" text-black text-sm font-bold">24</h3>
              </div>
            </div>

            {/* card 2 */}
            <div className="bg-white px-8 py-5 rounded-2xl shadow-md flex items-center gap-4 border">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-2xl">
               <FaLocationDot />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <h3 className=" text-black text-sm font-bold">India</h3>
              </div>
            </div>

            {/* card 3 */}
            <div className="bg-white px-8 py-5 rounded-2xl shadow-md flex items-center gap-4 border">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-2xl">
              <GiGraduateCap />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Study</p>
                <h3 className=" text-black text-sm font-bold">M.Sc Computer Science</h3>
              </div>
            </div>
          </div>
           
           <div className="mt-6">
           <a href="https://drive.google.com/file/d/1x4eIhybhP1efJzcRgwwWBaUIe46ZVbu8/view?usp=sharing" className='px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 flex items-center gap-2 w-fit'>
            <span>Download CV</span>
            <IoMdDownload />
           </a>
           </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default About;
