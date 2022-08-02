import React, { useEffect, useState } from "react"
import "./style.css"
import StarIcon from "@mui/icons-material/Star"
import Typography from "@mui/material/Typography"
import { useLocation } from "react-router-dom"
import ListApiService from "../../services/list-api-service"
import PopModal from "../userDetails/UserDetails"
export const Overview = () => {
  const [userDetails, setUserDetails] = useState({})
  const { state } = useLocation()
  // fetching user data by the state.userId
  useEffect(() => {
    ListApiService.getUserById(state.currentVehicle.user_id).then((user) => {
      setUserDetails(user)
    })
  }, [])

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
          <PopModal userDetails={userDetails} />
          <div className="profile_details">
            <h6 style={{ fontSize: "20px" }} className="h6">
              {userDetails.first_name} {userDetails.last_name}
            </h6>
            <h6>{userDetails.email}</h6>
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
