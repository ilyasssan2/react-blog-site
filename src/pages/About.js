import React from "react";
import PageTop from "../components/PageTop";
import Partners from "../components/Partners";
import img1 from "../assets/images/slide1.jpg";
function About() {
  return (
    <div>
      <PageTop page="About Us" />

      <div className="container About">
        <div className="row">
          <div className="col-lg-6 py-5 pr-4">
            <h2>Lorem ipsum dolor sit amet consectetur</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              deserunt aut inventore nostrum laboriosam possimus iusto odit
              error, rerum quos accusamus recusandae quasi tempore dolorum quod
              molestias delectus illo in.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              deserunt aut inventore nostrum laboriosam possimus iusto odit
              error, rerum quos accusamus recusandae quasi tempore dolorum quod
              molestias delectus illo in.
            </p>
          </div>
          <div
            className="col-lg-6 about__img"
            style={{ backgroundImage: "url(" + img1 + ")" }}
          ></div>
        </div>

        <div className="row">
          <div
            className="col-lg-6 about__img"
            style={{ backgroundImage: "url(" + img1 + ")" }}
          ></div>
          <div className="col-lg-6 py-5 pl-4">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              deserunt aut inventore nostrum laboriosam possimus iusto odit
              error, rerum quos accusamus recusandae quasi tempore dolorum quod
              molestias delectus illo in.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              deserunt aut inventore nostrum laboriosam possimus iusto odit
              error, rerum quos accusamus recusandae quasi tempore dolorum quod
              molestias delectus illo in.
            </p>
          </div>
        </div>
      </div>
      <Partners />
    </div>
  );
}

export default About;
