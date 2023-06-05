import React, {useState} from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';


const ServicesList = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (<>
    <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" id="service-box">
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)} className="no-border">
            <h2 className="text-rose-500 text-4xl text-left mb-10">
              Skillsets I breathe
              &nbsp;
              {
                open == 1 ?

                  <i className="fa fa-chevron-down" style={{color: "#FFF",}}></i>
                  :
                  <i className="fa fa-chevron-up" style={{color: "#FFF",}}></i>
              }
            </h2>
            
          </AccordionHeader>
          <AccordionBody>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-6">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <a href="#">
                <dd className=" text-2xl font-semibold  text-white text-left">Design</dd>
                </a>
                <hr className="-mt-4 w-20"></hr>
                <dt className="text-base leading-7 text-white text-left">Brand Identity</dt>
                {/* <dt className="text-base leading-7 text-white text-left">UX/UI</dt> */}
                <dt className="text-base leading-7 text-white text-left">Graphic Design</dt>
                <dt className="text-base leading-7 text-white text-left">Web Design</dt>
                <dt className="text-base leading-7 text-white text-left">HTML/CSS</dt>
                <dt className="text-base leading-7 text-white text-left">Ad Creative Design</dt>

              </div>
              {/* <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <a href="#">
                <dd className="text-2xl font-semibold  text-white text-left">Marketing</dd>
                </a>
                <hr className="-mt-4 w-28"></hr>
                <dt className="text-base leading-7 text-white text-left">Copy</dt>
                <dt className="text-base leading-7 text-white text-left">Meta Ads</dt>
                <dt className="text-base leading-7 text-white text-left">Google Ads</dt>
                <dt className="text-base leading-7 text-white text-left">SEO</dt>

              </div> */}
            </dl>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)} className="no-border">
            <h2 className="text-rose-500 text-4xl text-left mb-10">
              Tools I love
              &nbsp;
              {
                open == 2 ?
                <i className="fa fa-chevron-down" style={{color: "#FFF",}}></i>
                :
                <i className="fa fa-chevron-up" style={{color: "#FFF",}}></i>
              }
            </h2>
          </AccordionHeader>
          <AccordionBody>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-6">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <a href="#">
                <dd className="order-first text-2xl font-semibold tracking-tight text-white text-left">Design:</dd>
               </a>
                <hr className="-mt-4 w-20"></hr>
                <dt className="text-base leading-7 text-white text-left">Adobe Suite</dt>
                <dt className="text-base leading-7 text-white text-left">Figma</dt>
                <dt className="text-base leading-7 text-white text-left">Blender</dt>
                {/* <dt className="text-base leading-7 text-white text-left">Wix</dt>
                <dt className="text-base leading-7 text-white text-left">Squarespace</dt> */}

              </div>
              {/* <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <a href="#">
                <dd className="order-first text-2xl font-semibold tracking-tight text-white text-left">Marketing:</dd>
               </a>
                <hr className="-mt-4 w-28"></hr>
                <dt className="text-base leading-7 text-white text-left">Google Analytics</dt>
                <dt className="text-base leading-7 text-white text-left">Google Keyword Research</dt>
                <dt className="text-base leading-7 text-white text-left">Ahrefs</dt>
              </div> */}
            </dl>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  </>);
}
export default ServicesList;