import React, { useCallback, useMemo } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import parse from "autosuggest-highlight/parse"
import throttle from "lodash/throttle"
import DateToPick from "../Search/Date/Index"
import Time from "../Search/Time/Index"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import "./style.css"
const GOOGLE_MAPS_API_KEY = "AIzaSyAsJrza-9qgAdE5FUD2f26prJwV9vCt7wA"

function loadScript(src, position, id) {
  if (!position) {
    return
  }

  const script = document.createElement("script")
  script.setAttribute("async", "")
  script.setAttribute("id", id)
  script.src = src
  position.appendChild(script)
}

const autocompleteService = { current: null }

export default function SideSearch({ state }) {
  const today = new Date()
  const threeDays = new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000)
  const [value, setValue] = React.useState(null)
  const [inputValue, setInputValue] = React.useState("")
  const [options, setOptions] = React.useState([])
  const loaded = React.useRef(false)
  const fromRef = React.useRef()
  const untilRef = React.useRef()
  const [dataFrom, setDataFrom] = React.useState(today)
  const [dataUntil, setDataUntil] = React.useState(threeDays)
  // const selector = useSelector((state) => state)
  console.log(threeDays)
  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
        document.querySelector("head"),
        "google-maps"
      )
    }

    loaded.current = true
  }
  const getDates = useCallback(() => {
    // calculate the number of days between the two dates
    const diffTime = Math.abs(dataUntil - dataFrom)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const days = []
    for (let i = 0; i < diffDays; i++) {
      const day = new Date(dataFrom)
      day.setDate(day.getDate() + i)
      days.push(day)
    }
    return days.length
  }, [dataFrom, dataUntil])

  const fetch = React.useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback)
      }, 200),
    []
  )

  const calcDays = useMemo(() => {
    return getDates()
  }, [dataFrom, dataUntil])

  React.useEffect(() => {
    let active = true

    if (!autocompleteService.current) {
      return undefined
    }

    if (inputValue === "") {
      setOptions(value ? [value] : [])
      return undefined
    }

    fetch({ input: inputValue }, (results) => {
      if (active) {
        let newOptions = []

        if (value) {
          newOptions = [value]
        }

        if (results) {
          newOptions = [...newOptions, ...results]
        }

        setOptions(newOptions)
      }
    })

    return () => {
      active = false
    }
  }, [value, inputValue, fetch])

  console.log("Calcdays", calcDays)

  return (
    <div className="sideSearch_container">
      <div>
        <Typography variant="h6" gutterBottom>
          <span style={{ fontWeight: "bold" }}>{state.vehicle.price}</span> /
          Day
          <hr style={{ width: "18%" }} />
          <div>
            US ${parseInt(state.vehicle.price.split("$")[1]) * calcDays}{" "}
            est.total
          </div>
        </Typography>
        <Typography
          sx={{ marginTop: "1vh", width: "100%", textAlign: "start" }}
          variant="h6"
        >
          Trip start
        </Typography>
        <div>
          <DateToPick setDataFrom={setDataFrom} ref={fromRef} label="From" />
          <Time />
        </div>
        <Typography
          sx={{ marginTop: "1vh", width: "100%", textAlign: "start" }}
          variant="h6"
        >
          Trip end
        </Typography>
        <div>
          <DateToPick
            setDataUntil={setDataUntil}
            ref={untilRef}
            label="Until"
          />
          <Time />
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <Typography
          sx={{ marginTop: "1vh", width: "100%", textAlign: "start" }}
          variant="h6"
        >
          Pick up & return location
        </Typography>
        <Autocomplete
          id="google-map-demo"
          sx={{ width: "100%" }}
          getOptionLabel={(option) =>
            typeof option === "string" ? option : option.description
          }
          filterOptions={(x) => x}
          options={options}
          autoComplete
          includeInputInList
          filterSelectedOptions
          value={value}
          onChange={(event, newValue) => {
            setOptions(newValue ? [newValue, ...options] : options)
            setValue(newValue)
          }}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue)
          }}
          renderInput={(params) => (
            <TextField {...params} placeholder="Where" fullWidth />
          )}
          renderOption={(props, option) => {
            const matches =
              option.structured_formatting.main_text_matched_substrings
            const parts = parse(
              option.structured_formatting.main_text,
              matches.map((match) => [
                match.offset,
                match.offset + match.length,
              ])
            )

            return (
              <li {...props}>
                <Grid container alignItems="center">
                  <Grid item>
                    <Box
                      component={LocationOnIcon}
                      sx={{ color: "text.secondary", mr: 2 }}
                    />
                  </Grid>
                  <Grid item xs>
                    {parts.map((part, index) => (
                      <span
                        key={index}
                        style={{
                          fontWeight: part.highlight ? 700 : 400,
                        }}
                      >
                        {part.text}
                      </span>
                    ))}

                    <Typography variant="body2" color="text.secondary">
                      {option.structured_formatting.secondary_text}
                    </Typography>
                  </Grid>
                </Grid>
              </li>
            )
          }}
        />
        <div className="sideSearch_continue">
          <Stack direction="row">
            <Button sx={{ width: "100%", mt: 2 }} variant="contained">
              Continue
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  )
}
