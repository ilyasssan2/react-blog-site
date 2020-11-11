import React from "react";
import img1 from "../assets/images/slide3.jpg";
import img2 from "../assets/images/slide2.jpg";
import img3 from "../assets/images/slide1.jpg";
import { Link } from "react-router-dom";

function Blog() {
  const items = [
    {
      title: "internet of things",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum.",
      img: img2,
      link: "/",
      date: "AUGUST 5, 2019",
    },
    {
      title: "fast net",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum.",
      img: img3,
      link: "/",
      date: "AUGUST 5, 2020",
    },
    {
      title: "Last update",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum.",
      img: img1,
      link: "/",
      date: "AUGUST 5, 2020",
    },
  ];
  return (
    <section className="Blog">
      <div className="container">
        <h3 className="section__title">Blog Posts</h3>

        <div className="services__cards">
          {items.map((xs) => (
            <div className="services__card my-shadow" key={xs.title}>
              <div className="card__img">
                <img src={xs.img} alt="" />
              </div>
              <div className="card__info ">
                <h3 className="card__title">{xs.title}</h3>
                <p className="card__description">{xs.description}</p>
                <div className="d-flex justify-content-between mt-2">
                  <Link to={xs.link} className="card__link">
                    Learn more
                  </Link>
                  <label className="card__date">{xs.date}</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
