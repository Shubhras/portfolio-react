import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (<>


<div className="bg-white text-rose-500 flex justify-between p-2 ">
      <div className='font-semibold'>
        <h1>Falk</h1>
      </div>
     
<div className="flex text-white bg-stone-800 w-[18%] -mt-2.5 -mr-3 -mb-3 rounded-ss-lg justify-center p-3.5	">
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

      <div>
      <NavLink
      to="/contact"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      Contact
    </NavLink>
      </div>
      </div>
      </div>
    
    
  </>)
}
export default Menu;