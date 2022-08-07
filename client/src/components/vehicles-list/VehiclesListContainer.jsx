import VehicleCard from "../vehicle-card/VehicleCard"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
const styleList = { display: "grid", gridTemplateColumns: "repeat(3,1fr)" }

const VehicleListContainer = ({ vehicles, state}) => {

  return (
    <List sx={styleList}>
      {vehicles.map(
        (
          {
            page,
            brand,
            type,
            model,
            price_per_day,
            gear,
            location,
            engine,
            profile_picture,
            number_of_seats,
            user_id,
            id,
          },
          index
        ) => (
          <ListItem key={index}>
            <VehicleCard
              id={id}
              page={page}
              brand={brand}
              type={type}
              model={model}
              price_per_day={price_per_day}
              gear={gear}
              location={location}
              engine={engine}
              profile_picture={profile_picture}
              number_of_seats={number_of_seats}
              user_id={user_id}
              state={state}
            />
          </ListItem>
        )
      )}
    </List>
  )
}

export default VehicleListContainer
