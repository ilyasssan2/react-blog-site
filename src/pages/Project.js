import React from "react";
import { projects } from "../data/api";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import PageTop from "../components/PageTop";
function Project({ match }) {
  const project = projects[match.params.id - 1];
  document.title = project ? project.title : "";
  return (
    <div>
      <PageTop page={project ? project.title : "Home"} />
      <div className="container my-5">
        <div className="row">
          <div className="col-6 ">
            <LightgalleryProvider>
              <div className="image__container">
                {project.img &&
                  project.img.map((img) => (
                    <LightgalleryItem group="group 1" thumb={img} src={img}>
                      <img src={img} alt="img" style={{ width: "100%" }} />
                    </LightgalleryItem>
                  ))}
              </div>
            </LightgalleryProvider>
          </div>
          <div className="col-6 project">
            <h1>{project.title && project.title}</h1>
            <div className="divider"></div>
            <p> {project.description && project.description} </p>
            <div className="project__info">
              <div className="col-12">
                <div className="col-6 "></div>
                <div className="col-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
