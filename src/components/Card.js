import React from "react";
import './Card.style.css';

const Card = ({project}) => {
  return(
    <div className="card-container">
      <span className="project-name">
        {project.project_info.name}
      </span>    
    </div>
  );
};

export default Card;
