import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Blogs from "./Blogs";
import Blog from "./Blog";

function Home() {
  return (
    <BrowserRouter>
      <h1>Hello everyone</h1>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:title" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
