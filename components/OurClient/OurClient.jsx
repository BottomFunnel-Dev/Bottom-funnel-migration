import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import { ClientBanner } from "./ClientBanner/ClientBanner";
import { ClientSlider } from "./ClientSlider/ClientSlider";
import "./OurClient.css";
import { OurClientbrand } from "./OurClientbrand/OurClientbrand";
import {
  branddata,
  startupdata,
  enterprisedata,
  imageData,
} from "../../Data/OurClient";
import PortFolio from "../PortFolioSection/PortFolio";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import MainFooter from "../FooterSection/MainFooter";
import { Helmet } from "react-helmet";

export const OurClient = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>Our Client | Bottom Funnel</title>
        <meta
          name="description"
          content="Bottom Funnel is such a transparent name for them. It has become the
          synonym of trust when it comes to buying and selling products online.
          Bottom Funnel becomes the first choice of customers in this digital
          age."
        />
      </Helmet>
      <ClientBanner />
      <ClientSlider data={imageData} />
      <OurClientbrand data={branddata} />
      <OurClientbrand data={startupdata} />
      <OurClientbrand data={enterprisedata} />
      <PortFolio />
      <SeoblogSection />
      <MainFooter />
    </div>
  );
};
