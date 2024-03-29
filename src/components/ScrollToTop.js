import React, { useEffect, useState } from "react";
import { ChevronUp } from "react-feather";
import Slide from "react-reveal/Slide";
function ScrollToTop({ value }) {
  const [show, setShow] = useState(false);
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const HandelSroll = () => {
    if (window.pageYOffset > value) {
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
  return show ? (
    <Slide bottom>
      <div className="Scroll__button" onClick={backToTop}>
        <ChevronUp />
      </div>
    </Slide>
  ) : null;
}

export default ScrollToTop;
