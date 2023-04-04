import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Sidebar = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  const handleToggleDD = () => setIsOpen(!isOpen);

  return (
    <Navbar className="sidebar" expand="md" variant="dark">
      <NavLink to="/" className="logo">
        <img src={logo} alt="logo" />
      </NavLink>
      <Navbar.Toggle onClick={handleToggle} />
      <Navbar.Collapse className={expanded ? "show" : ""}>
        <Nav className="flex-column">
          <NavLink className="listSideBar" to="/">
            <i className="bi bi-bullseye" />
            Discover
          </NavLink>
          <NavLink className="listSideBar" to="/">
            <i className="bi bi-collection-play-fill" /> Browse
          </NavLink>
          <NavLink className="listSideBar" to="/">
            <i className="bi bi-search" /> Search
          </NavLink>
          <div className="dropdown">
            <button className="dropdown-toggle" onClick={handleToggleDD}>
              My Music
            </button>
            {isOpen && (
              <span>
                <NavLink className="listSideBar" to="/">
                  <i className="bi bi-music-note"></i> Songs
                </NavLink>
                <NavLink className="listSideBar" to="/">
                  <i className="bi bi-heart" /> Liked Songs
                </NavLink>
                <NavLink className="listSideBar" to="/">
                  <i className="bi bi-broadcast-pin" /> Podcasts
                </NavLink>
                <NavLink className="listSideBar" to="/">
                  <i className="bi bi-mic" /> Artists
                </NavLink>
                <NavLink className="listSideBar" to="/">
                  <i className="bi bi-file-earmark-music" /> Albume
                </NavLink>
                <NavLink className="listSideBar" to="/">
                  <i className="bi bi-soundwave" />
                  Genre
                </NavLink>
              </span>
            )}
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Sidebar;
