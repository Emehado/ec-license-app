import * as React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ISelectOption } from "../../../types";
import useRootStore from "../../../hooks/useRootStore";
import api from "../../../api";
import ILicenseFormDetails from "../../../types/ILicenseFormDetails";
import useCurrentStepUpdater from "../../../hooks/useCurrentStepUpdater";

export default function useActions() {
  useCurrentStepUpdater(1);
  const registerOptions = [
    {
      value: "renewable",
      label: "Renewable",
      licenseTypes: [
        "Provisional_Wholesale_Supply_and_Generation_License",
        "Charcoal_Export_License",
        "Installation_and_Maintenance",
        "Importation_Licenses",
        "Briquettes_Export_Licenses",
      ],
    },
    {
      value: "electricity",
      label: "Electricity",
      licenseTypes: [
        "Electricity_Transmission",
        "Electricity_Distribution",
        "Bulk_Customer_Link_Register",
        "Electricity_Wholesale_Supply_Licenses_Register",
      ],
    },
    {
      value: "naturalGas",
      label: "Natural Gas",
      licenseTypes: [
        "Natural_Gas_Wholesale_Supply",
        "Natural_Gas_Bulk_Customer_Permit_Register",
      ],
    },
  ];

  const { stepStore } = useRootStore();

  const navigate = useNavigate();

  const [licenseTypes, setLicenseTypes] = React.useState<ISelectOption[]>([]);

  const ref = React.useRef(null);

  const updateLicenseTypes = (e: Event) => {
    const registerType = (e.target as HTMLInputElement).value;
    const selectedRegister = registerOptions.find(
      (option) => option.value === registerType
    );
    const licenseTypesOptions = selectedRegister?.licenseTypes.map(
      (licenseType) => ({
        value: licenseType,
        label: licenseType.replaceAll("_", " "),
      })
    );
    setLicenseTypes(licenseTypesOptions || []);
  };

  const handleStepChange = (direction: number) => {
    const newStepId = stepStore.currentStep?.id! + direction;
    if (direction > 0) {
      //@ts-ignore
      ref.current?.click();

      return;
    }
    stepStore.setCurrentStep(stepStore.steps[newStepId - 1]);
    navigate(`/${stepStore.applicationType}/${newStepId}`);
  };

  const fetchLicense = (licenseFormDetails: ILicenseFormDetails) => {
    const {
      registerType,
      licenseType,
      license: licenseNumber,
    } = licenseFormDetails;
    return api.get(
      `/renew/${registerType}?licenseType=${licenseType}&licenseNumber=${licenseNumber}`
    );
  };

  const handleSearchLicense = async (
    licenseFormDetails: ILicenseFormDetails
  ) => {
    const response = await fetchLicense(licenseFormDetails);

    if (!response.ok) {
      if (response.status === 404) {
        //@ts-ignore
        throw new Error(response.data.message);
      } else {
        console.log(response);
        throw new Error("Something went wrong, Please try again!");
      }
    }

    const { name, email, phone, license, cost } = response.data as {
      name: string;
      email: string;
      phone: string;
      license: string;
      cost: number;
    };
    stepStore.setBillingDetails({
      registerType: licenseFormDetails.registerType,
      years: licenseFormDetails.years,
      licenseType: licenseFormDetails.licenseType,
      license,
      name,
      email,
      phone,
      cost,
    });
    const currentStep = stepStore.steps[2];
    currentStep.completed = true;
    stepStore.setCurrentStep(currentStep);
    navigate(`/${stepStore.applicationType}/${currentStep.id}`);
    return true;
  };

  const handleSubmit = async (values: any) => {
    const myPromise = new Promise(async (resolve, reject) => {
      try {
        await handleSearchLicense(values);
        resolve("");
      } catch (error) {
        reject(error);
      }
    });

    toast.promise(myPromise, {
      loading: "Loading...",
      success: "Success",
      error: (er) => er.message,
    });
  };

  return {
    stepStore,
    registerOptions,
    licenseTypes,
    ref,
    updateLicenseTypes,
    handleStepChange,
    handleSubmit,
  };
}
