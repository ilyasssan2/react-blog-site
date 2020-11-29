import React from "react";
import { Link } from "react-router-dom";
import PageTop from "../components/PageTop";
import { projects } from "../data/api";

function Projects() {
  document.title = "Projects";
  return (
    <div>
      <PageTop page="Projects" />

      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-5">
            <div className="services__cards">
              {projects &&
                projects.map((xs) => (
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
        </div>
      </div>
    </div>
  );
}

export default Projects;
