import { Route, BrowserRouter, Routes, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Navbar from "../components/navbar";
import Playlists from "../pages/playlists";
import Admin from "../pages/admin";
import Tag from "../pages/tag/index.jsx"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/tags/:tag" element={<Tag />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
