import React from "react";
import { DigitalTransformationBanner } from "../../components/DigitalTransformation/DigitalTransformationBanner";
import { DigitalTransformationOurService } from "../../components/DigitalTransformation/DigitalTransformationOurService";
import { DigitalTransformationQuestion } from "../../components/DigitalTransformation/DigitalTransformationQuestion";
import { DigitalTransformationWhy } from "../../components/DigitalTransformation/DigitalTransformationWhy";
import { DigitalTransformationWhyChoose } from "../../components/DigitalTransformation/DigitalTransformationWhyChoose";
import { DigitalTransformTechTools } from "../../components/DigitalTransformation/DigitalTransformTechTools";

import Head from "next/head";

export default function DigitalTransformation() {
  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>Digital Transformation | Bottom Funnel</title>
        <meta
          name="description"
          content="Get ready for a revolution in technology with the promise 
          of a better, more efficient workplace. Learn about the 
          driving factors of digital transformation and how it can 
          benefit your business."
        />
      </Head>
      <main>
        <DigitalTransformationBanner />
        <DigitalTransformationWhy />
        <DigitalTransformationOurService />
        <DigitalTransformationQuestion />
        <DigitalTransformationWhyChoose />
        <DigitalTransformTechTools />
      </main>
    </div>
  );
}
