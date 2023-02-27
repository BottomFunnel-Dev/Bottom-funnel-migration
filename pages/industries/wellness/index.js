import React from "react";

import {
  wellnessPatient,
  wellnessAdmin,
  wellnessDoctor,
} from "../../../components/Data/panelsData";

import Wellnesscontainer from "../../../components/Wellness/Wellnesscontainer";
import WellnessPatient from "../../../components/Wellness/WellnessPatient/WellnessPatient";
import WellnessDoctor from "../../../components/Wellness/WellnessDoctor/WellnessDoctor";
import WellnessAdmin from "../../../components/Wellness/WellnessAdmin/WellnessAdmin";
import Wellnesshealthcare from "../../../components/Wellness/Wellnesshealthcare";

import Head from "next/head";

export default function Wellness() {
  return (
    <div>
      <Head>
        <title>Wellness Web and App Development | Bottom Funnel</title>
        <meta
          name="description"
          content="Oking to build a wellness web app? Look no further than our team
          of wellness web app development experts. Our team can help 
         you build a successful wellness web app that helps you stay on
          track with your health and fitness goals."
        />
      </Head>
      <main>
        <Wellnesscontainer />
        <WellnessPatient customerData={wellnessPatient} />
        <WellnessDoctor customerData={wellnessDoctor} />
        <WellnessAdmin customerData={wellnessAdmin} />
        <Wellnesshealthcare />
      </main>
    </div>
  );
}
