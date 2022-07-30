import { useState } from 'react';
import { Button, MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';
import { Box } from '@mui/material';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

const FilterResultsBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const openSortMenuHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeSortMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button onClick={openSortMenuHandler}>Sort by</Button>
      <Button>Price</Button>
      <Button startIcon={ManageSearchIcon}>Filters</Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={closeSortMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={closeSortMenu}>Price: low to high</MenuItem>
        <MenuItem onClick={closeSortMenu}>Price: high to low</MenuItem>
      </Menu>
    </Box>
  );
};

export default FilterResultsBar;
