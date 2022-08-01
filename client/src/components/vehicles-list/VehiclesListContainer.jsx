import VehicleCard from "../vehicle-card/VehicleCard"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
// import { getFilteredVehicles } from "../../app/selectors/vehicles-selectors"
const styleList = { display: "grid", gridTemplateColumns: "repeat(3,1fr)" }

const VehicleListContainer = ({ vehicles }) => {
  console.log(vehicles)
  return (
    <List sx={styleList}>
      {vehicles.map(({ brand, model, year, price_per_day, profile_piture }) => (
        <ListItem>
          <VehicleCard
            brand={brand}
            model={model}
            year={year}
            // rating={vehicle.rating}
            price={price_per_day}
            image={profile_piture}
          />
        </ListItem>
      ))}
    </List>
  )
}

export default VehicleListContainer
