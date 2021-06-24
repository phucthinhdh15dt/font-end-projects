// @flow
import { HTMLAttributes } from "react";
import { FormContext, useFormContext } from "react-hook-form";
import { Collapse } from "reactstrap";

type Props = HTMLAttributes<HTMLFormElement> & {
  methods: object,
  onSubmit: (values: object) => void,
};

export const HForm = ({ methods, onSubmit, innerRef, ...props }: Props) => {
  return (
    <FormContext {...methods}>
      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          return methods.handleSubmit(onSubmit)(e);
        }}
        {...props}
        ref={innerRef}
      />
    </FormContext>
  );
};

// export const AllFieldRequiredText: FunctionComponent = (props) => {
//   const { errors } = useFormContext();

//   return (
//     <Collapse
//       isOpen={Object.keys(errors).some(
//         (key) => errors[key].type === "required"
//       )}
//       {...props}
//     >
//       <small className="text-danger">allFieldRequired</small>
//     </Collapse>
//   );
// };
