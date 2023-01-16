import React from "react";

import { TaxiBookingAdminpannel } from "./TaxiBookingAdminpannel";
import { TaxiBookingBanner } from "./TaxiBookingBanner";
import { TaxiBookingCustomerApp } from "./TaxiBookingCustomerApp";
import { TaxiBookingDriver } from "./TaxiBookingDriver";
import { TaxiBookingLowerBanner } from "./TaxiBookingLowerBanner";
import { TaxiOccassion } from "./TaxiOccassion";



export default function TaxiBookingApp() {
  return (
    <div>
      <TaxiBookingBanner />
     <TaxiOccassion />
      {/* <TaxiBookingCustomerApp />
      <TaxiBookingAdminpannel />
      <TaxiBookingDriver />
      <TaxiBookingLowerBanner />

  */}
    </div>
  );
}
