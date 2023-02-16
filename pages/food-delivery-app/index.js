import React from "react";

import { FoodDeliveryBanner } from "../../components/food-delivery/FoodDeliveryBanner";
import { fooddeliveryLogo } from "../../components/Data/SeopartnerData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import {
  foodDeliveryCustomer,
  foodDeliveryDrive,
  // foodDeliveryAdmin,
} from "../../components/Data/panelsData";

import { FoodDeliveryBookCall } from "../../components/food-delivery/FoodDeliveryBookCall";
import FoodDeliveryExluciveApp from "../../components/food-delivery/FoodDeliveryExluciveApp";
import FoodDeliveryAdvanceTech from "../../components/food-delivery/foodDeliveryAdvanceTech";
// import { FoodDeliveryAdminPanel } from "../../components/food-delivery/foodDeliveryAdminPanel";
import FoodDeliveryPartnerApp from "../../components/food-delivery/FoodDeliveryPartnerApp";
import { FoodDeliveryNeedSuccess } from "../../components/food-delivery/FoodDeliveryNeedSuccess";

import Head from "next/head";

export default function FoodDelivery() {
  return (
    <div>
      <Head>
        <title>
          {" "}
          Food Delivery web App Development Company | Bottom Funnel{" "}
        </title>
        <meta
          name="description"
          content="Want to start delivering food to your customers but don't know where to start? Check out our food delivery web 
          app development services and we will help you get started today!"
        />
      </Head>
      <FoodDeliveryBanner />
      <Trusted partnerLogo={fooddeliveryLogo} />
      <FoodDeliveryBookCall />
      <FoodDeliveryExluciveApp
        foodDeliverycustomerdata={foodDeliveryCustomer}
      />
      <FoodDeliveryAdvanceTech fooddeliverydrivedata={foodDeliveryDrive} />
      <FoodDeliveryPartnerApp />
      <FoodDeliveryNeedSuccess />
    </div>
  );
}
