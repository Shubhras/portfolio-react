import React from "react";
const ProjectCard = ({item}) => {
  return (<>

  <div className="relative rounded-xl overflow-auto p-8">
    <div className="grid grid-cols-3 gap-4 font-mono text-white text-sm text-center font-bold">
  <div class="box-1 w-8 h-96 p-14 bg-amber-950">
    01
    <h3>Design,Marketing</h3>
    <p>ValueCheck</p>
    </div>
  <div className="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">02
  <h3>Design</h3>
  <p>Serotoned-01</p>
  </div>
  
  <div className="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">03
  <h3>UX/UI</h3>
  <p>Cookwise</p>
  </div>
  <div className="p-4 rounded-lg shadow-lg bg-indigo-500 col-span-2">
    04
    <h3>Web Design</h3>
    <p>Fredrik Nordström</p>
    </div>
  <div className="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">05
  <h3>UX/UI</h3>
  <p>Bike</p>
  </div>
</div>
</div>
    </>);
}
export default ProjectCard;