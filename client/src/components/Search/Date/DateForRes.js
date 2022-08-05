import React, { forwardRef } from "react"
import TextField from "@mui/material/TextField"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { makeStyles } from "@material-ui/core/styles"

const DateForRes = forwardRef((props, ref) => {
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
              ? props.dateFrom
              : props.dateUntil
            : value
        }
        inputRef={ref}
        InputProps={{
          classes: {
            notchedOutline: props.classes ? props.classes : classes.noBorder,
          },
        }}
        onChange={(newValue) => {
          if (window.location.href !== "http://localhost:3000/") {
            setValue(newValue)
            props.label === "From"
              ? props.setDataFrom(newValue)
              : props.setDataUntil(newValue)
          } else {
            setValue(newValue)
          }
        }}
        renderInput={(params) => (
          <TextField sx={{ minWidth: 145 }} {...params} />
        )}
      />
    </LocalizationProvider>
  )
})

export default DateForRes
