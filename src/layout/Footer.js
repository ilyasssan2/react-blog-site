import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "react-feather";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row footer1 flex-row justify-content-between ">
          <div className="col-lg-3 col-6 mb-2">
            <h5>
              FLY-WEB <span>Do what you want</span>{" "}
            </h5>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              esse non, amet id facere odit fugit!
            </p>
          </div>

          <div className="col-lg-2 col-6 mb-2 ">
            <h5>Pages</h5>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/Projects">Projects</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li>
                <Link to="/About">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-6 mb-2">
            <h5>Contact us</h5>
            <ul>
              <li className="mb-2">Put your addresse right here</li>
              <li>P: your Number</li>
              <li>F: your Fax</li>
              <li>E: email@test.com</li>
            </ul>
          </div>
          <div className="col-lg-3 col-6 mb-2">
            <h5>Follow us</h5>
            <ul className="d-flex ul__social">
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <Facebook />{" "}
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <Twitter />{" "}
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <Youtube />{" "}
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <Instagram />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer2  ">
        <span> Copyright © 2020. All right reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
