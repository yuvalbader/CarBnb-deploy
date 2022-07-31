import VehicleCard from "../vehicle-card/VehicleCard"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"

const styleList = { display: "grid", gridTemplateColumns: "repeat(3,1fr)" }

const VehicleListContainer = ({ vehicles }) => {
  return (
    <List sx={styleList}>
      {vehicles.map((vehicle, index) => (
        <ListItem key={index}>
          <VehicleCard
            brand={vehicle.brand}
            model={vehicle.model}
            price={vehicle.price_per_day}
            image={vehicle.profile_picture}
            gear={"manual"}
            location={vehicle.location}
            seats={"4"}
            engine={"hybrid"}
          />
        </ListItem>
      ))}
    </List>
  )
}

export default VehicleListContainer
