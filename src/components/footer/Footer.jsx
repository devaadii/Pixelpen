import React from 'react';
import './Footer.css';
import { FaTwitter, FaFacebookF, FaInstagram,FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-col">
            <h4>Get Started</h4>
            <ul>
              <li>Plans & Pricing</li>
              <li>Book a Call</li>
              <li>Request a Custom Quote</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li style={{color:"white",fontStyle:"bold"}}>Work with Us</li>
              <li 
  onClick={() => {
    window.location.href = "mailto:info@pixelpen.in?subject=Video Editing Inquiry – Pixelpen Media&body=Hi Pixelpen Media team,";
  }}
  style={{ cursor: 'pointer' }}
>
  Contact Us
</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>Blogs / Insights</li>
              <li>FAQ</li>
             
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li>Terms & Conditions*</li>
              <li>Privacy Policy</li>
              <li>Refund & Cancelation Policy</li>
            </ul>
          </div>

          <a
  href="https://x.com/PixelpenMedia?t=t0avYlK-5KmlgLNItkvghQ&s=09"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: 'none', color: 'inherit' }}
>
          <div className="footer-tweet">
            <div className="tweet-header">
              <div className="tweet-avatar">P.</div>
              <div className="tweet-user">
                <strong>PixelPen Media</strong>
                <span>@PixelpenMedia</span>
              </div>
              <div className="tweet-icon">
                <FaTwitter />
              </div>
            </div>
            <p className="tweet-text">
            Pixel perfect isn’t a style. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br/>It’s our standard.
            </p>
          </div></a>
        </div>

        <div className="footer-bottom">
          <div className="footer-brand">PixelPen Media</div>
          <div id='copyright'>
          ©️ 2024 PixelPen Media. All rights reserved.
          </div>
          <div className="footer-socials">
            <div className="social-icon">
              <a href='https://www.instagram.com/pixelpen.in?igsh=MTM2MW9paGp5MnltbA==' style={{ textDecoration : 'none', color:'inherit'}}>
              <FaInstagram /></a>
            </div>
            <div className="social-icon">
  
              <FaLinkedin />
            </div>
            <div className="social-icon">
            <a href='https://x.com/PixelpenMedia?t=t0avYlK-5KmlgLNItkvghQ&s=09'  style={{ textDecoration: 'none', color: 'inherit' }}>
              <FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;