import React from 'react';
import Banner from "./Banner";
import RecentProjects from "../../components/RecentProjects";
import Services from '../../components/Services';
import Contact from '../Contact';
import Accordions from '../../components/Accordions';
import { Accordion } from '@material-tailwind/react';

const Home = () => {
  return(<>
    <Banner />
    <RecentProjects />
    <Services />
    {/* <Accordions/> */}
    <Contact/>
    
    {/* <h1>I am home page</h1> */}
  </>);
}
export default Home;