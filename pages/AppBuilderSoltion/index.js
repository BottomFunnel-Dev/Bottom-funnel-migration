import React from "react";
import { AppBuilderCreate } from './AppBuilderCreate';
import { AppBuilderDiscoverApp } from './AppBuilderDiscoverApp';
import { AppBuilderMaker } from './AppBuilderMaker';
import { AppBuilderSolutionBanner } from './AppBuilderSolutionBanner';
import { AppBuilderWhyShuld } from './AppBuilderWhyShuld';


export default function AppBuilderSoltion  () {


  return (
    <div>
      <AppBuilderSolutionBanner />
      <AppBuilderDiscoverApp />
      <AppBuilderWhyShuld />
      <AppBuilderCreate />
      <AppBuilderMaker />

      

    </div>
  )
}

