import React from "react";
import ServicesCard from "./ServicesCard";
const Services = () => {
  const categoryList = [
    {
      title: 'Test',
      description: 'TestTestTestTestTestTestTest',
      url: ''
    },
    
  ];
  return (<>
  {/* <div className="text-center mt-14 text-white bg-stone-800">
  <h4 className="font-medium">What I Offer</h4>
    <h1 className="font-semibold text-2xl">Services</h1>
  </div> */}
    
    {categoryList.map((item, index) => {
      return <ServicesCard item={item} key={index}/>;
    })}
  </>);
}
export default Services;