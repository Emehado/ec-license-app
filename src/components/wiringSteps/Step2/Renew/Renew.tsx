import React from "react";
import PageHeader from "../../../Header";
import Card from "../../../Card";
import useActions from "./actions";

import { VALIDATION_SCHEMA, INITIAL_VALUES, DOMAIN_OPTIONS } from "./constants";
import "../styles.modules.css";
import BottomNavigation from "../../../BottomNavigation";
import Form, { FormField } from "../../../Form";
import FormRadioGroup from "../../../Form/FormRadioGroup";

const Renew = () => {
  const { ref, handleStepChange, handleSubmit } = useActions();

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
          <div className="form-heading">A-1 Applicants personal data</div>
          <FormField
            label="Name used for EC application"
            name="name"
            type="text"
            fullWidth
            placeholder="Enter name"
          />
          <FormField
            label="ID number (Energy commission)"
            name="license"
            type="text"
            fullWidth
            placeholder="EC/......./......./......./......./......."
          />
          <FormField
            label="Class"
            name="class"
            type="text"
            fullWidth
            placeholder="Enter Class"
          />
          <FormField
            label="Telephone number"
            name="phone"
            type="tel"
            fullWidth
            placeholder="Enter telephone number"
          />
          <div className="form-heading">
            A-2 Training information (details provided will be verified with
            trainer)
          </div>
          <FormField
            label="Training venue"
            name="trainingVenue"
            type="text"
            fullWidth
            placeholder="Enter training venue"
          />
          <FormField
            label="Training attended (module)"
            name="trainingAttended"
            type="text"
            fullWidth
            placeholder="Enter training attended"
          />
          <FormField
            label="Date of training"
            name="trainingDate"
            type="date"
            fullWidth
            placeholder="Enter date of training"
          />

          <div className="form-heading">
            A-3 RENEWAL FEE (this is to cover a subsidized cost of the ID card)
          </div>

          <FormRadioGroup name="domain" options={DOMAIN_OPTIONS} />

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

export default Renew;
