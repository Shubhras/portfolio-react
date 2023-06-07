import React from 'react';
import SerotonedPage from "./SerotonedPage";
const Serotoned = () => {
  const categoryList = [
    {
      title: 'Test',
      description: 'TestTestTestTestTestTestTest',
      url: ''
    },
    
  ];
  return (<>
  {/* <div className="text-center mt-14 text-rose-500">
  <h4 className="font-medium text-xl">Serotoned-01</h4>
    <h1 className="font-semibold text-6xl">Projects</h1>
  </div> */}
    
    {categoryList.map((item, index) => {
      return <SerotonedPage item={item} key={index}/>;
    })}

</>);
}
export default Serotoned;