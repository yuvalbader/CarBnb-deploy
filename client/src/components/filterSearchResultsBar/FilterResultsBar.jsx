import { useState } from 'react';
import { AppBar, Button, FormControl, MenuItem, Toolbar } from '@mui/material';
import Menu from '@mui/material/Menu';
import {
  Select,
  InputLabel,
  ListItemText,
  Checkbox,
  OutlinedInput,
  Box,
} from '@mui/material';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import RangeSlider from '../rangeSlider/RangeSlider';
import {
  setPriceRange,
  setPriceHTL,
  setPriceLTH,
  setFilters,
} from '../../app/actions/search-actions';
import { useDispatch } from 'react-redux';

const styleBox = {
  my: '20px',
};

const styleButton = {
  mx: '10px',
};

const FilterResultsBar = ({ data }) => {
  const { minPrice, maxPrice, types, number_of_seats, brands, engines, gears } =
    data;
  const dispatch = useDispatch();
  const [sortMenuEnchor, setSortMenuEnchor] = useState(null);
  const [priceMenuEnchor, setPriceMenuEnchor] = useState(null);
  const [filtersMenuEnchor, setFiltersMenuEnchor] = useState(null);
  const [numOfSeats, setNumOfSeats] = useState([]);
  const [vehiclesTypes, setVehicleTypes] = useState([]);
  const [vehiclesBrands, setVehicleBrands] = useState([]);
  const [vehiclesEngines, setVehicleEngines] = useState([]);
  const [vehiclesGears, setVehicleGears] = useState([]);

  const sortOpen = Boolean(sortMenuEnchor);
  const priceOpen = Boolean(priceMenuEnchor);
  const filtersOpen = Boolean(filtersMenuEnchor);

  const openSortMenuHandler = (event) => {
    setSortMenuEnchor(event.currentTarget);
  };
  const closeSortMenu = () => {
    setSortMenuEnchor(null);
  };

  const openPriceMenuHandler = (event) => {
    setPriceMenuEnchor(event.currentTarget);
  };
  const closePriceMenu = () => {
    setPriceMenuEnchor(null);
  };

  const openFiltersMenuHandler = (event) => {
    setFiltersMenuEnchor(event.currentTarget);
  };
  const closeFiltersMenu = () => {
    setFiltersMenuEnchor(null);
  };

  const sortLTHHandler = () => {
    dispatch(setPriceLTH());
    setSortMenuEnchor(null);
  };

  const sortHTLHandler = () => {
    dispatch(setPriceHTL());
    setSortMenuEnchor(null);
  };

  const changeRangeHandler = (range) => {
    dispatch(setPriceRange(range));
  };

  const changeNumOfSeats = (event) => {
    const {
      target: { value },
    } = event;
    setNumOfSeats(typeof value === 'string' ? value.split(',') : value);
  };

  const changeVehiclesTypes = (event) => {
    const {
      target: { value },
    } = event;
    setVehicleTypes(typeof value === 'string' ? value.split(',') : value);
  };

  const changeVehiclesBrands = (event) => {
    const {
      target: { value },
    } = event;
    setVehicleBrands(typeof value === 'string' ? value.split(',') : value);
  };
  const changeVehiclesEngines = (event) => {
    const {
      target: { value },
    } = event;
    setVehicleEngines(typeof value === 'string' ? value.split(',') : value);
  };
  const changeVehiclesGears = (event) => {
    const {
      target: { value },
    } = event;
    setVehicleGears(typeof value === 'string' ? value.split(',') : value);
  };
  const applyFiltersHandler = () => {
    dispatch(
      setFilters(
        numOfSeats,
        vehiclesTypes,
        vehiclesBrands,
        vehiclesEngines,
        vehiclesGears
      )
    );
    closeFiltersMenu();
  };

  return (
    <Box sx={{ styleBox }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Button
            sx={styleButton}
            variant="outlined"
            onClick={openSortMenuHandler}
          >
            Sort by
          </Button>
          <Button
            sx={styleButton}
            variant="outlined"
            onClick={openPriceMenuHandler}
          >
            Price
          </Button>
          <Button
            sx={styleButton}
            variant="outlined"
            startIcon={<ManageSearchIcon />}
            onClick={openFiltersMenuHandler}
          >
            Filters
          </Button>
          <Menu
            anchorEl={sortMenuEnchor}
            open={sortOpen}
            onClose={closeSortMenu}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={sortLTHHandler}>Price: low to high</MenuItem>
            <MenuItem onClick={sortHTLHandler}>Price: high to low</MenuItem>
          </Menu>
          <Menu
            anchorEl={priceMenuEnchor}
            open={priceOpen}
            onClose={closePriceMenu}
          >
            <MenuItem
              sx={{
                height: '100px',
                width: '400px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <RangeSlider
                minValue={minPrice}
                maxValue={maxPrice}
                onChangeRange={changeRangeHandler}
              ></RangeSlider>
            </MenuItem>
          </Menu>
          <Menu
            anchorEl={filtersMenuEnchor}
            open={filtersOpen}
            onClose={closeFiltersMenu}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="num-of-seats-label">Number of seats</InputLabel>
                <Select
                  labelId="num-of-seats-label"
                  multiple
                  value={numOfSeats}
                  onChange={changeNumOfSeats}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {number_of_seats.map((num) => (
                    <MenuItem key={num} value={num}>
                      <Checkbox checked={numOfSeats.indexOf(num) > -1} />
                      <ListItemText primary={num} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </MenuItem>
            <MenuItem>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="types-label">Type</InputLabel>
                <Select
                  labelId="types-label"
                  multiple
                  value={vehiclesTypes}
                  onChange={changeVehiclesTypes}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {types.map((num) => (
                    <MenuItem key={num} value={num}>
                      <Checkbox checked={vehiclesTypes.indexOf(num) > -1} />
                      <ListItemText primary={num} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </MenuItem>
            <MenuItem>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="brands-label">Brand</InputLabel>
                <Select
                  labelId="brands-label"
                  multiple
                  value={vehiclesBrands}
                  onChange={changeVehiclesBrands}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {brands.map((num) => (
                    <MenuItem key={num} value={num}>
                      <Checkbox checked={vehiclesBrands.indexOf(num) > -1} />
                      <ListItemText primary={num} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </MenuItem>
            <MenuItem>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="engines-label">Engine</InputLabel>
                <Select
                  labelId="engines-label"
                  multiple
                  value={vehiclesEngines}
                  onChange={changeVehiclesEngines}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {engines.map((num) => (
                    <MenuItem key={num} value={num}>
                      <Checkbox checked={vehiclesEngines.indexOf(num) > -1} />
                      <ListItemText primary={num} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </MenuItem>
            <MenuItem>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="gears-label">Gear</InputLabel>
                <Select
                  labelId="gears-label"
                  multiple
                  value={vehiclesGears}
                  onChange={changeVehiclesGears}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {gears.map((num) => (
                    <MenuItem key={num} value={num}>
                      <Checkbox checked={vehiclesGears.indexOf(num) > -1} />
                      <ListItemText primary={num} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </MenuItem>
            <MenuItem>
              <Button onClick={applyFiltersHandler}>Apply</Button>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default FilterResultsBar;
