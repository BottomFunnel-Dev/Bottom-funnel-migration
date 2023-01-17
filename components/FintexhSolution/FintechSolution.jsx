import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import { FintechAdminpannel } from "./FintechAdminpannel";
import { FintechCustomerApp } from "./FintechCustomerApp";
import { FintechDriverApp } from "./FintechDriverApp";
import { FintechExclusive } from "./FintechExclusive";
import { FinTechSolutionBanner } from "./FinTechSolutionBanner";
import { FintechWhyChooseUs } from "./FintechWhyChooseUs";

export const FintechSolution = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div>
      <FinTechSolutionBanner />
      <FintechExclusive />
      <FintechCustomerApp />
      <FintechAdminpannel />
      <FintechDriverApp />
      <FintechWhyChooseUs />
    </div>
  );
};
