import * as Yup from "yup";
const INITIAL_VALUES = {
  passportPic: "",
  licenseType: "",
  examinationCentre: "",
  surname: "",
  otherNames: "",
  phone: "",
  dob: "",
  age: "",
  sex: "",
  nationality: "",
  disability: "",
  address: "",
  area: "", //place of work
  town: "", //place of work
  region: "", //place of work
  IDType: "",
  IDNumber: "",
  relativeSurname: "",
  relativeFirstName: "",
  relativePhone: "",
  takenExamsBefore: "",
  upgradeOrFailed: "", //Reason for new exams application
};

const VALIDATION_SCHEMA = Yup.object({
  passportPic: Yup.string()
    .min(1)
    .max(256)
    .required()
    .label("Passport picture"),
  licenseType: Yup.string().min(1).max(256).required().label("License type"),
  examinationCentre: Yup.string()
    .min(1)
    .max(256)
    .required()
    .label("Examination Centre"),
  surname: Yup.string().min(1).max(256).required().label("Surname"),
  otherNames: Yup.string().min(1).max(256).required().label("Other Names"),
  phone: Yup.string().min(1).max(256).required().label("Phone"),
  dob: Yup.date().required().label("Date of Birth"),
  age: Yup.number().required().positive().integer().label("Age"),
  sex: Yup.string().oneOf(["male", "female"]).required().label("Sex"),
  nationality: Yup.string()
    .oneOf(["Ghanaian", "Non-Ghanaian"])
    .required()
    .label("Nationality"),
  nonGhanaianWorkPermit: Yup.string()
    .label("Work Permit")
    .when("nationality", {
      is: "Non-Ghanaian",
      then: Yup.string().required(),
      otherwise: Yup.string().nullable(true),
    }),
  disability: Yup.string().oneOf(["Yes", "No"]).required().label("Disability"),
  disabilityType: Yup.string().when("disability", {
    is: "Yes",
    then: Yup.string().min(1).max(256).required(),
    otherwise: Yup.string().nullable(true),
  }),
  address: Yup.string().min(1).max(256).required().label("Address"),
  area: Yup.string().min(1).max(256).required().label("Area"),
  town: Yup.string().min(1).max(256).required().label("Town"),
  region: Yup.string().min(1).max(256).required().label("Region"),
  IDType: Yup.string().min(1).max(256).required().label("ID Type"),
  IDNumber: Yup.string().min(1).max(256).required().label("ID Number"),
  relativeSurname: Yup.string()
    .min(1)
    .max(256)
    .required()
    .label("Relative Surname"),
  relativeFirstname: Yup.string()
    .min(1)
    .max(256)
    .required()
    .label("Relative Firstname"),
  relativePhone: Yup.string()
    .min(10)
    .max(15)
    .required()
    .label("Relative Telephone"),
  takenExamsBefore: Yup.boolean()
    .required()
    .label("Have you taken exams before?"),
  upgradeOrFailed: Yup.string()
    .label("Reason for wanting to retake exams")
    .when("takenExamsBefore", {
      is: true,
      then: Yup.string().oneOf(["upgrade", "failed"]).required(),
      otherwise: Yup.string().nullable(true),
    }),
});

const LICENSE_TYPES = [
  { value: "domestic", label: "Domestic (GHC 450)" },
  { value: "commercial", label: "Commercial (GHC 580)" },
];

const EXAMINATION_CENTRES = [
  { value: "accra", label: "Accra (Accra Technical Training Institute)" },
  { value: "kumasi", label: "Kumasi (Kumasi Technical Training Institute)" },
  {
    value: "takoradi",
    label: "Takoradi (Takoradi Technical Training Institute)",
  },
  { value: "tamale", label: "Tamale (Tamale technical University)" },
];

const SEX_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

export {
  INITIAL_VALUES,
  VALIDATION_SCHEMA,
  LICENSE_TYPES,
  EXAMINATION_CENTRES,
  SEX_OPTIONS,
};
