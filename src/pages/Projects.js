import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import PageTop from "../components/PageTop";
import { projects } from "../data/api";

function Projects() {
  document.title = "Projects";
  const pagePerVirew = 6;
  const [newProjects, setNewProjects] = useState(
    projects.slice(0, pagePerVirew)
  );
  const ref = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

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
    setCurrentIndex(index);
    ref.current.scrollIntoView({ behavior: "smooth" });
    setNewProjects(
      projects.slice(pagePerVirew * index, pagePerVirew * index + pagePerVirew)
    );
  };
  return (
    <div>
      <PageTop page="Projects" />

      <div className="container" ref={ref}>
        <div className="row">
          <div className="col-lg-12 mb-5">
            <div className="services__cards">
              {newProjects &&
                newProjects.map((xs) => (
                  <div className="services__card my-shadow" key={xs.title}>
                    <div className="card__img">
                      <img src={xs.img[0]} alt="" />
                    </div>
                    <div className="card__info ">
                      <h3 className="card__title">{xs.title}</h3>
                      <p className="card__description">
                        {xs.description.slice(0, 62) + "..."}
                      </p>
                      <div className="d-flex justify-content-between mt-2">
                        <Link to={`/Project/${xs.id}`} className="card__link">
                          Read more
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
                  key={xs}
                  onClick={SLiceData.bind(this, xs - 1)}
                  className={`pagination__button  ${
                    xs - 1 === currentIndex
                      ? "pagination__button__active"
                      : null
                  }`}
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
