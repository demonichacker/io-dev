import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa"; // Node.js Icon
import { SiFigma } from "react-icons/si"; // Figma Icon
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
  { skill: "NodeJS", icon: FaNodeJs },
  { skill: "Figma", icon: SiFigma }, // Added Figma
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          const IconComponent = item.icon; // Reference the icon component
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={
                  <IconComponent className="text-red-600 hover:text-black transition-all duration-300" />
                } // Red color with black hover effect
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;