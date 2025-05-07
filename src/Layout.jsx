import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./pages/Footer.jsx";

function Layout() {
  return (
    <>
      <div className="bg-[#161B22] h-auto text-[#C9D1D9]">
        <Navbar />
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Layout;
