import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import Adminpannel from './Adminpannel'
import Customerapp from './Customerapp'
import Datingbrands from './Datingbrands'
import Datingcontainer from './Datingcontainer'
import Datingfeatures from './Datingfeatures'
import Datingmobile from './Datingmobile'
import Datingstart from './Datingstart'
import DatingWhy from './DatingWhy'
import Solutiondating from './Solutiondating'
import StoriesSection from '../StoriesSection/StoriesSection'
import { Industries } from '../industries/Industries'
import OndemandSection from '../OnDemandSection/OndemandSection'
import PortFolio from '../PortFolioSection/PortFolio'
import PlanProject from '../PlanProject/PlanProject'
import Revamping from '../revamping/Revamping'
import { SeoblogSection } from '../SeoBlogs/Seoblogs'
import { TextDropdown } from '../faqSection/Faqs'
import ContectForm from '../ContectForm/ContectForm'
import MainFooter from '../FooterSection/MainFooter'
import Trusted from '../SEO/SeoTrustedCompanies/Seotrusted'
import { datingLogo } from '../../Data/SeopartnerData'

import {
  datingCustomer,
  logisticDrive,
  logisticAdmin,
} from "../../Data/panelsData";

export default function Dating() {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "black", logo: false}));
  }, []);
  return (
    <div> 
       <Datingcontainer/>
       <Trusted partnerLogo={datingLogo}/>
       <Datingbrands/>
       <Datingfeatures/>
       <Customerapp  customerData={datingCustomer} />
       <Adminpannel  customerData={datingCustomer} />
       <Datingmobile customerData={datingCustomer} />
       <Solutiondating/>
       <Datingstart/>
       <DatingWhy/>
       <StoriesSection/>
       <Industries/>
       <PlanProject/>
       <OndemandSection/>
       <PortFolio/>
       <SeoblogSection/>
       <Revamping/>
       <TextDropdown/>
       <ContectForm/>
       <MainFooter/>
    </div>
  )
}
