import React from "react";

import Slide from "react-slick";
import { Link } from "react-router-dom";
import img1 from "../assets/images/slide1.jpg";
import img2 from "../assets/images/slide3.jpg";
import { ChevronLeft, ChevronRight } from "react-feather";

function SliderHome() {
  const items = [
    {
      title: "The privacy is our job",
      img: img1,
      link: "/",
      button: "Explore",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo  labore laboriosam fugiat inventore.",
    },

    {
      title: "Making the web much better 2",
      img: img2,
      link: "/",
      button: "learn more",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo  labore laboriosam fugiat inventore.",
    },
  ];
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    fade: true,
    nextArrow: <Next />,
    prevArrow: <Back />,
  };
  return (
    <div>
      <Slide {...settings}>
        {items.map((xs) => (
          <div key={xs.title}>
            <div
              className="slide__item "
              style={{
                background: "url(" + xs.img + ")",
              }}
            >
              <div className="slide__content overlay-2">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-12">
                      <h1 className="slide__title">{xs.title}</h1>
                      <p className="slide__para">{xs.description}</p>
                      <Link className="btn__primary " to={xs.link}>
                        {xs.button}
                        <ChevronRight size={22} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

const Next = ({ onClick }) => {
  return (
    <div onClick={onClick} className="swiper-button-next swiper-button">
      <ChevronRight size={28} />
    </div>
  );
};
const Back = ({ onClick }) => {
  return (
    <div onClick={onClick} className="swiper-button-prev swiper-button">
      <ChevronLeft size={28} />
    </div>
  );
};
export default SliderHome;
