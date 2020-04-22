import * as Yup from "yup";

export const validationSchema = () =>
  Yup.lazy(() =>
    Yup.object().shape({
      username: Yup.string()
        .nullable()
        .required("Field is required!")
        .matches(/^[a-z0-9]+$/i, {
          message: "Should be alphanumerical!"
        }),
      password: Yup.string().nullable()
    })
  );
