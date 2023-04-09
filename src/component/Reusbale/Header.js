const Header = () => {
  return (
    <nav className="navbar px-1 navbar-expand-lg py-3 bg-dark" data-bs-theme="dark" id='home'>
      <div className="container-fluid">
        <a className="navbar-brand portfolio_style" href="#home">Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <a className="nav-link text-white fs-6  active" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-white fs-6  active" aria-current="page" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fs-6 " href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fs-6 " href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;