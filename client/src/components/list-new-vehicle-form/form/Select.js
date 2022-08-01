import { TextField } from '@mui/material';
import { MenuItem } from '@mui/material';
import { useField, useFormikContext } from 'formik';

function Select({ name, options, ...moreProps }) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const changeHandler = (event) => {
    const { value } = event.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...moreProps,
    select: true,
    variant: 'standard',
    fullWidth: true,
    onChange: changeHandler,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }
  return (
    <TextField {...configSelect}>
      {Object.keys(options).map((item, pos) => (
        <MenuItem key={pos} value={item}>
          {options[item]}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default Select;
