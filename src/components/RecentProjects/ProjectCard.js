import React from "react";
const ProjectCard = ({item}) => {
  return (<>

  <div className="relative rounded-xl overflow-auto p-8">
    <div className="grid grid-cols-2 gap-4 font-mono text-white text-sm text-center font-bold ml-52 mt-14">
  <div class="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400 w-8/12 h-96 bg-neutral-200 rounded-3xl shadow-lg">
    <div className="-mt-5 -ml-4 -mr-4 bg-stone-800 h-60 rounded-ss-3xl rounded-tr-3xl">
    <h3 className="p-28 font-Montserrat text-xl">Design,Marketing</h3>
    </div>
    <div className="mt-8 text-left font-mono">
    <p className="text-black">ValueCheck</p>
    <a href="#"className="inline-block rounded-md border border-transparent bg-rose-500 px-8 py-3 text-center font-medium text-white hover:bg-rose-500 mt-8 font-mono" >
                Download CV
       </a>
    </div>
    
    </div>
  <div className="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400 w-8/12 h-96 bg-neutral-200 rounded-3xl shadow-lg">
 
  <div className="-mt-5 -ml-4 -mr-4 bg-stone-800 h-60 rounded-ss-3xl rounded-tr-3xl">
  <h3 className="p-28 font-Montserrat text-xl">Design</h3>
  </div> 
  <div className="mt-8 text-left font-mono">
  <p className="text-black">Serotoned-01</p>
  <a href="#"className="inline-block rounded-md border border-transparent bg-rose-500 px-8 py-3 text-center font-medium text-white hover:bg-rose-500 mt-8 font-mono" >
                Download CV
       </a>
  </div>
  </div>
  
  <div className="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400 w-8/12 h-96 bg-neutral-200 rounded-3xl shadow-lg">03
  <h3>UX/UI</h3>
  <p>Cookwise</p>
  </div>
  <div className="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400 w-8/12 h-96 bg-neutral-200 rounded-3xl shadow-lg">
    04
    <h3>Web Design</h3>
    <p>Fredrik Nordström</p>
    </div>
  <div className="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400 w-8/12 h-96 bg-neutral-200 rounded-3xl shadow-lg">05
  <h3>UX/UI</h3>
  <p>Bike</p>
  </div>
</div>
</div>
    </>);
}
export default ProjectCard;