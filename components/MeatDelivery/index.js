import React from "react";
import { MeatDeliveryAdmin } from "./MeatDeliveryAdmin";
import { MeatDeliveryBanner } from "./MeatDeliveryBanner";
import { MeatDeliveryCustomerApp } from "./MeatDeliveryCustomerApp";
import { MeatDeliveryLowerBanner } from "./MeatDeliveryLowerBanner";
import { MeatDeliveryPartnerApp } from "./MeatDeliveryPartnerApp";

export default function MeatDelivery () {


  return (
    <div>
    <MeatDeliveryBanner/>
      <MeatDeliveryCustomerApp />
      <MeatDeliveryAdmin />
      <MeatDeliveryPartnerApp />
  <MeatDeliveryLowerBanner />
     

   
    </div>
  );
};
