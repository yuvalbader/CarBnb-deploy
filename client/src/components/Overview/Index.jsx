import React from "react"

export const Overview = ({ state }) => {
  return (
    <div className="brand_container">
      <div className="brand_name">
        <h2>
          {state.vehicle.brand} {state.vehicle.model} {state.vehicle.year}
        </h2>
        <div className="rating">
          <h3>
            {state.vehicle.ratingOfCar}.0 <span></span>
          </h3>
        </div>
      </div>
    </div>
  )
}
