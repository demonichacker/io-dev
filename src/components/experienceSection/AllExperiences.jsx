import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Frontend Development",
    company: "Covenant University",
    date: "2022 - 2023",
    responsibilities: [
      "I graduated from Covenant University, specializing in frontend development, where I built a strong foundation in creating dynamic, user-friendly web applications using JavaScript, React, and React Native.",
    ],
  },
  {
    job: "Cyber Security",
    company: "Covenant University",
    date: "2022 - 2023",
    responsibilities: [
      "I graduated from Covenant University, specializing in cybersecurity, where I developed a strong understanding of security principles, network protection, and safeguarding digital systems from threats.",
    ],
  },
  {
    job: "BSC Information Technology ",
    company: "Bells University of Technology",
    date: "2023 - Present",
    responsibilities: [
      "I am currently studying Information Technology at Bells University of Technology, where I am building on my knowledge of software development, networking, and systems administration.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <div key={index} className="flex items-center gap-4">
            <SingleExperience experience={experience} />
            {index < 2 && (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AllExperiences;