/* eslint-disable react/destructuring-assignment */
// @flow
import { Button, ButtonProps, Spinner } from 'reactstrap';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';

export const HButton = (props: ButtonProps) => {
  const { formState } = useFormContext();
  const { dirty, isSubmitting } = formState;

  const spinnerClasses = classNames('align-middle mr-2', { 'd-none': !isSubmitting });

  return (
    <Button color="success" {...props} disabled={!dirty || isSubmitting || props.disabled}>
      <Spinner size="sm" color="light" className={spinnerClasses} />

      {props.children || 'Save'}
    </Button>
  );
};
