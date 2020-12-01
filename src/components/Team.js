import React from "react";
import Slider from "react-slick";
import { team } from "../data/api";

function Team() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,

    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1274,

        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: true,
          infinite: true,
          centerMode: true, // enable center mode
        },
      },
      {
        breakpoint: 888,
        settings: {
          centerMode: true, // enable center mode

          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="container  overflow-hidden">
        <h3 className="section__title">Our Team</h3>

        <div className="cards">
          <Slider {...settings}>
            {team &&
              team.map((xs) => (
                <div key={xs.fullName} className=" card__team">
                  <div className="d-flex ">
                    <img className="card__img" src={xs.img} alt="" />

                    <div className="card__info">
                      <h4>{xs.fullName}</h4>
                      <span>{xs.job}</span>
                    </div>
                  </div>
                  <p className="card__description">{xs.description}</p>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Team;
