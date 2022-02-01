import React from "react";
import PageHeader from "../../Header";
import Card from "../../Card";
import useActions from "./actions";

import { VALIDATION_SCHEMA, INITIAL_VALUES } from "./constants";
import "./styles.modules.css";
import BottomNavigation from "../../BottomNavigation";
import Form, { FormField, FormSelect } from "../../Form";

const Step2 = () => {
  const {
    registerOptions,
    licenseTypes,
    ref,
    updateLicenseTypes,
    handleStepChange,
    handleSubmit,
  } = useActions();

  return (
    <div>
      <PageHeader
        step={2}
        title="Fill the form below with your license details."
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        consequatur architecto, excepturi, beatae debitis, deserunt consectetur"
      />
      <Card>
        <Form
          className="form"
          initialValues={INITIAL_VALUES}
          validationSchema={VALIDATION_SCHEMA}
          onSubmit={handleSubmit}
        >
          <div className="form-heading">License renewal form</div>
          <FormSelect
            options={registerOptions}
            name="registerType"
            onChangeOption={updateLicenseTypes}
            defaultLabel="Select register type"
          />
          <FormSelect
            name="licenseType"
            options={licenseTypes}
            onChangeOption={updateLicenseTypes}
            defaultLabel="Select License type"
          />
          <FormField
            name="license"
            type="text"
            fullWidth
            placeholder="Enter license number"
          />
          <FormField
            name="years"
            type="number"
            fullWidth
            placeholder="Renewal duration (years)"
          />
          <button
            ref={ref}
            type="submit"
            style={{ visibility: "hidden" }}
          ></button>
        </Form>
        <BottomNavigation onStepChange={handleStepChange} />
      </Card>
    </div>
  );
};

export default Step2;
