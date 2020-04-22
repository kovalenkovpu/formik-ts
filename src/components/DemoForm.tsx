import React from "react";
import isEmpty from "lodash/isEmpty";
import "antd/dist/antd.css";
import Button from "antd/lib/button";
import { withFormik, FormikProps } from "formik";

import InputWithField from "./InputWithField";
import { validationSchema } from "./validationSchema";
import { FormValues, DemoFormOwnProps } from "../types";

const Demo: React.FC<DemoFormOwnProps & FormikProps<FormValues>> = props => {
  const { dirty, errors, handleSubmit } = props;
  const checkIfDisabled = (): boolean => !dirty || !isEmpty(errors);

  return (
    <form onSubmit={handleSubmit}>
      <InputWithField fieldName="username" label="Username" isRequired={true} />
      <InputWithField fieldName="password" label="Password" />
      <Button htmlType="submit" type="primary" disabled={checkIfDisabled()}>
        Submit
      </Button>
    </form>
  );
};

const DemoForm = withFormik<DemoFormOwnProps, FormValues>({
  enableReinitialize: true,
  validateOnMount: true,
  mapPropsToValues: ({ initialUserName = "" }): FormValues => ({
    username: initialUserName,
    password: ""
  }),
  handleSubmit: (values): void => {
    console.log("Submitted: ", values);
  },
  validationSchema
})(Demo);

export default DemoForm;
