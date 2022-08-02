import * as React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { useSelector } from "react-redux"

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }))

export default function Features() {
  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <h6>Features</h6>
      <Grid container spacing={2}>
        {/* {vehiclesObject.features.map((feature, index) => (
          <Grid item xs={6} sm={6} md={6} key={index}>
            <Typography variant="h6">{feature}</Typography>
          </Grid>
        ))} */}
      </Grid>
    </Box>
  )
}
