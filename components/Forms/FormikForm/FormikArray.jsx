import { Children, cloneElement } from "react";
import { FieldArray, getIn } from "formik";

// map formik props to FieldArray wrapper child
const FormikArray = ({ children, name }) => {
  const child = Children.only(children);

  // array item template
  const fieldItem = (index, push, remove) =>
    cloneElement(child, {
      key: index,
      name: `${name}[${index}]`,
      handleAdd: (newField) => push(newField),
      handleDel: (index) => remove(index),
    });

  return (
    <FieldArray
      name={name}
      render={({ push, remove, form }) =>
        getIn(form.values, name).map((field, index) =>
          fieldItem(index, push, remove)
        )
      }
    />
  );
};

export default FormikArray;
