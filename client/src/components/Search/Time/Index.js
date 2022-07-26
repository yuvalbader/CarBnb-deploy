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
    <FormControl sx={{ minWidth: 120,m:3 }}>
      <Select value={time} onChange={handleChange} displayEmpty inputRef={ref}>
        <MenuItem value="">
          <em>10:00AM</em>
        </MenuItem>
        {possibleTimes.map((time) => (
          <MenuItem value={time}>{time}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
})

export default Time
