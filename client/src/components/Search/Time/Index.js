import React, { forwardRef } from "react"
import TextField from "@mui/material/TextField"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { TimePicker } from "@mui/x-date-pickers/TimePicker"
import "./style.css"
const Time = forwardRef((_props, ref) => {
  const [value, setValue] = React.useState(null)
  console.log("value", value);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label="10:00AM"
        value={value}
        inputRef={ref}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
})

export default Time
