import React, { useState, useEffect } from 'react';
import "./nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // You can tweak this
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Pixel Pen.</h1>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li><a href="#home" className={activeLink === "home" ? "active" : ""}>Home</a></li>
          <li><a href="#portfolio" className={activeLink === "portfolio" ? "active" : ""}>Portfolio</a></li>
          <li><a href="#case-study" className={activeLink === "case-study" ? "active" : ""}>Case Study</a></li>
          <li><a href="#services" className={activeLink === "services" ? "active" : ""}>Services</a></li>
          <li><a href="#about" className={activeLink === "about" ? "active" : ""}>About Us</a></li>
        </ul>

        <li><button className='book-call'>Book A Call</button></li>
      </div>
    </nav>
  );
}

export default Nav;