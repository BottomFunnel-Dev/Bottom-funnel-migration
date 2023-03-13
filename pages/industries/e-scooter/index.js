import React from "react";

import { Escootersection } from "../../../components/Escooter/Escootersection";
import Escooterstealing from "../../../components/Escooter/Escooterstealing";
import Escooterthunder from "../../../components/Escooter/Escooterthunder";
import { Keyarea } from "../../../components/Escooter/Keyarea";
import { EscooterKeyAreaAgain } from "../../../components/Escooter/EscooterKeyAreaAgain";
import { EscooterAdminpannel } from "../../../components/Escooter/EscooterAdminpannel";
import { Escooterhardware } from "../../../components/Escooter/Escooterhardware";

import Head from "next/head";

export default function Escooter() {
  return (
    <div>
      <Head>
        <title>E-scooter Web App development | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for an e-scooter web app development company 
          that can help you build a successful and user-friendly e-scooter 
          web app? Look no further than Bottom Funnel, who offers excellent 
          E-Scooter web app development solutions."
        />
      </Head>

      <Escootersection />
      <Escooterstealing />
      <Escooterthunder />
      <Keyarea />
      <EscooterKeyAreaAgain />
      <EscooterAdminpannel />
      <Escooterhardware />
    </div>
  );
}
