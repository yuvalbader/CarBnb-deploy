import VehicleCard from '../vehicle-card/VehicleCard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import bmw from '../../images/bmw.jpg';
import chevrolet from '../../images/chevrolet.jpg';
import tesla from '../../images/tesla.jpg';
const styleList = { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' };
const vehiclesDemo = [
  {
    brand: 'BMW',
    model: 'i8',
    year: '2016',
    rating: '4.91',
    price: '200',
    image: bmw,
  },
  {
    brand: 'Tesla',
    model: 'Model S',
    year: '2022',
    rating: '5.0',
    price: '250',
    image: chevrolet,
  },
  {
    brand: 'Chevrolet',
    model: 'Covert',
    year: '2016',
    rating: '4.95',
    price: '115',
    image: tesla,
  },
];
const VehicleListContainer = ({ vehicles = vehiclesDemo }) => {
  return (
    <List sx={styleList}>
      {vehicles.map((vehicle) => (
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
