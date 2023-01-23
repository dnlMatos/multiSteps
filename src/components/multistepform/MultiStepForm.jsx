import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Step from "../step/Step";
import Step1 from "../step1/Step1";
import * as M from "./style";

export default function MultiStepForm() {
  return (
    <M.MultiStepForm>
      <Sidebar />
      <Step/>
      <Step1/>
    </M.MultiStepForm>
  );
}
