import React from "react";
import * as SD from "./style";
import { Items } from "./constants";

export default function Sidebar({activeStep}) {
  return (
    <SD.Sidebar>
    {Items.map((item) => (
        <SD.Item key={item.id} isActive={activeStep === item.id}>
          <SD.ItemNumber>{item.number}</SD.ItemNumber>
          <SD.ItemBody>
            <SD.Subtitle>{item.subtitle}</SD.Subtitle>
            <SD.Title>{item.title}</SD.Title>
          </SD.ItemBody>
        </SD.Item>
      ))}
    </SD.Sidebar>
  );
}
