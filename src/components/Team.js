import React from "react";
import Slider from "react-slick";
import t1 from "../assets/images/team/t1.jpg";
import t2 from "../assets/images/team/t2.jpg";
import t3 from "../assets/images/team/t3.jpg";
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
  const teams = [
    {
      img: t1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, debitis provident.",
      fullName: "Ahmed Bash",
      job: "CEO",
    },
    {
      img: t2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, debitis provident.",
      fullName: "Ahmed Bash",
      job: "CEO",
    },
    {
      img: t3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, debitis provident.",
      fullName: "Ahmed Bash",
      job: "CEO",
    },
    {
      img: t3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, debitis provident.",
      fullName: "Sara Bash",
      job: "CEO",
    },
  ];
  return (
    <section>
      <div className="container">
        <h3 className="section__title">Our Team</h3>

        <div className="cards">
          <Slider {...settings}>
            {teams.map((xs) => (
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
