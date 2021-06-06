import { Children, cloneElement } from "react";
import { FieldArray, getIn } from "formik";

// map formik props to FieldArray wrapper child
const FormikArray = ({ children, name }) => {
  const child = Children.only(children);

  // array item template
  const fieldItem = (index, only, last, push, remove) =>
    cloneElement(child, {
      key: index,
      name: `${name}[${index}]`,
      only: only,
      last: last,
      handleAdd: (newField) => push(newField),
      handleDel: (index) => remove(index),
    });

  return (
    <FieldArray
      name={name}
      render={({ push, remove, form }) => {
        const values = getIn(form.values, name);

        return values.map((field, index) => {
          const only = values.length === 1;
          const last = index === values.length - 1;

          return fieldItem(index, only, last, push, remove);
        });
      }}
    />
  );
};

export default FormikArray;
