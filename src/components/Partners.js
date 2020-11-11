import React from "react";
import Slider from "react-slick";
import g1 from "../assets/images/Partners/g1.svg";
import g2 from "../assets/images/Partners/g2.svg";
import g3 from "../assets/images/Partners/g3.svg";
import g4 from "../assets/images/Partners/g4.svg";
import g5 from "../assets/images/Partners/g5.svg";
function Partners() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1274,

        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          variableWidth: true,
          infinite: true,
          centerMode: true, // enable center mode
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 888,
        settings: {
          centerMode: true, // enable center mode
          centerPadding: "20px",
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const items = [g1, g2, g3, g4, g5];
  return (
    <div className="Partners ">
      <div className="container">
        <Slider {...settings}>
          {items.map((xs) => (
            <div className="img-container" key={xs}>
              <img src={xs} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Partners;
