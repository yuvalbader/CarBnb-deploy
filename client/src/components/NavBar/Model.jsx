import React, { useCallback } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import HelperTextMisaligned from "../Login/Index"
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
}

const styleButton = {
  position: "relative",
  color: "white",
}

export default function Model({ pageName }) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button sx={styleButton} onClick={handleOpen}>
        {pageName}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            style={{
              display: "flex",
              alignText: "center",
              justifyContent: "center",
            }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            <h1>Welcome Back</h1>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <HelperTextMisaligned />
          </Typography>
        </Box>
      </Modal>
    </>
  )
}
