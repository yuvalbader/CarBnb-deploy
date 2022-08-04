import React, { useState, useEffect, useCallback, useMemo } from "react"
import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import ListApiService from "../../services/list-api-service"
import DateToPick from "../Search/Date/DateForRes"
import Time from "../Search/Time/Index"
import Stack from "@mui/material/Stack"
import { makeStyles } from "@material-ui/core/styles"
import { useSelector } from "react-redux"
import CircularProgress from "@mui/material/CircularProgress"
import { green } from "@mui/material/colors"
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}
const useStyles = makeStyles(() => ({
  noBorder: {
    border: "solid 1px #e0e0e0",
  },
}))
export default function ReserveCar({ id, text, state }) {
  // #############################################################################
  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const timer = React.useRef()

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  }

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current)
    }
  }, [])

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false)
      setLoading(true)
      timer.current = window.setTimeout(() => {
        ListApiService.createReservation(dataToSend).then((res) => {
          console.log("res", res)
        })
        setSuccess(true)
        setLoading(false)
      }, 2000)
    }
  }
  // #############################################################################
  const userId = useSelector((state) => state.userSlice.userObject.id)
  const [open, setOpen] = useState(false)
  const [car, setCar] = useState(null)
  const handleOpen = () => {
    setOpen(true)
    // getAvailableDate()
  }
  const handleClose = () => setOpen(false)
  const [carId, setCarId] = useState(id)
  const classes = useStyles()
  const today = new Date()
  const threeDays = new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000)
  const [datesAvailable, setDatesAvailable] = React.useState(true)
  const monthFrom = state.dateFrom.toLocaleDateString().split("/")[0] - 2
  const yearFrom = state.dateFrom.toLocaleDateString().split("/")[2]
  const dayFrom = state.dateFrom.toLocaleDateString().split("/")[1]
  const monthUntil = state.dateUntil.toLocaleDateString().split("/")[0] - 2
  const yearUntil = state.dateUntil.toLocaleDateString().split("/")[2]
  const dayUntil = state.dateUntil.toLocaleDateString().split("/")[1]
  const [timeFrom, setTimeFrom] = React.useState()
  const [timeUntil, setTimeUntil] = React.useState()
  const [dataToSend, setDataToSend] = React.useState(null)
  const [newDateFrom, setNewDateFrom] = React.useState(
    new Date(yearFrom, monthFrom, dayFrom)
  )
  const [newDateUntil, setNewDateUntil] = React.useState(
    new Date(yearUntil, monthUntil, dayUntil)
  )
  console.log("time from", timeFrom)
  console.log("time until", timeUntil)
  const fromRef = React.useRef()
  const untilRef = React.useRef()
  useEffect(() => {
    ListApiService.getCarByID(id).then((car) => {
      setCar(car)
    })
  }, [id])

  const getDates = useCallback(() => {
    const diffTime = Math.abs(newDateUntil - newDateFrom)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const days = []
    for (let i = 0; i < diffDays; i++) {
      const day = new Date(newDateFrom)
      day.setDate(day.getDate() + i)
      days.push(day)
    }
    return days.length
  }, [newDateFrom, newDateUntil])

  const calcDays = useMemo(() => {
    return getDates()
  }, [newDateFrom, newDateUntil])
  const getAvailableDate = useCallback(() => {
    setNewDateFrom(newDateFrom)
    setNewDateUntil(newDateUntil)
    console.log(newDateFrom, newDateUntil)
    const data = {
      start_order: newDateFrom,
      end_order: newDateUntil,
      car_id: carId,
      user_id: userId,
      start_time: timeFrom,
      end_time: timeUntil,
      total_price: car?.price_per_day * calcDays,
    }
    console.log("data", data)
    setDataToSend(data)
    ListApiService.isCarAvailable(data).then((res) => {
      console.log("res", res)
      if (res) {
        setDatesAvailable(false)
      } else {
        setDatesAvailable(true)
      }
    })
  }, [newDateFrom, newDateUntil,timeFrom,timeUntil])

  useMemo(() => {
    return getAvailableDate()
  }, [newDateFrom, newDateUntil,timeFrom,timeUntil])

  if (car) {
    return (
      <div>
        <Button onClick={handleOpen}>{text}</Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <div className="sideSearch_container">
                <div>
                  <Typography variant="h6" gutterBottom>
                    <span style={{ fontWeight: "bold" }}>
                      {car?.price_per_day}$
                    </span>{" "}
                    / Day
                    <hr style={{ width: "18%" }} />
                    <div>
                      US ${parseInt(car?.price_per_day) * calcDays} est.total
                    </div>
                  </Typography>
                  <Typography
                    sx={{ marginTop: "1vh", width: "100%", textAlign: "start" }}
                    variant="h6"
                  >
                    Trip start
                  </Typography>
                  <div className="date_time">
                    <DateToPick
                      classes={classes}
                      setDataFrom={setNewDateFrom}
                      ref={fromRef}
                      label="From"
                      dateFrom={newDateFrom}
                    />
                    <Time label="from" time={135} setTimeFrom={setTimeFrom} />
                  </div>
                  <Typography
                    sx={{ marginTop: "1vh", width: "100%", textAlign: "start" }}
                    variant="h6"
                  >
                    Trip end
                  </Typography>
                  <div className="date_time">
                    <DateToPick
                      classes={classes}
                      setDataUntil={setNewDateUntil}
                      ref={untilRef}
                      label="Until"
                      dateUntil={newDateUntil}
                    />
                    <Time
                      label="until"
                      time={135}
                      setTimeUntil={setTimeUntil}
                    />
                  </div>
                </div>
                <div style={{ width: "100%" }}>
                  <Typography
                    sx={{ marginTop: "1vh", width: "100%", textAlign: "start" }}
                    variant="h6"
                  >
                    Pick up & return location
                  </Typography>
                  <div className="sideSearch_continue">
                    <Stack direction="row">
                      {/* <Button
                        onClick={handleReserveClick}
                        disabled={datesAvailable}
                        sx={{ width: "100%", mt: 2 }}
                        variant="contained"
                      >
                        Continue
                      </Button> */}
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box sx={{ m: 1, position: "relative" }}>
                          <Button
                            variant="contained"
                            sx={buttonSx}
                            disabled={datesAvailable}
                            onClick={handleButtonClick}
                          >
                            Complete Reservation
                          </Button>
                          {datesAvailable && (
                            <CircularProgress
                              size={24}
                              sx={{
                                color: green[500],
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                marginTop: "-12px",
                                marginLeft: "-12px",
                              }}
                            />
                          )}
                        </Box>
                      </Box>
                    </Stack>
                  </div>
                </div>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    )
  }
  return null
}
