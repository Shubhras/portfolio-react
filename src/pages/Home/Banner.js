import React from "react";
const Banner = () => {
  return (<>
    <div className="relative overflow-hidden -mt-10" id="relt-banner">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-xl font-bold tracking-tight text-rose-500 sm:text-5xl">
             Building digital<br></br> 
             experiences that <br></br>drive <br></br>convertible <br></br>traffic.
            </h1>

            <div className='flex-btn flex mt-14'>
           <div className='mr-8 z-10'>
             <a href="ReactResumeDownload.pdf" className="inline-block rounded-md border border-transparent bg-stone-800 px-8 py-3 text-center font-medium text-white hover:bg-stone-800" id="download-btn" >
                Download CV
              </a>
           </div>
           <div className="z-10">
             <a href="" className="inline-block rounded-md border border-stone-900 bg-inherit px-8 py-3 text-center font-medium text-stone-900 hover:bg-inherit">
                Let's talk!
              </a>
           </div>

              
              </div>
            {/* <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
              if you live or die.
            </p> */}
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div className=" lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl" id="absoulte">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 bg-stone-800 text-white w-full h-full rounded-l-[350px]" id="absoulte-response">
                 <div className="text-black bg-white w-28 rounded-full h-52 ml-52 -mt-36" id="top-circle">
                 
                 </div>
                      <div className="p-40 ml-40" id="text-skill">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 ">
                      <div className="">
                        <h1 className="text-6xl text-rose-500 ml-28">10+</h1>
                        <h3 className="text-2xl ml-28">Skillsets</h3>
                      </div>
                      <div className="">
                        <h1 className="text-6xl text-rose-500 ml-28">20+</h1>
                        <h3 className="text-2xl ml-28">Tools</h3>
                      </div>
                    </div>
                    <div className="text-black bg-rose-500 w-20 rounded-full h-20 ml-72 mt-56" id="bottom-circle">
                 </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>);
}
export default Banner;