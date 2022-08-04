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
  const [open, setOpen] = useState(false)
  const [car, setCar] = useState(null)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => setOpen(false)
  const [carId, setCarId] = useState(id)
  const classes = useStyles()
  const today = new Date()
  const threeDays = new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000)
  const [dataFrom, setDataFrom] = React.useState(today)
  const [dataUntil, setDataUntil] = React.useState(threeDays)
  const [datesAvailable, setDatesAvailable] = React.useState(true)
  const monthFrom = state.dateFrom.toLocaleDateString().split("/")[0] - 2
  const yearFrom = state.dateFrom.toLocaleDateString().split("/")[2]
  const dayFrom = state.dateFrom.toLocaleDateString().split("/")[1]
  const monthUntil = state.dateUntil.toLocaleDateString().split("/")[0] - 2
  const yearUntil = state.dateUntil.toLocaleDateString().split("/")[2]
  const dayUntil = state.dateUntil.toLocaleDateString().split("/")[1]
  const [newDateFrom, setNewDateFrom] = React.useState(
    new Date(yearFrom, monthFrom, dayFrom)
  )
  const [newDateUntil, setNewDateUntil] = React.useState(
    new Date(yearUntil, monthUntil, dayUntil)
  )
  const fromRef = React.useRef(newDateFrom)
  const untilRef = React.useRef(newDateUntil)
  useEffect(() => {
    ListApiService.getCarByID(id).then((car) => {
      setCar(car)
    })
  }, [id])
  const getDates = useCallback(() => {
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

  const calcDays = useMemo(() => {
    return getDates()
  }, [dataFrom, dataUntil])

  const getAvailableDate = useCallback(() => {
    setDataFrom(newDateFrom)
    setDataUntil(newDateUntil)
    const data = {
      start_order: dataFrom,
      end_order: dataUntil,
      car_id: carId,
    }
    console.log("data", data)
    ListApiService.isCarAvailable(data).then((res) => {
      console.log("res", res)
      if (res && datesAvailable) {
        setDatesAvailable(false)
      } else {
        setDatesAvailable(true)
      }
    })
  }, [dataFrom, dataUntil])

  useMemo(() => {
    return getAvailableDate()
  }, [dataFrom, dataUntil])
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
                      setDataFrom={setDataFrom}
                      ref={fromRef}
                      label="From"
                      dateFrom={newDateFrom}
                    />
                    <Time time={135} />
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
                      setDataUntil={setDataUntil}
                      ref={untilRef}
                      label="Until"
                      dateUntil={newDateUntil}
                    />
                    <Time time={135} />
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
                      <Button
                        disabled={datesAvailable}
                        sx={{ width: "100%", mt: 2 }}
                        variant="contained"
                      >
                        Continue
                      </Button>
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
  //   return (
  //     <div>
  //       <Button onClick={handleOpen}>{text}</Button>
  //       <Modal
  //         aria-labelledby="transition-modal-title"
  //         aria-describedby="transition-modal-description"
  //         open={open}
  //         onClose={handleClose}
  //         closeAfterTransition
  //         BackdropComponent={Backdrop}
  //         BackdropProps={{
  //           timeout: 500,
  //         }}
  //       >
  //         <Fade in={open}>
  //           <Box sx={style}>
  //             <div className="sideSearch_container">
  //               <div>
  //                 <Typography variant="h6" gutterBottom>
  //                   <span style={{ fontWeight: "bold" }}>
  //                     {car?.price_per_day}$
  //                   </span>{" "}
  //                   / Day
  //                   <hr style={{ width: "18%" }} />
  //                   <div>
  //                     US ${parseInt(car?.price_per_day) * calcDays} est.total
  //                   </div>
  //                 </Typography>
  //                 <Typography
  //                   sx={{ marginTop: "1vh", width: "100%", textAlign: "start" }}
  //                   variant="h6"
  //                 >
  //                   Trip start
  //                 </Typography>
  //                 <div className="date_time">
  //                   <DateToPick
  //                     classes={classes}
  //                     setDataFrom={setDataFrom}
  //                     ref={fromRef}
  //                     label="From"
  //                   />
  //                   <Time time={135} />
  //                 </div>
  //                 <Typography
  //                   sx={{ marginTop: "1vh", width: "100%", textAlign: "start" }}
  //                   variant="h6"
  //                 >
  //                   Trip end
  //                 </Typography>
  //                 <div className="date_time">
  //                   <DateToPick
  //                     classes={classes}
  //                     setDataUntil={setDataUntil}
  //                     ref={untilRef}
  //                     label="Until"
  //                   />
  //                   <Time time={135} />
  //                 </div>
  //               </div>
  //               <div style={{ width: "100%" }}>
  //                 <Typography
  //                   sx={{ marginTop: "1vh", width: "100%", textAlign: "start" }}
  //                   variant="h6"
  //                 >
  //                   Pick up & return location
  //                 </Typography>
  //                 <div className="sideSearch_continue">
  //                   <Stack direction="row">
  //                     <Button
  //                       disabled={datesAvailable}
  //                       sx={{ width: "100%", mt: 2 }}
  //                       variant="contained"
  //                     >
  //                       Continue
  //                     </Button>
  //                   </Stack>
  //                 </div>
  //               </div>
  //             </div>
  //           </Box>
  //         </Fade>
  //       </Modal>
  //     </div>
}
