import axios from "axios";
import { useEffect, useState } from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { MusicType } from "../types/music";
import { Link } from "react-router-dom";
const Header = () => {
  const [searchValue, setSearchValue] = useState<MusicType[]>([]);
  const [query, setQuery] = useState<string>("");

  const handleSearch = async (searchQuery: string) => {
    const response = await axios.get<MusicType[]>(
      `http://localhost:3009/musics?q=${searchQuery}`
    );
    return response.data;
  };

  useEffect(() => {
    if (query !== "") {
      handleSearch(query).then((searchResults) => {
        setSearchValue(searchResults);
      });
    } else {
      setSearchValue([]);
    }
  }, [query]);

  return (
    <Navbar className="header">
      <div className="header-nav">
        <div className="search-container">
          <div className="search-icon">
            <i className="bi bi-search" />
          </div>
          <input
            type="text"
            placeholder="Search for Artists, Songs, or Podcasts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {searchValue.length >= 1 && (
            <ul className="search-results">
              {searchValue.map((music) => (
                <li key={music.id}>
                  <div className="result-container">
                    <img src={music.album_img} alt={music.title}></img>
                    <Link to={`/musics/${music.id}`}>{music.title}</Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Nav className="nav-drop">
          <NavDropdown
            title={<i className="bi bi-person-fill" />}
            id="nav-dropdown"
            menuVariant="dark"
            drop="start"
          >
            <NavDropdown.Item href="#">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#">Preferences</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Log out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Header;
