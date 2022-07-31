import React, { forwardRef } from "react"
import TextField from "@mui/material/TextField"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { makeStyles } from "@material-ui/core/styles"

const Datee = forwardRef((props, ref) => {
  const useStyles = makeStyles(() => ({
    noBorder: {
      border: "none",
    },
  }))
  const [value, setValue] = React.useState(null)
  const classes = useStyles()
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
        InputProps={{
          classes: { notchedOutline: classes.noBorder },
        }}
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
