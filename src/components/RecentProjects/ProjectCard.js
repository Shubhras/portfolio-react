import React from "react";
const ProjectCard = ({ item }) => {
  return (<div>

    <div className="relative rounded-xl overflow-auto p-8"id="recent">
      <div className="grid grid-cols-2 gap-4 flex-wrap font-mono text-white  text-sm text-center font-bold ml-52 mt-14" id="recent-project">
        <div className="p-4  w-8/12 h-96  rounded-3xl shadow-lg mb-9 "id="card-1">
          <div className=" -mt-16 rounded-ss-3xl rounded-tr-3xl hover:text-black">
            <h3 className="p-28 font-Montserrat text-2xl"id="card-H-1">Web Design</h3>
          </div>
          <div className="-mt-8 text-left font-mono text-black hover:text-white"id="card-P-1">
            <p className="hover:text-white">Serotoned-01</p>
            <a href="Serotoned" className="inline-block rounded-md border border-transparent bg-rose-500 px-8 py-3 text-center font-medium text-white hover:bg-rose-500 mt-20 font-mono"id="card-btn-1">
            View Project
            </a>
          </div>

        </div>
        <div className="p-4 w-8/12 h-96 rounded-3xl shadow-lg "id="card-2">

          <div className=" -mt-16 rounded-ss-3xl rounded-tr-3xl hover:text-black">
            <h3 className="p-28 font-Montserrat text-2xl"id="card-H-2">Design,<br></br>Marketing</h3>
          </div>
          <div className="-mt-8 text-left font-mono text-black hover:text-white"id="card-P-2">
            <p className="">ValueCheck</p>
            <a href="" className="inline-block rounded-md border border-transparent bg-rose-500 px-8 py-3 text-center font-medium text-white hover:bg-rose-500 mt-20 font-mono"id="card-btn-2" >
            View Project
            </a>
          </div>
        </div>

        {/* <div className="p-4 w-8/12 h-96 bg-neutral-200 rounded-3xl shadow-lg mb-9 ml-14"id="card-3">

          <div className="-mt-5 -ml-4 -mr-4 bg-stone-800 h-60 rounded-ss-3xl rounded-tr-3xl">
            <h3 className="p-28 font-Montserrat text-xl"id="card-H-3">UX/UI</h3>
          </div>
          <div className="mt-8 text-left font-mono"id="card-P-3">
            <p className="text-black">Cookwise</p>
            <a href="#" className="inline-block rounded-md border border-transparent bg-rose-500 px-8 py-3 text-center font-medium text-white hover:bg-rose-500 mt-8 font-mono"id="card-btn-3">
            View Project
            </a>
          </div>
        </div>
        <div className="p-4 w-8/12 h-96 bg-neutral-200 rounded-3xl shadow-lg -ml-20"id="card-4">
          <div className="-mt-5 -ml-4 -mr-4 bg-stone-800 h-60 rounded-ss-3xl rounded-tr-3xl">
            <h3 className="p-28 font-Montserrat text-xl"id="card-H-4">Web Design</h3>
          </div>
          <div className="mt-8 text-left font-mono"id="card-P-4">
            <p className="text-black">Fredrik Nordström</p>
            <a href="#" className="inline-block rounded-md border border-transparent bg-rose-500 px-8 py-3 text-center font-medium text-white hover:bg-rose-500 mt-8 font-mono"id="card-btn-4">
            View Project
            </a>
          </div>
        </div>
        <div className="p-4  w-8/12 h-96 bg-neutral-200 rounded-3xl shadow-lg ml-72"id="card-5">
          <div className="-mt-5 -ml-4 -mr-4 bg-stone-800 h-60 rounded-ss-3xl rounded-tr-3xl">
            <h3 className="p-28 font-Montserrat text-xl" id="card-H-5">UX/UI</h3>
          </div>
          <div className="mt-8 text-left font-mono">
            <p className="text-black">Bike</p>
            <a href="#" className="inline-block rounded-md border border-transparent bg-rose-500 px-8 py-3 text-center font-medium text-white hover:bg-rose-500 mt-8 font-mono" >
            View Project
            </a>
          </div>
        </div> */}
      </div>
    </div>
  </div>);
}
export default ProjectCard;