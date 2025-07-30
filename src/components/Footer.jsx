import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>&copy; {new Date().getFullYear()} MyBlog. All rights reserved.</p>
          <p>Rasika Hande &mdash; Full Stack Developer</p>
        </div>
        <div className="footer-right">
          <a
            href="https://www.linkedin.com/in/rasika-hande"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          > 
          LinkedIn
          </a>
          <a
            href="https://github.com/RasikaHande"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
          GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
