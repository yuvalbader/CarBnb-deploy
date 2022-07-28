import Button from '@mui/material/Button';
import { useRef } from 'react';
import { useField, useFormikContext } from 'formik';

function InputButton({ name, text, children, ...moreProps }) {
  const [field, meta] = useField(name);
  const input = useRef();
  const { setFieldValue } = useFormikContext();

  const changeHandler = (event) => {
    const { file } = event.target.files[0].name;
    setFieldValue(name, file);
  };

  const InputButtonHandler = () => {
    input.current.click();
  };

  const configTextField = {
    ...field,
    ...moreProps,
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  const configButton = {
    variant: 'contained',
    color: 'primary',
  };

  return (
    <div>
      <input
        onChange={(e) => changeHandler(e)}
        ref={input}
        id="input-button"
        type="file"
        style={{ display: 'none' }}
        {...configTextField}
      ></input>
      <label htmlFor="input-button">
        <Button onClick={InputButtonHandler} {...configButton}>
          {children}
        </Button>
        <p style={{ display: 'inline-block', margin: '5px' }}>{meta.value}</p>
      </label>
    </div>
  );
}

export default InputButton;
