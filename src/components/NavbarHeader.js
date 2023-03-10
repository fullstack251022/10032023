import './NavbarHeader.css';

const NavbarHeader = () => {
  return (
    <header>
      <nav>
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#navbar-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand">
          My Website
          </a>

        </div>
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              Home
            </li>
            <li>
              About
            </li>
            <li>
              Contact
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavbarHeader;