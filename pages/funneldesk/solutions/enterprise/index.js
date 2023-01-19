import React from "react";
import { EnterpriseDeskBanner } from "../../../../components/funnelDeskEnterprise/EnterpriseDeskBanner";
import { EnterpriseDeskService } from "../../../../components/funnelDeskEnterprise/EnterpriseDeskService";
import { EnterpriseEngage } from "../../../../components/funnelDeskEnterprise/EnterpriseEngage";

export default function funnelDeskEnterprise() {
  return (
    <div>
      <EnterpriseDeskBanner />
      <EnterpriseEngage />
      <EnterpriseDeskService />
    </div>
  );
}
