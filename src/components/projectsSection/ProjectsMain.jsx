import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "My First Portfolio",
    year: "June 2023",
    align: "right",
    image: "/images/4.jpg",
    link: "https://demonichacker.github.io/Portfolio/",
  },
  {
    name: "UNITY HUB",
    year: "November 2024",
    align: "left",
    image: "/images/3.jpg",
    link: "https://demonichacker.github.io/UnityHub/",
  },
  {
    name: "TRIBE ONLY",
    year: "January 2025",
    align: "right",
    image: "/images/2.jpg",
    link: "https://demonichacker.github.io/TribeOnly/",
  },
  {
    name: "MYDORA",
    year: "February 2025",
    align: "left",
    image: "/images/1.jpg",
    link: "https://mydora.onrender.com/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="block transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              <SingleProject
                name={project.name}
                year={project.year}
                align={project.align}
                image={project.image}
              />
              {/* Subtle Overlay Effect */}
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
