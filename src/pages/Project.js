import React from "react";
import { projects } from "../data/api";
function Project({ match }) {
  const project = projects[match.params.id - 1];
  return <div className="container">{project.title && project.title}</div>;
}

export default Project;
