import React from "react";
const ProjectCard = ({item}) => {
  return (<>
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
    </>);
}
export default ProjectCard;