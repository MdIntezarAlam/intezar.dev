import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar bg="black" expand="lg" variant="dark">
      <div className='container-fluid'>
        <Navbar.Brand href="/" >Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='text-white fs-6 hover'>Home</Nav.Link>
            <Nav.Link href="/skills" className='text-white fs-6 hover'>Skills</Nav.Link>
            <Nav.Link href="/portfolio" className='text-white fs-6 hover'>Portfolio</Nav.Link>
            <Nav.Link href="/about" className='text-white fs-6 hover'>About</Nav.Link>
            <NavDropdown className='text-white fs-6 hover' title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" >Project</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" >
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
export default Header;