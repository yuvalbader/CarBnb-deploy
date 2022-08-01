import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

function valuetext(value) {
  return `${value}$`;
}

export default function RangeSlider({
  minValue = 0,
  maxValue = 100,
  onChangeRange = () => {},
}) {
  const [value, setValue] = useState([minValue, maxValue]);

  const handleChange = (event, newValue) => {
    onChangeRange(value);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '90%' }}>
      <Typography variant={'subtitle1'}>
        ${value[0]}-{value[1]}/day{' '}
      </Typography>
      <Slider
        getAriaLabel={() => 'price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max={maxValue}
        min={minValue}
      />
    </Box>
  );
}
