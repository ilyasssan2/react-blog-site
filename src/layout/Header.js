import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import Slide from "react-reveal/Slide";
function Header({ vl }) {
  const [classes, setClasses] = useState();
  const [isOpen, setOpen] = useState(false);
  const [show, setShow] = useState();

  const location = useLocation();
  useEffect(() => {
    setShow(false);
    vl.current.scrollIntoView({ behavior: "smooth" });
    setOpen(false);

    setClasses("");
  }, [location, vl]);
  const HandelSroll = () => {
    if (window.pageYOffset > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", HandelSroll);
    return () => {
      window.removeEventListener("scroll", HandelSroll);
    };
  });
  return (
    <header className={`${classes} ${show ? "header__fixed" : ""} `}>
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
                <NavLink to="/Projects"  activeClassName="Active__link">
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
