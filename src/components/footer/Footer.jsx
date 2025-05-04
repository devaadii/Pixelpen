import React from 'react';
import './Footer.css';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-col">
            <h4>Platform</h4>
            <ul>
              <li>Plans & Pricing</li>
              <li>Personal AI Manager</li>
              <li>AI Business Writer</li>
              <li>AI Data Processing</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Work With Us</li>
              <li>Blog & News</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>Documentation</li>
              <li>Free Demo</li>
              <li>Press Conferences</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookies Policy</li>
              <li>Data Processing</li>
            </ul>
          </div>

          <div className="footer-tweet">
            <div className="tweet-header">
              <div className="tweet-avatar">P.</div>
              <div className="tweet-user">
                <strong>Pixel Pen.</strong>
                <span>@PixelPen</span>
              </div>
              <div className="tweet-icon">
                <FaTwitter />
              </div>
            </div>
            <p className="tweet-text">
              We’ve just announced new feature that would help you increase your experience of using PixelPen!
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-brand">Pixel Pen.</div>
          <div className="footer-socials">
            <div className="social-icon">
              <FaInstagram />
            </div>
            <div className="social-icon">
              <FaFacebookF />
            </div>
            <div className="social-icon">
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;