import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import ContectForm from "../ContectForm/ContectForm";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PlanProject from "../PlanProject/PlanProject";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import StoriesSection from "../StoriesSection/StoriesSection";
import Wellnesscontainer from "./Wellnesscontainer";
import Wellnesshealthcare from "./Wellnesshealthcare";
import WellnessDoctor  from "./WellnessDoctor/WellnessDoctor";
import WellnessAdmin  from "./WellnessAdmin/WellnessAdmin";
import WellnessPatient from "./WellnessPatient/WellnessPatient";
import {
  wellnessPatient,wellnessAdmin,wellnessDoctor
} from "../../Data/panelsData";

export default function Wellness() {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "black", logo: false}));
  }, []);
  return (
    <div>
      <Wellnesscontainer/>
      <WellnessPatient customerData={wellnessPatient} />
      <WellnessDoctor customerData={wellnessDoctor} />
      <WellnessAdmin customerData={wellnessAdmin} />
      <Wellnesshealthcare />
      <StoriesSection />
      <Industries />
      <PlanProject />
      <OndemandSection />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
}
