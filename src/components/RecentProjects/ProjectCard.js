import React from "react";
const ProjectCard = ({ item }) => {
  return (<div>

    <div className="relative rounded-xl overflow-auto p-8">
      <div className="grid grid-cols-2 gap-4 font-mono text-white text-sm text-center font-bold ml-52 mt-14">
        <div className="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400 w-8/12 h-96 bg-neutral-200 rounded-3xl shadow-lg mb-9 ml-14">
          <div className="-mt-5 -ml-4 -mr-4 bg-stone-800 h-60 rounded-ss-3xl rounded-tr-3xl">
            <h3 className="p-28 font-Montserrat text-xl">Design,Marketing</h3>
          </div>
          <div className="mt-8 text-left font-mono">
            <p className="text-black">ValueCheck</p>
            <a href="#" className="inline-block rounded-md border border-transparent bg-rose-500 px-8 py-3 text-center font-medium text-white hover:bg-rose-500 mt-8 font-mono" >
            View Project
            </a>
          </div>

        </div>
        <div className="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400 w-8/12 h-96 bg-neutral-200 rounded-3xl shadow-lg -ml-20">

          <div className="-mt-5 -ml-4 -mr-4 bg-stone-800 h-60 rounded-ss-3xl rounded-tr-3xl">
            <h3 className="p-28 font-Montserrat text-xl">Design</h3>
          </div>
          <div className="mt-8 text-left font-mono">
            <p className="text-black">Serotoned-01</p>
            <a href="#" className="inline-block rounded-md border border-transparent bg-rose-500 px-8 py-3 text-center font-medium text-white hover:bg-rose-500 mt-8 font-mono" >
            View Project
            </a>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400 w-8/12 h-96 bg-neutral-200 rounded-3xl shadow-lg mb-9 ml-14">

          <div className="-mt-5 -ml-4 -mr-4 bg-stone-800 h-60 rounded-ss-3xl rounded-tr-3xl">
            <h3 className="p-28 font-Montserrat text-xl">UX/UI</h3>
          </div>
          <div className="mt-8 text-left font-mono">
            <p className="text-black">Cookwise</p>
            <a href="#" className="inline-block rounded-md border border-transparent bg-rose-500 px-8 py-3 text-center font-medium text-white hover:bg-rose-500 mt-8 font-mono" >
            View Project
            </a>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400 w-8/12 h-96 bg-neutral-200 rounded-3xl shadow-lg -ml-20">
          <div className="-mt-5 -ml-4 -mr-4 bg-stone-800 h-60 rounded-ss-3xl rounded-tr-3xl">
            <h3 className="p-28 font-Montserrat text-xl">Web Design</h3>
          </div>
          <div className="mt-8 text-left font-mono">
            <p className="text-black">Fredrik Nordström</p>
            <a href="#" className="inline-block rounded-md border border-transparent bg-rose-500 px-8 py-3 text-center font-medium text-white hover:bg-rose-500 mt-8 font-mono" >
            View Project
            </a>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400 w-8/12 h-96 bg-neutral-200 rounded-3xl shadow-lg ml-72">
          <div className="-mt-5 -ml-4 -mr-4 bg-stone-800 h-60 rounded-ss-3xl rounded-tr-3xl">
            <h3 className="p-28 font-Montserrat text-xl">UX/UI</h3>
          </div>
          <div className="mt-8 text-left font-mono">
            <p className="text-black">Bike</p>
            <a href="#" className="inline-block rounded-md border border-transparent bg-rose-500 px-8 py-3 text-center font-medium text-white hover:bg-rose-500 mt-8 font-mono" >
            View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>);
}
export default ProjectCard;