import VehicleCard from '../vehicle-card/VehicleCard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { getFilteredVehicles } from '../../app/selectors/vehicles-selectors';
const styleList = { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' };

const VehicleListContainer = () => {
  const filteredVehicles = getFilteredVehicles();

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
  );
};

export default VehicleListContainer;
