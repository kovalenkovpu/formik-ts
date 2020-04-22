import { FormikProps, FieldInputProps } from "formik";

export interface FormValues {
  username: string;
  password: string;
}

export interface DemoFormProps {
  initialUserName: string;
}

export type InputWithFieldProps = {
  fieldName: string;
  label: string;
  isRequired?: boolean;
  placeholder?: string;
};

export type CustomInputProps = InputWithFieldProps & {
  form: FormikProps<FormValues>;
  field: FieldInputProps<keyof FormValues>;
};

export type DemoFormOwnProps = {
  initialUserName: string;
};
