import React from "react";
import { degrees, motion } from "framer-motion";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";
import { div } from "framer-motion/client";

const EducationData = [
  {
    degree: "Master of Science",
    feild: "Computer Science",
    collage: "Sant Gadge Baba Amravati University",
    year: "2023-2025",
    icon: <FaGraduationCap />,
    desc:"bhjcfbndbihhdncieiurgfwev cmghgjklnnvgfgjknbvghkj jjdfhihebndbaeiqfwgbvdnf",
  },
  {
    degree: "Bachelor of Science",
    feild: "Physics,Math, Computer Science",
    collage: "Dr. R. G. Rathod Art's & Science College Murtizapur",
    year: "2020-2023",
    icon: <FaGraduationCap />,
    desc:"bhjcfbndbihhdncieiurgfwev cmghgjklnnvgfgjknbvghkj jjdfhihebndbaeiqfwgbvdnf",
  },
  {
    degree: "Higher Secondary Education",
    feild: "Science",
    collage: "G. M. Tekade Junior College Kurum",
    year: "2020",
    icon: <FaBookOpen />,
    desc:"bhjcfbndbihhdncieiurgfwev cmghgjklnnvgfgjknbvghkj jjdfhihebndbaeiqfwgbvdnf",
  },
  {
    degree: "Secondary Education",
    feild: "SSC",
    collage: "Panchsheel Vidyalaya Kurum",
    year: "2018",
    icon: <GiSchoolBag />,
    desc:"bhjcfbndbihhdncieiurgfwev cmghgjklnnvgfgjknbvghkj jjdfhihebndbaeiqfwgbvdnf",
  },
];

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ation: 1, ease: "easeout" }}
      viewport={{ once: true }}
      id="education"
      className="py-20 bg-white/80 text-black"
    >
      <div className="container mx-auto px-6">
        <p className="text-purple-500 font-semibold uppercase tracking-wider">
         Education
        </p>
        <h2 className="text-5xl font-bold text-gray-900 mt-3 ">My Education</h2>
        <div className="w-18 h-1 bg-linear-to-r from-purple-600 to-purple-900 rounded-full mt-4  animate-pulse"></div>
      </div>
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 h-full w-1 bg-gray-700 "></div>

        {EducationData.map((item, index) => (
          <div
              key={index}
              className="relative flex items-start mb-12 ">
            {/* Icon */}
            
            <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl z-10 shrink-0">
              {item.icon}
            </div>
            {/* card */}
            <div className="ml-8 w-full border border-gray-700 rounded-2xl p-6 shadow-lg shadow-gray-800">
                <h3 className="text-xl font-bold">{item.degree}</h3>
                <p className="text-purple-700 mt-1">
                    {item.feild}
                </p>
                <p className="text-gray-700 mt-1">
                    {item.collage}
                </p>
                <p className="text-gray-500 mt-1">
                    {item.year}
                </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
