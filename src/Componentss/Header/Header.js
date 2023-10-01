import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <>
      <div className="container">
        <a href="/" className="home"><h1 className="name">Kanchan Devi</h1></a>

        <ul className="nav-list">
          <Link to="/" className="list"><li className="list">Home</li></Link>
          <Link to="/about" className="list"><li className="list">About</li></Link>
          <Link to="/project" className="list"><li className="list">Projects</li></Link>

        </ul>
      </div>
    </>
  );
};
export default Header;
