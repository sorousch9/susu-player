import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar bg="light" expand="md">
      <Navbar.Toggle onClick={handleToggle} />
      <Navbar.Collapse className={expanded ? "show" : ""}>
        <Nav className="flex-column">
          <Nav.Link href="#">Link 1</Nav.Link>
          <Nav.Link href="#">Link 2</Nav.Link>
          <Nav.Link href="#">Link 3</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Sidebar;
