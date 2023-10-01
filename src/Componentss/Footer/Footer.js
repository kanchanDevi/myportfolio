import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import './index.css';

const Footer = () => {
  return (
    <>    
    <div className="footer">
      <a href="https://www.instagram.com/s.k_kanchan16/?next=%2F" target="_blank" className="icons-styles">
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/in/kanchandevi/"   target="_blank" className="icons-styles">
     
        <FaLinkedin />
      </a>

      <a href="https://github.com/kanchanDevi" target="_blank" className="icons-styles">
        {" "}
        <FaGithub />{" "}
      </a>

    </div>
    <p className="para">This is my work portfolio. Please get in touch if you want to talk..</p>
    
    </>

  );
};
export default Footer;
