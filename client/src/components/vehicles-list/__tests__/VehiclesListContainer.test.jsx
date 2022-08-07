import { render, screen } from '@testing-library/react';
import VehicleListContainer from '../VehiclesListContainer';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import '@testing-library/jest-dom';

const state = {
  dateFrom: new Date(2022, 9, 23, 10, 0),
  dateUntil: new Date(2022, 9, 30, 10, 0),
};
const vehicles = [
  {
    profile_picture: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQclo5plfEevUZaDl2qn2TzQUOl8iOWSbQiwkj1vVWVJA&s`,
    brand: 'Tesla',
    model: 'model X',
    year: 2020,
    number_of_seats: 5,
    price_per_day: 150,
    description: 'Electric',
    user_id: 1,
    location: 'Tel Aviv, Israel',
    type: 'Sedan',
    engine: 'Electric',
    gear: 'AUTO',
    gas: 'electric',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    profile_picture: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYoo340vJNdQagqenFvdf0acMmW3LXpeS-TaOpK5zrw&s`,
    brand: 'JEEP',
    model: 'Wrangler',
    year: 2020,
    number_of_seats: 4,
    price_per_day: 250,
    description: 'off-road',
    user_id: 1,
    location: 'New York, USA',
    type: 'SUV',
    engine: 'Diesel',
    gear: 'AUTO',
    gas: '22 MPG',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

describe('VehiclesListContainer', () => {
  test('should render with no parameters', () => {
    render(
      <Provider store={store}>
        <VehicleListContainer vehicles={vehicles} state={state} />
      </Provider>
    );

    const firstItem = screen.getByText('Tesla');
    const secondItem = screen.getByText('JEEP');
    expect(firstItem).toBeInTheDocument();
    expect(secondItem).toBeInTheDocument();
  });
});
