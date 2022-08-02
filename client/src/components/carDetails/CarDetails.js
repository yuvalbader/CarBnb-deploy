import React, { useState, useEffect } from "react"
import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import ListApiService from "../../services/list-api-service"

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

export default function CarModal({ id }) {
  const [open, setOpen] = useState(false)
  const [car, setCar] = useState(null)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    ListApiService.getCarByID(id).then((car) => {
      setCar(car)
    })
  }, [id])
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {car.brand} {car.model} {car.year}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {car.description}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {car.location}
            </Typography>
            <h6>Features</h6>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={6} key={car.id}>
                <Typography variant="h6">{car.engine}Engine</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} key={car.id}>
                <Typography variant="h6">{car.gear}Gear</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} key={car.id}>
                <Typography variant="h6">
                  {car.number_of_seats}Number Of Seats
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
