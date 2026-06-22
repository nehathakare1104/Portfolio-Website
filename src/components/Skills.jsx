import { GrReactjs } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Skills() {
  return (
    <section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeout" }}
      viewport={{ once: true }}
      id="skills"
      className=" px-6"
    >
      <div className="container mx-auto px-6">
        <p className="text-purple-500 font-semibold uppercase tracking-wider">
          Skills
        </p>

        <h2 className="text-5xl font-bold text-gray-900 mt-3 ">My Skills</h2>
        <div className="w-18 h-1 bg-linear-to-r from-purple-600 to-purple-900 rounded-full mt-4  animate-pulse"></div>
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border rounded-xl overflow-hidden max-w-7xl mx-auto">
        <div className="flex flex-col items-center p-8 border">
          <GrReactjs className="text-5xl text-cyan-500 mb-3" />
          <p className="text-black">React JS</p>
        </div>

        <div className="flex flex-col items-center p-8 border">
          <RiTailwindCssFill className="text-5xl text-sky-400 mb-3" />
          <p className="text-black">Tailwind CSS</p>
        </div>

        <div className="flex flex-col items-center p-8 border">
          <SiJavascript className="text-5xl text-yellow-400 mb-3" />
          <p className="text-black">JavaScript</p>
        </div>

        <div className="flex flex-col items-center p-8 border">
          <FaHtml5 className="text-5xl text-orange-500 mb-3" />
          <p className="text-black">HTML</p>
        </div>

        <div className="flex flex-col items-center p-8 border">
          <FaCss3Alt className="text-5xl text-blue-500 mb-3" />
          <p className="text-black">CSS</p>
        </div>

        <div className="flex flex-col items-center p-8 border">
          <FaGithub className="text-5xl mb-3 text-black" />
          <p className="text-black">Git & GitHub</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
