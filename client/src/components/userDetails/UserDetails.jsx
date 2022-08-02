import React, { useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import Avatar from "../Overview/Avatar/Index"
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

export default function PopModal({ userDetails }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  console.log(userDetails)
  return (
    <div>
      <Button sx={{ padding: 0 }} onClick={handleOpen}>
        <Avatar name={userDetails.first_name + " " + userDetails.last_name} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {userDetails.first_name + " " + userDetails.last_name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {userDetails.email}
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
