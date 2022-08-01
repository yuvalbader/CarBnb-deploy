import React from "react"
import "./style.css"
import StarIcon from "@mui/icons-material/Star"
import Avatar from "./Avatar/Index"
import Typography from "@mui/material/Typography"
export const Overview = ({ state }) => {
  return (
    <div className="brand_container">
      <div className="brand_name">
        <h2>
          {state.vehicle.brand} {state.vehicle.model} {state.vehicle.year}
        </h2>
        <h3 className="rating">
          {state.vehicle.ratingOfCar}.0
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
              {state.vehicle.nameOfHost}
            </h6>
            <h6 className="h6">{state.vehicle.email}</h6>
          </div>
        </div>
      </div>
      <div className="descreption">
        <h6>Description</h6>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </div>
    </div>
  )
}
