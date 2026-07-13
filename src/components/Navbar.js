import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <nav className="navbar-left">
        <a href="/"><b>Michigan</b> Research</a>
      </nav>
      <nav className="navbar-inner">
        <a href="/Research">Research</a>
        <a href="/Resources">Resources</a>
        <a href="/Careers">Careers</a>
        <a href="/Blog">Blog</a>
        <a href="/Newsletter">Newsletter</a>
        <a href="/About">About</a>
      </nav>
    </nav>
  );
}

export default Navbar;