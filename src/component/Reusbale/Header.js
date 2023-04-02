import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar bg="black" expand="lg" variant="dark" className='fixed-top p-2'>
      <div className='container-fluid'>
        <Navbar.Brand href="/"  className='portfolio_style'>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='text-white fs-6 hover'>Home</Nav.Link>
            <Nav.Link href="/skills" className='text-white fs-6 hover'>Skills</Nav.Link>
            <Nav.Link href="/about" className='text-white fs-6 hover'>About</Nav.Link>
            <Nav.Link href="/about" className='text-white fs-6 hover'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
export default Header;