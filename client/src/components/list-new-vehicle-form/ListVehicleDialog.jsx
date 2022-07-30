import { useState } from 'react';
import { forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import ListNewVehicleForm from './ListNewCarForm';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ListVahicleDialog = ({ open, onClose }) => {
  const CloseDialogHandler = () => {
    onClose();
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={CloseDialogHandler}
        TransitionComponent={Transition}
        sx={{ alignItems: 'center' }}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={CloseDialogHandler}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              List new vehicle.
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          sx={{ padding: '20px', display: 'flex', justifyContent: 'center' }}
        >
          <ListNewVehicleForm onSubmit={CloseDialogHandler} />
        </Box>
      </Dialog>
    </div>
  );
};

export default ListVahicleDialog;
