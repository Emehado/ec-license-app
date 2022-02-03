import React from "react";
import { Route, Routes } from "react-router-dom";
import NewApplication from "./NewApplication";
import Renew from "./Renew";

const Step2 = () => {
  return (
    <Routes>
      <Route path="/" element={<NewApplication />} />
      <Route path="renew" element={<Renew />} />
    </Routes>
  );
};

export default Step2;
