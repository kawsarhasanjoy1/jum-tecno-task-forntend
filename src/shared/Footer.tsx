import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5 shadow-sm">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-primary">JUM-TECNO</h5>
            <p className="small">
              A simple way to track your emotions, reflect on your journey, and
              build mental resilience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase fw-semibold">Quick Links</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="/" className="text-decoration-none text-light">
                  Home
                </a>
              </li>
              <li>
                <a href="/history" className="text-decoration-none text-light">
                  Mood History
                </a>
              </li>
              <li>
                <a href="/summary" className="text-decoration-none text-light">
                  Weekly Summary
                </a>
              </li>
              <li>
                <a href="/login" className="text-decoration-none text-light">
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase fw-semibold">Contact Us</h6>
            <p className="small mb-1">
              Email:{" "}
              <a href="mailto:support@moodtrackr.com" className="text-light">
                support@moodtrackr.com
              </a>
            </p>
            <p className="small mb-0">Phone: +880 123 456 789</p>
            <div className="mt-2">
              <a href="#" className="text-light me-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light me-2">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light" />
        <div className="text-center small">
          &copy; {new Date().getFullYear()} MoodTrackr. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
