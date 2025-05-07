import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiC, SiCplusplus } from 'react-icons/si';

const TechGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 justify-items-center p-6">
      <FaHtml5 className="text-orange-600 text-5xl hover:scale-110 transition" />
      <FaCss3Alt className="text-blue-500 text-5xl hover:scale-110 transition" />
      <FaJs className="text-yellow-400 text-5xl hover:scale-110 transition" />
      <FaReact className="text-cyan-400 text-5xl hover:scale-110 transition" />
      <SiTailwindcss className="text-teal-400 text-5xl hover:scale-110 transition" />
      <FaGitAlt className="text-orange-500 text-5xl hover:scale-110 transition" />
      <FaGithub className="text-white text-5xl hover:scale-110 transition" />
      <SiFirebase className="text-yellow-500 text-5xl hover:scale-110 transition" />
      <SiC className="text-blue-400 text-5xl hover:scale-110 transition" />
      <SiCplusplus className="text-blue-600 text-5xl hover:scale-110 transition" />
    </div>
  );
};

export default TechGrid;