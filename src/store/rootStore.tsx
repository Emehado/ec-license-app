import React from "react";
import StepStore from "./step";

class RootStore {
  stepStore: StepStore;
  constructor() {
    this.stepStore = new StepStore(this);
  }
}

export default RootStore;
