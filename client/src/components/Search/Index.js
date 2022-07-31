import { useState, useRef, useMemo, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Fab from "@mui/material/Fab"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import parse from "autosuggest-highlight/parse"
import throttle from "lodash/throttle"
import Datee from "./Date/Index"
import Time from "./Time/Index"
import SearchIcon from "@mui/icons-material/Search"
import IconButton from "@mui/material/IconButton"
import "./style.css"
import { search } from "../../app/actions/search-actions"
import { getIsLoading } from "../../app/selectors/view-selectors"

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

export default function Search() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loading = useSelector(getIsLoading)
  const [value, setValue] = useState(null)
  const [inputValue, setInputValue] = useState("")
  const [options, setOptions] = useState([])
  const loaded = useRef(false)
  const whereRef = useRef()
  const fromRef = useRef()
  const untilRef = useRef()
  const timeToPickRef = useRef()
  const timeToDropRef = useRef()

  console.log("loading before search", loading)
  const searchHandler = () => {
    const dateFrom = fromRef.current.value.split("/")
    const dateUntil = untilRef.current.value.split("/")
    const timeFrom = timeToPickRef.current.value.split(":")
    const timeUntil = timeToDropRef.current.value.split(":")

    const yearFrom = dateFrom[2]
    const monthFrom = dateFrom[0]
    const dayFrom = dateFrom[1]
    const hoursFrom = timeFrom[0]
    const minutesFrom = timeFrom[1]

    const yearUntil = dateUntil[2]
    const monthUntil = dateUntil[0]
    const dayUntil = dateUntil[1]
    const hoursUntil = timeUntil[0]
    const minutesUntil = timeUntil[1]

    const searchDataObject = {
      location: whereRef.current.value,
      start_order: new Date(
        yearFrom,
        monthFrom,
        dayFrom,
        hoursFrom,
        minutesFrom
      ),
      end_order: new Date(
        yearUntil,
        monthUntil,
        dayUntil,
        hoursUntil,
        minutesUntil
      ),
    }

    dispatch(search(searchDataObject))
    console.log("loading after search", loading)
    navigate("/searchResult")
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

  const fetch = useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback)
      }, 200),
    []
  )

  useEffect(() => {
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

  if (loading) {
    return (
      <div className="loading_container">
        <img
          className="loading_page"
          src="https://cdn.dribbble.com/users/778626/screenshots/4339853/media/35ef4328e6a9fa16ef277436cab1dc09.gif"
          alt="loading"
        />
      </div>
    )
  }
  return (
    <div className="container__searchBar">
      <div className="searchContainer">
        <Autocomplete
          id="google-map-demo"
          sx={{ width: 400 }}
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
              fullWidth
              placeholder="Where?"
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
        <div className="vertical_line"></div>
        <Datee ref={fromRef} label="From" />
        <Time ref={timeToPickRef} />
        <div className="vertical_line"></div>
        <Datee ref={untilRef} label="Until" />
        <Time ref={timeToDropRef} />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          onClick={searchHandler}
        >
          <Box>
            <Fab size="small" color="primary" aria-label="search">
              <SearchIcon />
            </Fab>
          </Box>
        </IconButton>
      </div>
    </div>
  )
}
