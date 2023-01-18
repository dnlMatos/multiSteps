import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Step1 from "../step1/Step1";
import * as M from "./style";

export default function MultiStepForm() {
  return (
    <M.MultiStepForm>
      <Sidebar />
      <Step1/>
    </M.MultiStepForm>
  );
}
