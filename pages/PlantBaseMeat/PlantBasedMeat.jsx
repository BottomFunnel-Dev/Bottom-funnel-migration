
import "./PlantBasedMeat.css";
import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import { PlantBasedMeatBanner } from './PlantBasedMeatBanner/PlantBasedMeatBanner';
import { ServicesWeOffer } from "./ServicesWeOffer/ServicesWeOffer";

import StoriesSection from "../StoriesSection/StoriesSection";
import { Industries } from "../industries/Industries";
import PlanProject from "../PlanProject/PlanProject";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";

import {
    logisticsCustomer,
    plantBaseDriverData,
    plantBaseMeatAdmin,
} from "../../Data/plantbasedmeat";

import PlantBaseDeliverApp from "./PlantBaseDeliverApp/PlantBaseDeliverApp";
import PlantBaseDriverApp from "./PlantBaseDriverApp/PlantBaseDriverApp";
import PlantBaseDeliverAdminPanel from "./PlantBaseDeliverAdminPanel/PlantBaseDeliverAdminPanel";
import { WhyChooseUs } from "./WhyChooseUs/WhyChooseUs";
import { PlantBasedGetSolution } from "./PlantBasedGetSolution/PlantBasedGetSolution";

export const PlantBasedMeat = () => {
    const dispatch = useDispatch();
    useEffect(function () {
        dispatch(ChnageNavbarColor({ color: "black", logo: false }));
    }, []);
    return (
        <div>
            <PlantBasedMeatBanner />
            <ServicesWeOffer />
            <PlantBaseDeliverApp consumerdata={logisticsCustomer} />
            <PlantBaseDriverApp driveData={plantBaseDriverData} />
            <PlantBaseDeliverAdminPanel plantBasedAdminData={plantBaseMeatAdmin} />
            <PlantBasedGetSolution />
            <WhyChooseUs />

            <StoriesSection />
            <Industries />
            <PlanProject />
            <OndemandSection />
            <PortFolio />
            <SeoblogSection />
            <Revamping />
            <TextDropdown />
            <ContectForm />
            <MainFooter />
        </div>
    )
}
