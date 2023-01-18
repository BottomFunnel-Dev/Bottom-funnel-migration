import React from "react";
import AlcoholAdminPanel from "./AlcoholAdminPanel/AlcoholAdminPanel";
import AcoholAdvanceTech from "./AlcoholAdvanceTech/AlcoholAdvanceTech";
import AlcoholPartnerApp from "./AlcoholPartnerApp/AlcoholPartnerApp";
// import "./AlcoholSolutions.css";
import { alcoholCustomer, alcoholAdmin, alcoholPartner } from "../../Data/panelsData";

export const AlcoholSolutions = () => {
  return (
    <div>
      <AcoholAdvanceTech customerData={alcoholCustomer} />
      <AlcoholAdminPanel customerData={alcoholAdmin} />
      <AlcoholPartnerApp customerData={alcoholPartner} />
    </div>
  );
};
