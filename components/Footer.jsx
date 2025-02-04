import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Projects</h3>
            <ul>
              <li>MarketMaven</li>
              <li>Clickse</li>
              <li>Web App</li>
              <li>Backend</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>About Me</h3>
            <ul>
              <li>About Me</li>
              <li>Expertise</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li>Phone: +49 176 84771804</li>
              <li>E-mail: ebersberger.tobi@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>ebersberger.tobi@gmail.com</p>
          <p>Copyright | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
