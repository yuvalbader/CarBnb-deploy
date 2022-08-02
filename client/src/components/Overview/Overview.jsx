import React from "react"
import "./style.css"
import StarIcon from "@mui/icons-material/Star"
import Avatar from "./Avatar/Index"
import Typography from "@mui/material/Typography"
import { useLocation } from "react-router-dom"
export const Overview = () => {
  const { state } = useLocation()
  console.log(state, "state")
  return (
    <div className="brand_container">
      <div className="brand_name">
        <h2>
          {state.currentVehicle.brand} {state.currentVehicle.model}{" "}
          {state.currentVehicle.year}
        </h2>
        <h3 className="rating">
          <span style={{ marginTop: 2 }}>
            <StarIcon color="primary" />
          </span>
        </h3>
      </div>
      <div className="hosted_by">
        <h6>Hosted By:</h6>
        <div className="profile">
          <Avatar />
          <div className="profile_details">
            <h6 style={{ fontSize: "20px" }} className="h6">
              {/* {state.currentVehicle.nameOfHost} */}
            </h6>
            {/* <h6 className="h6">{state.currentVehicle.email}</h6> */}
          </div>
        </div>
      </div>
      <div className="descreption">
        <h6>Description</h6>
        <Typography variant="body1" gutterBottom>
          {state.currentVehicle.description}
        </Typography>
      </div>
    </div>
  )
}
