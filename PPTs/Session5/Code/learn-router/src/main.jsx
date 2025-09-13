import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesPage from "../pages/MoviesPage";
import MoviesIDPage from "../pages/MoviesIDPage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage"
import NavBar from "../components/Navbar";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
       <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage/>} /> 
        <Route path="movies" element={<MoviesPage/>} />
        <Route path="movies/:id" element={<MoviesIDPage/>} />
      </Route> 

      <Route path="*" element={<h1>Error 404 This PAge does not exit</h1>} />
    </Routes>
  </BrowserRouter>
);
