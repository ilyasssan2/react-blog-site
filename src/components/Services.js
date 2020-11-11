import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/images/slide3.jpg";
import img2 from "../assets/images/slide2.jpg";
import img3 from "../assets/images/slide1.jpg";
function Services() {
  const items = [
    {
      title: "fast net",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum.",
      img: img2,
      link: "/",
    },
    {
      title: "Security net",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum.",
      img: img3,
      link: "/",
    },
    {
      title: "more privacy",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum.",
      img: img1,
      link: "/",
    },
  ];
  return (
    <section>
      <div className="container">
        <h3 className="section__title">Our Services</h3>

        <div className="services__cards">
          {items.map((xs) => (
            <div className="services__card" key={xs.title}>
              <div className="card__img">
                <img src={xs.img} alt="" />
              </div>
              <div className="card__info">
                <h3 className="card__title">{xs.title}</h3>
                <p className="card__description">{xs.description}</p>
                <Link to={xs.link} className="card__link">
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
