import React from "react";

const Card = (project) => {
  console.log(project);
  return <div>{<div>{project.project_info.name}</div>}</div>;
};

export default Card;
