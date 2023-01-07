import React from "react";

import LaudryApplication from "./LaudryApplication";
import LaundryAdmin from "./LaundryAdmin";
import { Laundryapppagelowerfooter } from "./Laundryapppagelowerfooter";

import LaundryBannerlower from "./LaundryBannerlower";
import LaundryCustomer from "./LaundryCustomer";
import LaundryDelivery from "./LaundryDelivery";
import LaundryPageBanner from "./LaundryPageBanner";


export default function LaundryPage  () {
 

  return (
    <div>
      <LaundryPageBanner />
      <LaudryApplication />
      <LaundryCustomer />
      <LaundryDelivery />
      <LaundryAdmin />
      <LaundryBannerlower />
      <Laundryapppagelowerfooter />

  
    </div>
  );
};
