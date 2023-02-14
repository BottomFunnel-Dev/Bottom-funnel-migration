import React from "react";
import { BenifitsofProduct } from "../../components/ProductDiscovery/BenifitsofProduct/BenifitsofProduct";
import { DreamProject } from "../../components/ProductDiscovery/DreamProject/DreamProject";
import { PilotStudy } from "../../components/ProductDiscovery/PilotStudy/PilotStudy";

import { ProductDiscoveryBanner } from "../../components/ProductDiscovery/ProductDiscoveryBanner/ProductDiscoveryBanner";
import { ProductEmpathy } from "../../components/ProductDiscovery/ProductEmpathy/ProductEmpathy";


export default function ProductDiscovery() {
  return (
    <div>
      <ProductDiscoveryBanner />
      <PilotStudy />
      <ProductEmpathy />
      <DreamProject />
      <BenifitsofProduct />
    </div>
  );
}
