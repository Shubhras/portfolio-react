import React from "react";
import ServicesList from "../../pages/Home/ServicesList";
const ServicesCard = ({ item }) => {
  return (<>

<div className="text-center mt-14 text-white bg-stone-800 p-16">
  <h4 className="font-medium text-xl">What I Offer</h4>
    <h1 className="font-semibold text-6xl">Services</h1>
  

<div className="grid grid-cols-3 gap-4 flex-wrap text-center mt-10 ml-8" id="Services-card">
  <div className="p-24 bg-white text-black hover:bg-rose-500 hover:text-white w-96 h-96 rounded-[50px]">
  <a href="#">
  <img className="ml-14" src="web.png"/>
  <h3 className=" hover:text-white text-2xl mt-8">Web and graphic design</h3>
  </a>
  </div>
  <div className="p-24 bg-white text-black hover:bg-rose-500 hover:text-white w-96 h-96 rounded-[50px]">
  <a href="#">
  <img className="ml-14" src="Ui.png"/>
  <h3 className=" hover:text-white text-2xl mt-8">UX/UI</h3>
  </a>
    </div>
  <div className="p-24 bg-white text-black hover:bg-rose-500 hover:text-white w-96 h-96 rounded-[50px]">
  <a href="#">
  <img  className="ml-14" src="markting.png"/>
  <h3 className=" hover:text-white text-2xl mt-8">Marketing</h3>
  </a>
  </div>
  </div>

  <div className="mt-20">
  <ServicesList />
  </div>
    


  </div>
  </>);
}
export default ServicesCard;