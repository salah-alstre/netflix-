import React from 'react';
import './Footer.css';
import linkin_icon from '../../assets/linkIn_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import github_icon from '../../assets/github_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icon">
        <a href="https://github.com/salah-alstre" target="_blank" rel="noopener noreferrer">
          <img src={github_icon} alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/sala7_25_9/" target="_blank" rel="noopener noreferrer">
          <img src={instagram_icon} alt="Instagram" />
        </a>
        <a href="https://x.com/salahalden91009" target="_blank" rel="noopener noreferrer">
          <img src={twitter_icon} alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com/in/salah-alden-8aba5a322/" target="_blank" rel="noopener noreferrer">
          <img src={linkin_icon} alt="Linkin" />
        </a>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>@ 2023-2024 Netflix, Error.</p>
    </div>
  );
}

export default Footer;
