import React from "react";

import { IceCreamAdminPannel } from "./IceCreamAdminPannel";
import { IcecreamBanner } from "./IcecreamBanner";
import { IcecreamCSolution } from "./IcecreamCSolution";
import { IcecreamCustomerApp } from "./IcecreamCustomerApp";
import { IceCreamDriverApp } from "./IceCreamDriverApp";



export default function Icecream() {
  return (
    <div>
      <IcecreamBanner />
      <IcecreamCSolution />
     <IcecreamCustomerApp />
      <IceCreamAdminPannel />
       {/*<IceCreamDriverApp />
  */}
    </div>
  );
}
