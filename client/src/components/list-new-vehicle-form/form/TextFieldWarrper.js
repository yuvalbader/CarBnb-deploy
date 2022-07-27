import TextField from '@mui/material/TextField';
import { useField } from 'formik';

function TextFieldWarrper({ name, ...moreProps }) {
  const [field, meta] = useField(name);
  const configTextField = {
    ...field,
    ...moreProps,
    fullWidth: true,
    variant: 'standard',
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return <TextField {...configTextField} />;
}

export default TextFieldWarrper;
