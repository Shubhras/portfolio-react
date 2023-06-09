import React from 'react';
const About = () => {
  return (<>

    <div className="bg-white p-10">
      <div className=''>
        <div className=''>
          <div className="grid grid-cols-2 gap-4 flex-wrap place-content-center" id='about-us'>
            <div className='p-10 shadow-lg ml-36' id='about-img'>
              <img src='a_1.jpg' />
            </div>
            <div className='bg-stone-800 -mt-24 -mr-10'id='about-cont'>
            <div className='p-10 shadow-lg text-left mt-20'>
              <h1 className='text-white mt-20'>What I am all</h1>
              <h1 className='text-rose-500 text-6xl mt-2.5 mb-10'>About</h1>
              <p className='text-white'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
            </div>
           
            <div className="ml-8 mt-44">
             <a href="/" className="inline-block rounded-md border border-rose-500 bg-inherit px-8 py-3 text-center font-medium text-white hover:bg-inherit">
             Home
              </a>
              </div>

            </div>
           
          </div>
        </div>
      </div>
    </div>






  </>);
}
export default About;