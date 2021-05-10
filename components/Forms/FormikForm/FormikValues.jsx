import { useFormikContext } from "formik";

const FormikValues = () => {
  const { values } = useFormikContext();

  return <div>{JSON.stringify(values, null, 2)}</div>;
};

export default FormikValues;
