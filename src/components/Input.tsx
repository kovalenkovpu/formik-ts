import React from "react";
import Input from "antd/lib/input";
import get from "lodash/get";
import isNil from "lodash/isNil";

import "./Input.css";
import { CustomInputProps } from "../types";

export default class CustomInput extends React.Component<CustomInputProps, {}> {
  static defaultProps = {
    placeholder: "Enter value",
    isRequired: false
  };

  onChange = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const { fieldName, form } = this.props;

    form.setFieldValue(fieldName, value);
  };

  renderErrorMessage = (errorMessage: string): React.ReactNode => {
    if (!errorMessage) {
      return null;
    }

    return <span className="required-label">{errorMessage}</span>;
  };

  render() {
    const {
      field: { name, value },
      form: { errors },
      placeholder,
      label,
      isRequired
    } = this.props;
    const inputValue = isNil(value) ? "" : value;
    const errorMessage = get(errors, name);

    return (
      <span className="input-wrapper">
        <label className="label" htmlFor={name}>
          <span className={`required-${isRequired ? "visible" : "hidden"}`}>
            *
          </span>
          {label}
        </label>
        <Input
          name={name}
          id={name}
          value={inputValue}
          placeholder={placeholder}
          onChange={this.onChange}
        />
        {this.renderErrorMessage(errorMessage)}
      </span>
    );
  }
}
