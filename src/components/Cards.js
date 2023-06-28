import React from "react";
import Card from "./Card";
const Cards = (projects) => {
  let array = [];
  for (let i = 0; i < projects.projects.length; i++) {
    array.push(projects.projects[i]);
  }
  // console.log(array);
  // {array.map((project) => {
  return (
    <div className="cards">
      {array.map((project) => {
        // <Card key={project.id} project={project}
      })}
    </div>
  );
};

export default Cards;
