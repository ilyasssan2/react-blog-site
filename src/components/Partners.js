import React from "react";
import Slider from "react-slick";
import { partners } from "../data/api";
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
  return (
    <div className="Partners ">
      <div className="container">
        <Slider {...settings}>
          {partners &&
            partners.map((xs) => (
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
