import Button from '@mui/material/Button';
import TextFieldWarrper from './TextFieldWarrper';
import { useRef, useState } from 'react';
import { useField } from 'formik';

function InputButton({ name, text, children, ...moreProps }) {
  const [field, meta] = useField(name);
  const input = useRef();
  const [selectedFile,setSelectedFile] = useState();

  const InputButtonHandler = () => {
    input.current.click();
  }

  const configTextField = {
    ...field,
    ...moreProps,
    fullWidth: true,
    variant: 'outlined',
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
    <div >
      <input onChange={(e) =>{setSelectedFile(e.target.files[0].name)}} ref={input} id="input-button" type="file" style={{ display: 'none' }}></input>
      <label htmlFor="input-button">
        <Button onClick={InputButtonHandler} {...configButton}>{children}</Button>
        <p style={{display: 'inline-block', margin:'5px'}}>{selectedFile}</p>
      </label>
    </div>
  );
}

export default InputButton;
