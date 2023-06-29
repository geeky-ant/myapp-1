import React from "react";
import Card from "./Card";

const Cards = (projects) => {
  let projectData = [];
  for (let i = 0; i < projects.projects.length; i++) {
    projectData.push(projects.projects[i]);
  }

  return (
    <div>
      {
        projectData.map(project => (
          <Card key = {project.id} project = {project} />
        ))
      } 
    </div>
  );
};

export default Cards;
