import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageTop from "../components/PageTop";
import { projects } from "../data/api";

function Projects() {
  document.title = "Projects";
  const pagePerVirew = 6;
  const [newProjects, setNewProjects] = useState();
  useEffect(() => {
    SLiceData(0);
  }, []);
  let paganotionButton = [];
  for (let i = 0; i < projects.length / pagePerVirew; i++) {
    paganotionButton.push(i + 1);

    if (
      i === projects.length / pagePerVirew &&
      projects.length / pagePerVirew !== 0
    ) {
      paganotionButton.push(paganotionButton.length + 1);
    }
  }
  const SLiceData = (index) => {
    console.log(pagePerVirew * index, pagePerVirew * index + pagePerVirew);
    setNewProjects(
      projects.slice(pagePerVirew * index, pagePerVirew * index + pagePerVirew)
    );
  };
  return (
    <div>
      <PageTop page="Projects" />

      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-5">
            <div className="services__cards">
              {newProjects &&
                newProjects.map((xs) => (
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
        <div className="row">
          <div className="pagination__container">
            {paganotionButton &&
              paganotionButton.map((xs) => (
                <span
                  onClick={SLiceData.bind(this, xs - 1)}
                  className="pagination__button "
                >
                  {xs}
                </span>
              ))}

            {/* <span className="pagination__button">2</span>
            <span className="pagination__button">3</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
