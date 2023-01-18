import React from 'react'
import { CloudAnalyze } from './CloudAnalyze';
import { CloudBoostProductivity } from './CloudBoostProductivity';
import { CloudEleminate } from './CloudEleminate';
import { CloudIncrease } from './CloudIncrease';
import { CloudTelephonyBanner } from './CloudTelephonyBanner'
import { CloudTelephonyLowerBanner } from './CloudTelephonyLowerBanner';



export default function CloudTelephony () {
 return (
    <div>
    <CloudTelephonyBanner />
    <CloudIncrease />
    <CloudAnalyze />
    <CloudEleminate />
    <CloudBoostProductivity />
    <CloudTelephonyLowerBanner />

    </div>
  );
};
