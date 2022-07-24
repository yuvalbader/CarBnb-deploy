import VehicleCard from "../vehicle-card/VehicleCard"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import { vehiclesDemo } from "./data"
import { getVehicles } from "../../app/selectors/vehicles-selectors"
import {
  getFrom,
  getTimeToDrop,
  getTimeToPick,
  getUntill,
  getWhere,
} from "../../app/selectors/search-selectors"
const styleList = { display: "grid", gridTemplateColumns: "repeat(3,1fr)" }

const VehicleListContainer = () => {
  const vehiclesList = getVehicles()
  const from = getFrom()
  const timeToDrop = getTimeToDrop()
  const timeToPick = getTimeToPick()
  const until = getUntill()
  const where = getWhere()

  const filteredVehicles = vehiclesList.filter((vehicle) =>
    vehicle.address.includes(where)
  )

  return (
    <List sx={styleList}>
      {filteredVehicles.map((vehicle) => (
        <ListItem>
          <VehicleCard
            brand={vehicle.brand}
            model={vehicle.model}
            year={vehicle.year}
            rating={vehicle.rating}
            price={vehicle.price}
            image={vehicle.image}
          />
        </ListItem>
      ))}
    </List>
  )
}

export default VehicleListContainer
