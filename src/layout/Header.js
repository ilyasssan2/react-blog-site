import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import Slide from "react-reveal/Slide";
function Header() {
  const [classes, setClasses] = useState();
  const [isOpen, setOpen] = useState(false);
  const ref = useRef();
  const location = useLocation();
  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
    setClasses("");
  }, [location]);
  return (
    <header className={classes}>
      <div ref={ref}></div>
      <div className="container">
        <nav>
          <div className="logo">
            <h4>
              Fly-<span>Web</span>
            </h4>
          </div>

          <div
            onClick={() => {
              setClasses(!classes ? "Open" : "");
            }}
            className="Hamburger"
          >
            <Hamburger toggled={isOpen} toggle={setOpen} size={26} />
          </div>

          <div className="overlay"></div>
          <Slide right={classes ? true : false}>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="Active__link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/Projects" activeClassName="Active__link">
                  Projects
                </NavLink>
              </li>

              <li>
                <NavLink to="/Services" activeClassName="Active__link">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/About" activeClassName="Active__link">
                  About
                </NavLink>
              </li>

              <li>
                <Link to="/Contact" className="btn__primary ">
                  Contact
                </Link>
              </li>
            </ul>
          </Slide>
        </nav>
      </div>
    </header>
  );
}

export default Header;
