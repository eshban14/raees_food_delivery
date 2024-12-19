import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../../styles/HeaderStyle.css";
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo/logo.png";

function Header() {
  const [nav, setNav] = useState(false);

  // scroll Navbar
  const changevalueonscroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    console.log(scrollValue); // Check scroll value for debugging
    if (scrollValue > 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  // Add and clean up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", changevalueonscroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", changevalueonscroll);
    };
  }, []); // Empty array to run effect only once when component mounts

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`navbar ${nav ? "sticky" : ""}`}>
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className='logo'>
              <img src={Logo} alt="Logo" className='img_fluid' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/menu">Our Menu</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className='roundpoint'>2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
