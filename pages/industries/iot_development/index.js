import React from "react";
import dynamic from "next/dynamic";
import InternetofthingsCapacities from "../../../components/internetofthings/internetofthingsCapacities";
import InternetofthingsServices from "../../../components/internetofthings/internetofthingsServices";

const InternetofThingsMidBanner = dynamic(
  () =>
    import("../../../components/internetofthings/internetofthingsMidBanner"),
  { loading: () => "loading..." },
);
const InternetOfThingsBanner = dynamic(
  () => import("../../../components/internetofthings/internetofthingsBanner"),
  { loading: () => "loading..." },
);
const InternetofthingsProccess = dynamic(
  () => import("../../../components/internetofthings/internetofthingsProccess"),
  { loading: () => "loading..." },
);
const InternetofthingsWhyBF = dynamic(
  () => import("../../../components/internetofthings/internetofthingsWhyBF"),
  { loading: () => "loading..." },
);

export default function IotDevelopment() {
  return (
    <div>
      <InternetOfThingsBanner />
      <InternetofthingsServices />
      <InternetofThingsMidBanner />
      <InternetofthingsCapacities />
      <InternetofthingsProccess />
      <InternetofthingsWhyBF />
    </div>
  );
}
