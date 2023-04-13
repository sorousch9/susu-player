import { Container, Row } from "react-bootstrap";
import PlaylistSlider from "../components/PlaylistSlider";
import { SusuExclusive } from "../components/SusuExclusive";
import { HotTracks } from "../components/HotTracks";
import { Featured } from "../components/Featured";
import { DjMixed } from "../components/DjMixed";
import { Footer } from "../components/Footer";
import TrendingArtists from "../components/TrendingArtists";
import { FilteredMusicsType } from "../types/filteredMusicsType";
import { Playlist } from "../types/playlist";

interface DiscoverProps {
  filteredMusics: FilteredMusicsType;
  playlist: Playlist[];
}
const Discover: React.FC<DiscoverProps> = ({ filteredMusics, playlist }) => {
  return (
    <Container>
      <Row className="discover">
        <PlaylistSlider playlist={playlist} />
        <SusuExclusive exclusiveMusic={filteredMusics.exclusive} />
        <Featured remixMusic={filteredMusics.remix} />
        <HotTracks topMusics={filteredMusics.topMusics} />
        <TrendingArtists />
        <DjMixed remixMusic={filteredMusics.remix} />
        <Footer />
      </Row>
    </Container>
  );
};

export default Discover;
