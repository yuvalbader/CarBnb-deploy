import React from "react"
import Rating from "@mui/material/Rating"

export default function RatingOfCar({ rating }) {
  return <Rating sx={{ m: 2 }} name="read-only" value={rating} readOnly />
}
