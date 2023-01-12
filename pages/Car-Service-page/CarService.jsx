import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { CarServiceAccelerate } from "./CarServiceAccelerate";
import { CarServiceAdminPannel } from "./CarServiceAdminPannel";
import { CarServiceBanner } from "./CarServiceBanner";
import { CarServiceCustomerApp } from "./CarServiceCustomerApp";
import { CarServiceSolution } from "./CarServiceSolution";
import { CarServiceTechnicianApp } from "./CarServiceTechnicianApp";

export const CarService = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div>
      <CarServiceBanner />
      <CarServiceSolution />
      <CarServiceAccelerate />
      <CarServiceCustomerApp />
      <CarServiceTechnicianApp />
      <CarServiceAdminPannel />
    </div>
  );
};
