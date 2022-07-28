import React, { forwardRef } from "react"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

import { possibleTimes } from "./data"
import "./style.css"
const Time = forwardRef((props, ref) => {
  const [time, setTime] = React.useState("")
  const handleChange = (event) => {
    setTime(event.target.value)
  }

  return (
    <FormControl sx={{ minWidth: 125 }}>
      <Select value={time} onChange={handleChange} inputRef={ref}>
        {possibleTimes.map((time) => (
          <MenuItem value={time}>{time}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
})

export default Time
