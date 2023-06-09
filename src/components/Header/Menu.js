import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (<>


    <div className=" text-rose-500 inline-flex justify-between p-2 w-5/6	">
      <div className='font-semibold z-10'>
       
      <a href="mailto:anastasia.falk77@gmail.com">Falk</a>
           
            </div>

      <div className="flex text-white w-[25%] -mt-2.5 -mr-60 -mb-32 rounded-ss-lg justify-center p-3.5	z-10">
        {/* <div className="mr-5">
      <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      Home
    </NavLink>
      </div> */}


        <div className="mr-5">
          <NavLink
            to="/About"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            About
          </NavLink>
        </div>


        <div className="mr-5">
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          // className={({ isActive }) =>
          //   isActive ? 'text-black' : ''
          // }
          >
            Contact
          </NavLink>
        </div>
        <div className="">
          <a
            href="/"
          // className={({ isActive }) =>
          //   isActive ? 'text-black' : ''
          // }
          >
            <i class="fa fa-linkedin" aria-hidden="true"></i>

          </a>
        </div>
        

        {/* <div  className="mr-5">
      <NavLink 
      to="/ValueCheck"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active": ""
      }
    >
     ValueCheck
    </NavLink>
      </div> */}




      </div>
    </div>


  </>)
}
export default Menu;