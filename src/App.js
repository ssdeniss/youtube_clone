import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail";
import Chanel from "./pages/Chanel";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import "./styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#151515" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/channel/:id" element={<Chanel />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/search/:searchTerm" element={<Search />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
