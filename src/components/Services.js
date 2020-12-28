import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data/api";

function Services() {
  return (
    <section>
      <div className="container">
        <h3 className="section__title">Our Services</h3>

        <div className="services__cards">
          {services &&
            services.map((xs) => (
              <div className="services__card" key={xs.id}>
                <div className="card__img">
                  <img src={xs.img} alt="" />
                </div>
                <div className="card__info">
                  <h3 className="card__title">{xs.title}</h3>
                  <p className="card__description"> {xs.description.slice(0, 62) + "..."}</p>
                  <Link to={`/Services/${xs.id}`} className="card__link">
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
