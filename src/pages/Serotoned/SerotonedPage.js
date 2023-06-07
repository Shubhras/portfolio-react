import React from "react";
import { Fragment, useState } from "react";

const SerotonedPage = ({ item }) => {
  return (<>
  
  <section className="p-10">
  <div className="bg-white">
 <h2 className="text-4xl tracking-tight text-rose-500 mb-9">Serotoned-01</h2>
 <div>
 <span className="inline-flex items-center px-2 py-1 text-lg font-medium mr-9">Brand Design</span>
<span className="inline-flex items-center px-2 py-1 text-lg font-medium  mr-9">Web Design</span>
<span className="inline-flex items-center  px-2 py-1 text-lg font-medium">Ad Creative</span>
 </div>

 <div className="mt-9 mb-8 flex">
  <h3>www.serotoned.com</h3>
  <div className='ml-8 -mt-4'>
             <a href="/" className="inline-block rounded-md border border-transparent bg-rose-500 px-8 py-3 text-center font-medium text-white hover:bg-rose-500" id="download-btn" >
                Home
              </a>
           </div>
 </div>
 <div>
  <img className="w-full" src="HeroIMG.png"></img>
 </div>
 <section>
 <div className="box-1 mt-9">
 <div className="row flex justify-around">
  <div className="column">
    <h2 className="text-2xl text-rose-500 mb-2.5">Project Overview</h2>
    <p>Serotoned is a health supplement that <br></br>balances the serotonin levels in your body <br></br>for a brighter life.</p>
    <p>The task was to:</p>
    <ul className="list-disc">
      <li>Create Brand Identity </li>
      <li>Package Design</li>
      <li>Web Page</li>
      <li>Ad Creative</li>
    </ul>
 </div>
  <div className="column w-1/3">
    <h2 className="text-2xl text-rose-500 mb-2.5">Keywords:</h2>
    {/* <p>Some text..</p> */}
    <ul className="list-disc">
     <li>modern</li>
      <li>simple</li>
      <li>playful</li>
      <li>inviting</li>
    </ul>
  </div>

</div>
 </div>
 <div className="box-2 mt-9">
 <div className="row flex justify-around">
  <div className="column">
    <h2 className="text-2xl text-rose-500 mb-2.5">Challange</h2>
    <p>Serotoned is a new company without an<br></br>established customer base. The challange <br></br>was to find a brand identity that was in <br></br>line with the company vision. We needed to <br></br>create something that stands out from <br></br>other competitors in health&supplement <br></br>market.</p>
 </div>
  <div className="column w-1/3">
    <h2 className="text-2xl text-rose-500 mb-2.5">Solution</h2>
    <p> We needed to establish clarity on the <br></br>brands vision and who we are targeting.</p>
<ul className="list-disc">
  <li>be clear on company/brand vision</li>
  <li>competitor research - how can we <br></br>something different? Based on this the <br></br>color palette, typgraphy was birthed.<br></br>The concept then developed even to ad <br></br>creative. 
    </li>
</ul>
  </div>

</div>
 </div>
 </section>
 <section className="mt-10 p-10">
  <h2 className="text-center text-4xl font-medium text-[#DD316D] mb-10">Brand Identity</h2>
  <h2 className="text-2xl mb-10 text-[#DD316D]">Colors</h2>
  <div className="flex flex-nowrap justify-center">
    <div className="">
    <div className="w-52 h-72 mr-2.5 rounded-xl bg-[#8E87FF]"></div>
    <div className=" w-52 mt-6 text-center text-[#8E87FF]">Hex: 8E87FF </div>
    </div>

    <div className="">
    <div className="w-52 h-72 mr-2.5 rounded-xl bg-[#B68FFF]"></div>
    <div className="w-52 mt-6 text-center text-[#8E87FF]">Hex: B68FFF</div>
    </div>
  
  <div>
  <div className="w-52 h-72 mr-2.5 rounded-xl bg-[#84DBFF]"></div>
  <div className="w-52 mt-6 text-center text-[#8E87FF]">Hex: 84DBFF</div>
  </div>

  <div>
  <div className="w-52 h-72 mr-2.5 rounded-xl bg-[#54C2D7]"></div>
  <div className="w-52 mt-6 text-center text-[#8E87FF]">Hex: 54C2D7</div>
  </div>

 <div>
 <div className="w-52 h-72 mr-2.5 rounded-xl bg-[#FFFFFF] border border-[#54C2D7]"></div>
 <div className="w-52 mt-6 text-center text-[#8E87FF]">Hex: FFFFFF</div>
 </div>
</div>

<h2 className="text-2xl mt-10 text-[#DD316D]">Typography</h2>

<div className="box-1 mt-9">
 <div className="row flex justify-around">
  <div className="column">
    <h2 className="text-2xl font-bold mb-1.5">Poppins</h2>
    <h2 className="text-xl font-semibold mb-1.5">Poppins</h2>
    <h2 className="text-lg font-normal">Poppins</h2>
 </div>
  <div className="column w-1/3">
    <h2 className="text-2xl font-bold mb-1.5">Bold</h2>
    <h2 className="text-xl font-semibold mb-1.5">SemiBold</h2>
    <h2 className="text-lg font-normal">Regular</h2>
  </div>
</div>
 </div>

 <h2 className="text-2xl mt-10 text-[#DD316D]">Logo</h2>
 <div className="">
  <img className="w-16 ml-40" src="Logo.png"></img>
 </div>
 </section>



 <section className="mt-10">
  <h2 className="text-center text-5xl font-medium text-[#DD316D] mb-10">Packaging Design</h2>
  <div className="box-1 mt-9">
 <div className="row flex justify-around">
  <div className="column">
    <img src="sero-bigger-file-100 1.png"/>
 </div>
  <div className="column">
  <img src="Sero-Portf-unicorn 1.png"/>
  </div>
</div>
 </div>
  </section>

  <section className="mt-20">
  <h2 className="text-center text-5xl font-medium text-[#DD316D] mb-10">Web Page</h2>
  <div className="">
  <img src="GifWeb.jpg"/>
  </div>
  </section>


  <section className="mt-10">
  <h2 className="text-center text-5xl font-medium text-[#DD316D] mb-10">Ad Creative</h2>
  <div className="ml-96">
  <img src="AdCreative1.png"/>
  </div>
  <div className="box-1 mt-9">
 <div className="row flex justify-around">
  <div className="column">
    <img src="pill 1.png"/>
 </div>
  <div className="column">
  <img src="WINGS 1.png"/>
  </div>
</div>
 </div>
  </section>
  <div className="icon mt-10 mr-10 text-end"> 
  <i className="fa fa-chevron-up" style={{color: "#36213E",}}></i>
  </div>
 
    </div>
  </section>
 
  
  
  </> );
}
export default SerotonedPage;