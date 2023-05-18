import React from "react";
import ProjectCard from "./ProjectCard";
const RecentProjects = () => {
  const categoryList = [
    {
      title: 'Test',
      description: 'TestTestTestTestTestTestTest',
      url: ''
    },
    {
      title: 'Tes1 t',
      description: 'TestTestTestTestTestTestTest',
      url: ''
    },
    {
      title: 'Test',
      description: 'TestTestTestTestTestTestTest',
      url: ''
    },
    {
      title: 'Tes1 t',
      description: 'TestTestTestTestTestTestTest',
      url: ''
    },
    {
      title: 'Test',
      description: 'TestTestTestTestTestTestTest',
      url: ''
    },
    {
      title: 'Tes1 t',
      description: 'TestTestTestTestTestTestTest',
      url: ''
    },
    {
      title: 'Test',
      description: 'TestTestTestTestTestTestTest',
      url: ''
    },
    {
      title: 'Tes1 t',
      description: 'TestTestTestTestTestTestTest',
      url: ''
    }
  ];
  return (<>
    <h1>Recent Work</h1>
    {categoryList.map((item, index) => {
      return <ProjectCard item={item} key={index}/>;
    })}
  </>);
}
export default RecentProjects;