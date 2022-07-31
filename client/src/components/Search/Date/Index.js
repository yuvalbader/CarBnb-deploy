import React, { forwardRef } from "react"
import TextField from "@mui/material/TextField"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

const Datee = forwardRef((props, ref) => {
  const [value, setValue] = React.useState(null)
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        toolbarPlaceholder={props.label}
        value={
          value === null
            ? props.label === "From"
              ? new Date()
              : new Date().setDate(new Date().getDate() + 3)
            : value
        }
        inputRef={ref}
        onChange={(newValue) => {
          setValue(newValue)
          props.label === "From"
            ? props.setDataFrom(newValue)
            : props.setDataUntil(newValue)
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
})

export default Datee
