import VehicleCard from "../vehicle-card/VehicleCard";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import { getFilteredVehicles } from "../../app/selectors/vehicles-selectors"
const styleList = { display: "grid", gridTemplateColumns: "repeat(3,1fr)" };

const VehicleListContainer = ({ vehicles }) => {
  console.log(vehicles);
  return (
    <List sx={styleList}>
      {vehicles.map(
        ({
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
        }) => (
          <ListItem>
            <VehicleCard
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
            />
          </ListItem>
        )
      )}
    </List>
  );
};

export default VehicleListContainer;
