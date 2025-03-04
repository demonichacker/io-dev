import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/ilorioluwole-dev/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/demonichacker" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/heisdadev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
