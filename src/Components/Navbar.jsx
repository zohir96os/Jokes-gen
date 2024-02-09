import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container nav-container">
      <nav className="navbar">
        <Link to="/blag">Blag</Link>
        <Link to="/blags">Blags</Link>
      </nav>
    </div>
  );
};

export default Navbar;
