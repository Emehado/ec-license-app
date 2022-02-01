import React from "react";
import { Field } from "formik";
import ErrorMessage from "../Form/ErrorMessage";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  name: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options, name }) => {
  return (
    <div>
      {options.map((option) => (
        <div>
          <label>
            <Field
              type="radio"
              name={name}
              value={option.value}
              style={{ marginRight: 10 }}
            />
            {option.label}
          </label>
        </div>
      ))}
      <ErrorMessage name={name} />
    </div>
  );
};

export default RadioGroup;
