import * as Yup from "yup";

const VALIDATION_SCHEMA = Yup.object({
  registerType: Yup.string().max(256).required().label("Register type"),
  licenseType: Yup.string().max(256).required().label("License type"),
  license: Yup.string().min(6).max(256).required().label("License number"),
  years: Yup.number().min(1).max(50),
});
const INITIAL_VALUES = {
  registerType: "",
  licenseType: "",
  license: "",
  years: 1,
};

export { VALIDATION_SCHEMA, INITIAL_VALUES };
