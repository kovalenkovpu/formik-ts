import React from "react";
import { Field } from "formik";

import CustomInput from "./Input";
import { InputWithFieldProps } from "../types";

const InputWithField: React.FC<InputWithFieldProps> = props => (
  <Field component={CustomInput} name={props.fieldName} {...props} />
);

export default InputWithField;
