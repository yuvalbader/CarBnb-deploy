import { useState } from 'react';
import { AppBar, Button, MenuItem, Toolbar } from '@mui/material';
import Menu from '@mui/material/Menu';
import { Box } from '@mui/material';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import RangeSlider from '../rangeSlider/RangeSlider';

const styleBox = {
  my: '20px',
};

const styleButton = {
  mx: '10px',
};

const FilterResultsBar = ({ minPrice, maxPrice }) => {
  const [sortMenuEnchor, setSortMenuEnchor] = useState(null);
  const [priceMenuEnchor, setPriceMenuEnchor] = useState(null);

  const sortOpen = Boolean(sortMenuEnchor);
  const priceOpen = Boolean(priceMenuEnchor);

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
            <MenuItem onClick={closeSortMenu}>Price: low to high</MenuItem>
            <MenuItem onClick={closeSortMenu}>Price: high to low</MenuItem>
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
              ></RangeSlider>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default FilterResultsBar;
