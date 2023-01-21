import React from "react";
import { AutomateOlly } from "../../../../components/funnelDeskSelfService/AutomateOlly/AutomateOlly";
import { SelfServiceBanner } from "../../../../components/funnelDeskSelfService/SelfServiceBanner/SelfServiceBanner";
import { SelfServiceContent } from "../../../../components/funnelDeskSelfService/SelfServiceContent/SelfServiceContent";
import { SelfServiceCustomerHelp } from "../../../../components/funnelDeskSelfService/SelfServiceCustomerHelp/SelfServiceCustomerHelp";
import { SelfServiceCustomerAnswer } from "../../../../components/funnelDeskSelfService/SelfServicesCustomerAnswers/SelfServiceCustomerAnswer";

export default function funnelDeskSelfService() {
  return (
    <div style={{ color: "#393939" }}>
      <SelfServiceBanner />
      <AutomateOlly />
      <SelfServiceCustomerAnswer />
      <SelfServiceContent />
      <SelfServiceCustomerHelp />
    </div>
  );
}
