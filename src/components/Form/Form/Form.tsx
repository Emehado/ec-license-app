import React from "react";
import { Formik, Form as FormikForm } from "formik";

interface FormProps {
  initialValues: any;
  validationSchema: any;
  onSubmit: any;
  children: any;
  [rest: string]: any;
}

const Form: React.FC<FormProps> = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  ...rest
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      {...rest}
    >
      {() => <FormikForm>{children}</FormikForm>}
    </Formik>
  );
};

export default Form;
