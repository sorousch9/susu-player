import { useState } from "react";
import { Container, Navbar, Nav, NavDropdown, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Navbar className="header">
      <Container fluid>
        <Col md={3} xl={2} className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </Col>
        <Col md={9} xl={10} className="header-nav">
          <div className="search-container">
            <div className="search-icon">
              <i className="bi bi-search" />
            </div>
            <input
              type="text"
              placeholder="Search for Artists, Songs, or Podcasts..."
              value={searchValue}
              onChange={handleSearch}
            />
          </div>

          <Nav>
            <NavDropdown
              title={<i className="bi bi-person-fill" />}
              id="nav-dropdown"
              menuVariant="dark"
              drop="start"
              className="nav-dropD"
            >
              <NavDropdown.Item href="#">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Preferences</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Col>
      </Container>
    </Navbar>
  );
};

export default Header;
