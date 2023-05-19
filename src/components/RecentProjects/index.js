import React from "react";
import ProjectCard from "./ProjectCard";
const RecentProjects = () => {
  const categoryList = [
    {
      title: 'Test',
      description: 'TestTestTestTestTestTestTest',
      url: ''
    },
    // {
    //   title: 'Tes1 t',
    //   description: 'TestTestTestTestTestTestTest',
    //   url: ''
    // },
    // {
    //   title: 'Test',
    //   description: 'TestTestTestTestTestTestTest',
    //   url: ''
    // },
    // {
    //   title: 'Tes1 t',
    //   description: 'TestTestTestTestTestTestTest',
    //   url: ''
    // },
    // {
    //   title: 'Test',
    //   description: 'TestTestTestTestTestTestTest',
    //   url: ''
    // },
    // {
    //   title: 'Tes1 t',
    //   description: 'TestTestTestTestTestTestTest',
    //   url: ''
    // },
    // {
    //   title: 'Test',
    //   description: 'TestTestTestTestTestTestTest',
    //   url: ''
    // },
    // {
    //   title: 'Tes1 t',
    //   description: 'TestTestTestTestTestTestTest',
    //   url: ''
    // }
  ];
  return (<>
  <div className="text-center mt-14 text-rose-500">
  <h4 className="font-medium">Recent Work</h4>
    <h1 className="font-semibold text-2xl">Projects</h1>
  </div>
    
    {categoryList.map((item, index) => {
      return <ProjectCard item={item} key={index}/>;
    })}
  </>);
}
export default RecentProjects;