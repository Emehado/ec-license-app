import React from "react";
import Form, { FormField, FormSelect } from "../../../Form";
import {
  INITIAL_VALUES,
  VALIDATION_SCHEMA,
  LICENSE_TYPES,
  EXAMINATION_CENTRES,
  SEX_OPTIONS,
} from "./constants";
import useActions from "./actions";
import styled from "styled-components";
import Card from "../../../Card";
import FormRadioGroup from "../../../Form/FormRadioGroup";

const StyledNewApplication = styled.div`
.personal-data {
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns repeat(3, 1fr);
    gap: 20px;
  }
}
`;

const NewApplication = () => {
  const { handleSubmit } = useActions();
  return (
    <StyledNewApplication>
      <Form
        initialValues={INITIAL_VALUES}
        validationSchema={VALIDATION_SCHEMA}
        onSubmit={handleSubmit}
      >
        <h1>
          Application form for electrical wiring Professional Certification
          Examination
        </h1>
        <h2>November/December</h2>
        <Card>
          <FormField
            label="Passport picture"
            name="passportPic"
            type="file"
            fullWidth
          />
          <FormSelect
            label="Select licenseType"
            name="licenseType"
            options={LICENSE_TYPES}
          />
          <FormSelect
            name="license"
            label="Select preferred examination center"
            options={EXAMINATION_CENTRES}
          />
          <div className="personal-data">
            <FormField
              label="Surname"
              placeholder="Enter Surname"
              name="surname"
              type="text"
              fullWidth
            />
            <FormField
              label="Other names"
              placeholder="Enter Other names"
              name="otherNames"
              type="text"
              fullWidth
            />
            <FormField
              label="Phone"
              placeholder="Enter Phone"
              name="phone"
              type="text"
              fullWidth
            />
            <FormField
              label="Date of Birth"
              placeholder="Enter date of birth"
              name="dob"
              type="text"
              fullWidth
            />
            <FormField
              label="Age"
              placeholder="Enter age"
              name="age"
              type="text"
              fullWidth
            />
            <FormRadioGroup
              label="Sex"
              name="sex"
              options={SEX_OPTIONS}
              inline
            />
          </div>
        </Card>
      </Form>
    </StyledNewApplication>
  );
};

export default NewApplication;
