import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Hey there! My love for technology has led me to the world of frontend development.
        After high school, I started my career where I honed my skills in HTML5, CSS, JavaScript, React,
        and React Native. Over the years, I’ve completed about 6 frontend projects, working closely 
        with backend developers and building full-stack applications.
        <br /> <br />
        I specialize in frontend development but also have a bit of knowledge 
        in backend technologies like Socket.io, MongoDB, and Node.js, allowing me to build full-stack apps.
        I’m always excited to connect with others in the tech community, so if you want to discuss frontend development,
        React, or explore any collaborations, feel free to contact me!
      </p>

      {/* My Resume Button */}
      <a
        href="/public/images/IO-Resume.pdf"  // Replace with your actual resume link
        download  // Forces the file to be downloaded when clicked
        className="px-4 py-2 rounded-full text-xl font-bold text-white border-red-500 border flex items-center gap-1 
        bg-gradient-to-r from-darkRed to-red-500 transition-all duration-500 
        hover:scale-110 hover:border-black hover:shadow-redShadow cursor-pointer mt-10 md:self-start sm:self-center"
      >
        <span className="cursor-pointer text-white hover:text-cyan transition-all duration-500">
          My Resume
        </span>
      </a>
    </div>
  );
};

export default AboutMeText;
