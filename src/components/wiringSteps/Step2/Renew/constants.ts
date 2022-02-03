import * as Yup from "yup";

const VALIDATION_SCHEMA = Yup.object({
  name: Yup.string().max(256).required().label("Name"),
  license: Yup.string().min(8).max(256).required().label("License"),
  class: Yup.string().max(256).required().label("Class"),
  phone: Yup.string().min(10).max(15).required().label("Telephone"),
  trainingVenue: Yup.string().max(256).required().label("Training Venue"),
  trainingAttended: Yup.string().max(256).required().label("Training attended"),
  trainingDate: Yup.string().max(256).required().label("Training Date"),
  domain: Yup.string().max(256).required().label("Domain"),
});
const INITIAL_VALUES = {
  name: "",
  license: "",
  class: "",
  phone: "",
  trainingVenue: "",
  trainingAttended: "",
  trainingDate: "",
  domain: "",
};

export { VALIDATION_SCHEMA, INITIAL_VALUES };
