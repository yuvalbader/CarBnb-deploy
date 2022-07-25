import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import parse from "autosuggest-highlight/parse"
import throttle from "lodash/throttle"
import Date from "./Date/Index"
import Time from "./Time/Index"
import SearchIcon from "@mui/icons-material/Search"
import IconButton from "@mui/material/IconButton"
import "./style.css"
import { search } from "../../app/actions/search-actions"
import { fetchVehicles } from "../../app/actions/fetch-cars-actions"
const GOOGLE_MAPS_API_KEY = "AIzaSyAsJrza-9qgAdE5FUD2f26prJwV9vCt7wA"

function loadScript(src, id) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script")
    script.setAttribute("async", "")
    script.setAttribute("id", id)
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

const autocompleteService = {
  current: null,
}

export default function GoogleMaps() {
  const dispatch = useDispatch()
  const [value, setValue] = React.useState(null)
  const [inputValue, setInputValue] = React.useState("")
  const [options, setOptions] = React.useState([])
  const loaded = React.useRef(false)
  const whereRef = React.useRef()
  const fromRef = React.useRef()
  const untilRef = React.useRef()
  const timeToPickRef = React.useRef()
  const timeToDropRef = React.useRef()

  const searchHandler = () => {
    dispatch(
      search(
        whereRef.current.value,
        fromRef.current.value,
        untilRef.current.value,
        timeToPickRef.current.value,
        timeToDropRef.current.value
      )
    )
  }
  const fetchAllCars = async () => {
    dispatch(fetchVehicles())
  }

  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
        document.body,
        "google-maps"
      ).then(() => {
        autocompleteService.current =
          new window.google.maps.places.AutocompleteService()

        loaded.current = true
      })
    }
  }

  const fetch = React.useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback)
      }, 200),
    []
  )

  React.useEffect(() => {
    let active = true

    // ask about this
    // if (!autocompleteService.current && window.google) {
    //   // autocompleteService.current =
    //   //   new window.google.maps.places.AutocompleteService()
    // }

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
  return (
    <div className="container">
      <div className="searchContainer">
        <Autocomplete
          id="google-map-demo"
          sx={{ width: 300 }}
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
            <TextField
              inputRef={whereRef}
              {...params}
              label="Where"
              fullWidth
            />
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
        <Date ref={fromRef} label="From" />
        <Date ref={untilRef} label="Until" />
        <Time ref={timeToPickRef} />
        <Time ref={timeToDropRef} />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          onClick={searchHandler}
        >
          <SearchIcon className="search-icon" />
        </IconButton>
        <button onClick={fetchAllCars} className="fetchAll">
          FetchAll
        </button>
      </div>
    </div>
  )
}
