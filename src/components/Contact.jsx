import React from "react";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaWhatsappSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ation: 1, ease: "easeout" }}
      viewport={{ once: true }}
      id="contact"
      className="py-20 bg-white/80 text-black"
    >
      <div className="container mx-auto px-6">
        <p className="text-purple-500 font-semibold uppercase tracking-wider">
          Contact
        </p>
        <h2 className="text-5xl font-bold text-gray-900 mt-3 ">Get In Touch</h2>
        <div className="w-18 h-1 bg-linear-to-r from-purple-600 to-purple-900 rounded-full mt-4 animate-pulse"></div>

                  
          {/* contact information */}
          <div className="flex flex-col md:flex-row justify-center md:items-center gap-8 md:gap-16 max-w-5xl mx-auto mt-12">
            <div className="flex item-start">
              <div className="text-purple-500 text-2xl mr-4">
                <FaLocationDot />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Pune, Punawale</p>
              </div>
            </div>

            <div className="flex item-start">
              <div className="text-purple-500 text-2xl mr-4">
                <MdEmail />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">neha.thakare1104@gmail.com</p>
              </div>
            </div>

            <div className="flex item-start">
              <div className="text-purple-500 text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+91 123456789</p>
              </div>
            </div>

            <div className="pt-4 ">
                <h3 className="text-lg font-semibold mb-2">Follow Me: </h3>
                <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-purple-700 hover:text-white transition duration-300" >
                        <FaGithub/>
                    </a>

                     <a href="#" className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-blue-400 hover:text-white transition duration-300" >
                        <FaLinkedin />
                     </a>
                     <a href="#" className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-green-700 hover:text-white transition duration-300" >
                       <FaWhatsappSquare />                  
                     </a>
                </div>
            </div>

            
            
          </div>
        
      </div>
    </motion.div>
  );
};

export default Contact;
