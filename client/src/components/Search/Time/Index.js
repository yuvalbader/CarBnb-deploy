import React, { forwardRef } from "react"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { makeStyles } from "@material-ui/core/styles"
import { possibleTimes } from "./data"
import "./style.css"

const useStyles = makeStyles(() => ({
  notchedOutline: {
    border: "none",
  },
  select: {
    "& li": {
      fontSize: 12,
    },
  },
  dropdownStyle: {
    backgroundColor: "lightgrey",
  },
}))

const Time = forwardRef((props, ref) => {
  const classes = useStyles()
  const [time, setTime] = React.useState("")
  const handleChange = (event) => {
    setTime(event.target.value)
  }

  return (
    <FormControl sx={{ minWidth: 125, mr: 1 }}>
      <Select
        variant="standard"
        MenuProps={{ classes: { paper: classes.dropdownStyle } }}
        value={time}
        onChange={handleChange}
        inputRef={ref}
        inputProps={{ border: "sildpink" }}
        required
      >
        {possibleTimes.map((time, index) => (
          <MenuItem key={index} value={time}>
            {time}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
})

export default Time
