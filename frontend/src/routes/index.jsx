import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Navbar from "../components/navbar";
import Feliz from "../pages/feelings/feliz";
import Triste from "../pages/feelings/triste";
import Puto from "../pages/feelings/puto";
import Playlists from "../pages/playlists";
import Admin from "../pages/admin";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/about/index.jsx" element={<About />} />
        <Route path="/pages/feelings/feliz.jsx" element={<Feliz />} />
        <Route path="/pages/feelings/triste.jsx" element={<Triste />} />
        <Route path="/pages/feelings/puto.jsx" element={<Puto />} />
        <Route path="/pages/playlists/index.jsx" element={<Playlists />} />
        <Route path="/pages/admin/index.jsx" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
