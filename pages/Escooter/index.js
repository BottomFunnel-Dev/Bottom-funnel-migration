import React from "react";

import { Escootersection } from "./Escootersection";
import Escooterstealing from "./Escooterstealing";
import Escooterthunder from "./Escooterthunder";
import { Keyarea } from "./Keyarea";
import { EscooterKeyAreaAgain } from "./EscooterKeyAreaAgain";
import { EscooterAdminpannel } from "./EscooterAdminpannel";
import { Escooterhardware } from "./Escooterhardware";



export default function Escooter ()  {
  return (
    <div>

      <Escootersection />
      <Escooterstealing />
      <Escooterthunder />
      <Keyarea />
      <EscooterKeyAreaAgain />
      <EscooterAdminpannel />
      <Escooterhardware />


    </div>
  );
};
