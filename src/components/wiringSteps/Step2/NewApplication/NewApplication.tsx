import React from 'react';
import { Formik, Form } from 'formik';
import toast from 'react-hot-toast';
import { FormField, FormSelect } from '../../../Form';
import {
  INITIAL_VALUES,
  VALIDATION_SCHEMA,
  LICENSE_TYPES,
  EXAMINATION_CENTRES,
  SEX_OPTIONS,
  NATIONALITY_OPTIONS,
  DISABILITY_OPTIONS,
  ID_TYPE_OPTIONS,
  EXAMS_TAKEN_OPTIONS,
} from './constants';
import useActions from './actions';
import styled from 'styled-components';
import Card from '../../../Card';
import FormRadioGroup from '../../../Form/FormRadioGroup';
import BottomNavigation from '../../../BottomNavigation';
import uploadImage from '../../../../api/cloudinaryClient/imageUpload';
import ErrorMessage from '../../../Form/ErrorMessage';

const StyledNewApplication = styled.div`
.grid {
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns repeat(2, 1fr);
    gap: 20px;
  };
  @media screen and (min-width: 2048px) {
    display: grid;
    grid-template-columns repeat(3, 1fr);
    gap: 20px;
  };
};
.warning {
  color: red;
  text-transform: lowercase;
}
`;

const NewApplication = () => {
  const { ref, handleStepChange, handleSubmit } = useActions();
  return (
    <StyledNewApplication>
      <h2>
        Application form for electrical wiring Professional Certification
        Examination
      </h2>
      <h3>November/December</h3>
      <p>
        The Electrical Wiring Professional Certificate is issued to qualified
        personnel certified to undertake safe electrical wiring in accordance
        with the Electrical Wiring Regulation, 2011 (L.I.2008).
      </p>
      <p className="warning">
        FALSIFICATION IN FILLING OUT THIS APPLICATION IS SUFFICIENT CAUSE FOR
        REFUSAL TO ISSUE A REGISTRATION
      </p>
      <Card>
        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={VALIDATION_SCHEMA}
          onSubmit={handleSubmit}
        >
          {({ values, errors, setFieldValue }) => (
            <Form>
              <FormField
                name=""
                label="Passport picture"
                type="file"
                onChange={(event) => {
                  const handleImageUpload = async (files: any) => {
                    const responses = await uploadImage(files);

                    let responseOk = true;
                    const images = responses.map((response) => {
                      if (!response.ok) {
                        toast.error('request failed');
                        responseOk = false;
                      }

                      //@ts-ignore
                      return response.data.secure_url;
                    });
                    if (!responseOk) return false;

                    setFieldValue('passportPicture', images[0]);
                  };
                  handleImageUpload(event.currentTarget.files);
                }}
                fullWidth
              />
              <ErrorMessage name="passportPicture" />
              <FormSelect
                label="Select license type"
                name="licenseType"
                options={LICENSE_TYPES}
              />
              <FormSelect
                name="examinationCenter"
                label="Select preferred examination center"
                options={EXAMINATION_CENTRES}
              />
              <h5>Applicants Personal Data</h5>
              <div className="grid">
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
                  name="dateOfBirth"
                  type="date"
                  fullWidth
                />
                <FormField
                  label="Age"
                  placeholder="Enter age"
                  name="age"
                  type="number"
                  fullWidth
                />
                <FormRadioGroup
                  label="Sex"
                  name="sex"
                  options={SEX_OPTIONS}
                  inline
                />
              </div>
              <FormSelect
                name="nationality"
                label="Nationality"
                options={NATIONALITY_OPTIONS}
              />
              {values.nationality === 'Non-Ghanaian' && (
                <FormField
                  fullWidth
                  type="file"
                  name="nonGhanaianWorkPermit"
                  label="Upload Work permit"
                />
              )}
              <div className="grid">
                <FormRadioGroup
                  label="Do you have any disability?"
                  name="disability"
                  options={DISABILITY_OPTIONS}
                  inline
                />
                {values.disability === 'yes' && (
                  <FormField
                    fullWidth
                    type="text"
                    placeholder="Enter disability type"
                    name="disabilityType"
                    label="State disability type"
                  />
                )}
              </div>
              <FormField
                fullWidth
                type="text"
                name="address"
                label="Address"
                placeholder="Enter address"
              />
              <h5>Specific place of work</h5>
              <div className="grid">
                <FormField
                  fullWidth
                  type="text"
                  name="area"
                  label="Area"
                  placeholder="Enter Area"
                />
                <FormField
                  fullWidth
                  type="text"
                  name="town"
                  label="Town"
                  placeholder="Enter town"
                />
                <FormField
                  fullWidth
                  type="text"
                  name="region"
                  label="Region"
                  placeholder="Enter region"
                />
              </div>
              <div className="grid">
                <FormSelect
                  name="IDType"
                  label="ID type"
                  options={ID_TYPE_OPTIONS}
                />
                <FormField
                  fullWidth
                  type="text"
                  name="IDNumber"
                  label="ID number"
                  placeholder="Enter ID number"
                />
              </div>
              <h5>Relative's Contact</h5>
              <div className="grid">
                <FormField
                  label="Relative Surname"
                  placeholder="Enter relative surname"
                  name="relativeSurname"
                  type="text"
                  fullWidth
                />
                <FormField
                  label="Relative first name"
                  placeholder="Enter relative first name"
                  name="relativeFirstName"
                  type="text"
                  fullWidth
                />
                <FormField
                  label="Relative Phone"
                  placeholder="Enter relative phone"
                  name="relativePhone"
                  type="text"
                  fullWidth
                />
              </div>
              <h5>Return applicants</h5>
              <div className="grid">
                <FormRadioGroup
                  label="Have you taken the exams before?"
                  name="takenExamsBefore"
                  options={[
                    { value: 'yes', label: 'Yes' },
                    { value: 'no', label: 'No' },
                  ]}
                  inline
                />
                {values.takenExamsBefore === 'yes' && (
                  <FormRadioGroup
                    label="Why do you wish to retake the exams"
                    name="isReturnApplicant"
                    options={EXAMS_TAKEN_OPTIONS}
                    inline
                  />
                )}
              </div>
              <button
                ref={ref}
                type="submit"
                style={{ visibility: 'hidden' }}
              ></button>
            </Form>
          )}
        </Formik>
        <BottomNavigation onStepChange={handleStepChange} />
      </Card>
    </StyledNewApplication>
  );
};

export default NewApplication;
