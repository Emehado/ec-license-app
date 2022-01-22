import { makeAutoObservable } from "mobx";
import { IStep } from "../types";
import RootStore from "./rootStore";

class StepStore {
  steps: IStep[] = [];
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  addSteps(newSteps: IStep[]) {
    newSteps.forEach((newStep: IStep) => {
      newStep.id = this.steps.length + 1;
      const step = new Step();
      step.addStep(newStep);
      this.steps.push(step);
    });
  }
}

class Step implements IStep {
  id = 0;
  label = "";
  constructor() {
    makeAutoObservable(this);
  }

  addStep(step: IStep) {
    this.id = step.id!;
    this.label = step.label;
  }
}

export default StepStore;
