import React from "react";
import { FaBeer } from 'react-icons/fa';
import { IconName } from "react-icons/si";
const ServicesCard = ({ item }) => {
  return (<>

<div className="text-center mt-14 text-white bg-stone-800 p-16">
  <h4 className="font-medium text-xl">What I Offer</h4>
    <h1 className="font-semibold text-6xl">Services</h1>
  

<div class="grid grid-cols-3 gap-4 text-center mt-10 ml-8">
  <div class="p-24 bg-white dark:text-indigo-400 w-96 h-96 rounded-[50px]">
  <img className="ml-14" src="web.png"/>
  <h3 className="text-black text-2xl mt-8">Web and graphic design</h3>
  </div>
  <div class="p-24 bg-white dark:text-indigo-400 w-96 h-96 rounded-[50px]">
  <img className="ml-14" src="Ui.png"/>
  <h3 className="text-black text-2xl mt-8">UX/UI</h3>
    </div>
  <div class="p-24 bg-white dark:text-indigo-400 w-96 h-96 rounded-[50px]">
  <img  className="ml-14" src="markting.png"/>
  <h3 className="text-black text-2xl mt-8">Marketing</h3>
  </div>
  </div>


  <div class="py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <h1 className="text-rose-500 text-4xl text-left mb-10">Skillsets I breathe </h1>
    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-6">
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
      <dd class="order-first text-2xl font-semibold tracking-tight text-white text-left">Design</dd>
      <hr className="-mt-4 w-20"></hr>
        <dt class="text-base leading-7 text-white text-left">Brand Identity</dt>
        <dt class="text-base leading-7 text-white text-left">UX/UI</dt>
        <dt class="text-base leading-7 text-white text-left">Graphic Design</dt>
        <dt class="text-base leading-7 text-white text-left">Web Design</dt>
        <dt class="text-base leading-7 text-white text-left">HTML/CSS</dt>
        <dt class="text-base leading-7 text-white text-left">Ad Creative Design</dt>
        
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
      <dd class="order-first text-2xl font-semibold tracking-tight text-white text-left">Marketing</dd>
      <hr className="-mt-4 w-28"></hr>
        <dt class="text-base leading-7 text-white text-left">Copy</dt>
        <dt class="text-base leading-7 text-white text-left">Meta Ads</dt>
        <dt class="text-base leading-7 text-white text-left">Google Ads</dt>
        <dt class="text-base leading-7 text-white text-left">SEO</dt>
        
      </div>
    </dl>
  </div>
</div>

<div class="-mt-14">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <h1 className="text-rose-500 text-4xl text-left mb-10">Tools I love</h1>
   
    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-6">
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
      <dd class="order-first text-2xl font-semibold tracking-tight text-white text-left">Design:</dd>
      <hr className="-mt-4 w-20"></hr>
        <dt class="text-base leading-7 text-white text-left">Adobe Suite</dt>
        <dt class="text-base leading-7 text-white text-left">Figma</dt>
        <dt class="text-base leading-7 text-white text-left">Blender</dt>
        <dt class="text-base leading-7 text-white text-left">Wix</dt>
        <dt class="text-base leading-7 text-white text-left">Squarespace</dt>
        
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
      <dd class="order-first text-2xl font-semibold tracking-tight text-white text-left">Marketing:</dd>
      <hr className="-mt-4 w-28"></hr>
        <dt class="text-base leading-7 text-white text-left">Google Analytics</dt>
        <dt class="text-base leading-7 text-white text-left">Google Keyword Research</dt>
        <dt class="text-base leading-7 text-white text-left">Ahrefs</dt>
      </div>
    </dl>
  </div>
</div>


  </div>
  </>);
}
export default ServicesCard;