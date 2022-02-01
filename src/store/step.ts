import { makeAutoObservable } from "mobx";
import { IStep, ApplicationType } from "../types";
import RootStore from "./rootStore";

interface BillingDetails {
  registerType: string;
  licenseType: string;
  license: string;
  years: number;
  name: string;
  email: string;
  phone: string;
  cost: number;
}
class StepStore {
  steps: IStep[] = [];
  currentStep: IStep | undefined = undefined;
  applicationType: ApplicationType = "license-application";
  billingDetails: BillingDetails = {
    registerType: "",
    licenseType: "",
    license: "",
    years: 0,
    name: "",
    email: "",
    phone: "",
    cost: 0,
  };
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

  setCurrentStep(step: IStep) {
    this.currentStep = step;
  }

  updateCurrentStepStatus() {
    const currentStepCompleted = true;
    this.currentStep!.completed = currentStepCompleted;
    //update the status in array as well
    this.steps[this.currentStep!.id!].completed = currentStepCompleted;
  }
  setBillingDetails(billingDetails: BillingDetails) {
    this.billingDetails = billingDetails;
  }
  setApplicationType(applicationType: ApplicationType) {
    this.applicationType = applicationType;
  }
  get renewalCost() {
    return (
      this.billingDetails.cost * this.billingDetails.years
    ).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
}

class Step implements IStep {
  id = 0;
  label = "";
  completed = false;
  errorMessage = "";
  constructor() {
    makeAutoObservable(this);
  }

  addStep(step: IStep) {
    this.id = step.id!;
    this.label = step.label;
    this.completed = step.completed;
  }
}

export default StepStore;
