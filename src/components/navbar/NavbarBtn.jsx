import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-red-500 border flex items-center gap-1 
      bg-gradient-to-r from-darkRed to-red-500 transition-all duration-500 
      hover:scale-110 hover:border-black hover:shadow-redShadow cursor-pointer">
      
      <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
        Hire Me
      </Link>
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;