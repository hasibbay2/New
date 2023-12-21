import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Blogs from "./Blogs";
import Blog from "./Blog";
import Contactid from "./Contactid";
import Error from "./Error";
import "./style.css";
import ProtectPage from "./protectPage";

function Home() {
  const [islog, setislog] = useState(false);
  return (
    <BrowserRouter>
      <h1>Hello everyone</h1>
      <nav>
        <Link className="link" to="/blogs">
          Blogs{" "}
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
        <Link className="link" to="/contactid">
          Contact Id
        </Link>
      </nav>
      <button
        onClick={() => {
          setislog(!islog);
        }}
      >
        {!islog ? "log in" : "log out"}{" "}
      </button>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/error" element={<Error />} />
        <Route path="/contactid" element={<Contactid />} />
        <Route
          path="/blogs"
          element={
            <ProtectPage islog={islog}>
              <Blogs />
            </ProtectPage>
          }
        />
        <Route path="/blogs/:title" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
