import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (<>


<div className=" text-rose-500 flex justify-between p-2 ">
      <div className='font-semibold'>
        <h1>Falk</h1>
      </div>
     
<div className="flex text-white w-[25%] -mt-2.5 -mr-3 -mb-32 rounded-ss-lg justify-center p-3.5	z-10">
      <div className="mr-5">
      <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      Home
    </NavLink>
      </div>

      <div className="mr-5">
      <NavLink
      to="/contact"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      Contact
    </NavLink>
      </div>

      <div  className="mr-5">
      <NavLink
      to="/ValueCheck"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
     ValueCheck
    </NavLink>
      </div>

      <div>
      <NavLink
      to="/About"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
     About
    </NavLink>
      </div>


      </div>
      </div>
    
    
  </>)
}
export default Menu;