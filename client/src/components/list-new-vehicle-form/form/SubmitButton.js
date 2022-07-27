import Button from '@mui/material/Button';
import { useFormikContext } from 'formik';

function SubmitButton({ text, ...moreProps }) {
  const { submitForm } = useFormikContext();

  const submitHandler = () => {
    submitForm();
  };

  const configButton = {
    variant: 'contained',
    color: 'primary',
    onClick: submitHandler,
  };

  return <Button {...configButton}>{text}</Button>;
}

export default SubmitButton;
