import React from 'react';
import AccordionBox from "./AccordionBox";
const Accordions = () => {
  const categoryList = [
    {
      title: 'Test',
      description: 'TestTestTestTestTestTestTest',
      url: ''
    },
    
  ];
  return (<>
  <div className="text-center mt-14 text-rose-500">
  <h4 className="font-medium text-xl">Recent Work</h4>
    <h1 className="font-semibold text-6xl">Projects</h1>
  </div>
    
    {categoryList.map((item, index) => {
      return <AccordionBox item={item} key={index}/>;
    })}

</>);
}
export default Accordions;