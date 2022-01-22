import React from "react";
// import {} from "mobx";
import StepStore from "./step";

class RootStore {
  stepStore: StepStore;
  constructor() {
    this.stepStore = new StepStore(this);
  }
}

export default RootStore;
