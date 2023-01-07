import React, { useEffect } from 'react'
import { Hireatalentstepwise } from './Hireatalentstepwise'
import { useDispatch } from 'react-redux';
import { ChnageNavbarColor } from '../../Redux/Navbar/NavbarAction';
import "./Hireatalentstepwise.css"
import StoriesSection from '../StoriesSection/StoriesSection';
import OndemandSection from '../OnDemandSection/OndemandSection';
import PortFolio from '../PortFolioSection/PortFolio';
import PlanProject from '../PlanProject/PlanProject';
import { SeoblogSection } from '../SeoBlogs/Seoblogs';
import Revamping from '../revamping/Revamping';
import { TextDropdown } from '../faqSection/Faqs';
import ContectForm from '../ContectForm/ContectForm';
import MainFooter from '../FooterSection/MainFooter';


export const Hireatalent = () => {

  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div>
    <Hireatalentstepwise />
    <StoriesSection />
    <OndemandSection />
    <PortFolio />
    <PlanProject />
    <SeoblogSection />
    <Revamping />
    <TextDropdown />
    <ContectForm />
    <MainFooter />
    
    </div>
  )
}
