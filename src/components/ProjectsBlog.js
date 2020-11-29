import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/api";
function Blog() {
  return (
    <section className="Blog">
      <div className="container">
        <h3 className="section__title">Our Projects</h3>

        <div className="services__cards">
          {projects &&
            projects.slice(0, 3).map((xs) => (
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
