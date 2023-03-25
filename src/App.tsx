import Discover from "./pages/Discover";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <div className="sidebar">
        <Sidebar />
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Discover />} />
          </Routes>{" "}
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
