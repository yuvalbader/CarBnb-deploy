import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import TextFieldWarrper from './form/TextFieldWarrper';
import Select from './form/Select';
import SubmitButton from './form/SubmitButton';
import { addVehicle } from '../../app/actions/add-vehicle-actions';
/* import InputMap from './InputMap'; */

import { useDispatch } from 'react-redux';
import InputButton from './form/InputButton';
import SelectWarrper from './form/Select';

const ListNewVehicleForm = (onSubmit) => {
  const dispatch = useDispatch();
  //let lat = 0;
  // let lng = 0;

  const INITIAL_FORM_STATE = {
    profile_picture: '',
    brand: '',
    model: '',
    year: '',
    number_of_seats: '',
    price_per_day: '',
    description: '',
    location: '',
    gear: '',
    gas: '',
  };

  const FORM_VALIDATION = Yup.object().shape({
    profile_picture: Yup.string().required('required'),
    brand: Yup.string().required('required'),
    model: Yup.string().required('required'),
    year: Yup.string().required('required'),
    number_of_seats: Yup.string().required('required'),
    price_per_day: Yup.string().required('required'),
    description: Yup.string().required('required'),
    type: Yup.string().required('required'),
    location: Yup.string().required('required'),
    gear: Yup.string().required('required'),
    gas: Yup.string().required('required'),
  });

  function addNewVehicleHandler(values) {
    const vehicleData = {
      profile_picture: values.profile_picture,
      brand: values.brand,
      model: values.model,
      year: values.year,
      number_of_seats: values.number_of_seats,
      price_per_day: values.price_per_day,
      description: values.description,
      type: values.type,
      location: values.location,
      gear: values.gear,
      gas: values.gas,
    };

    dispatch(addVehicle(vehicleData));
    onSubmit();
  }

  return (
    <Box sx={{ maxWidth: '50%', m: '20px' }}>
      <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
        Fill in your vahicle detailes
      </Typography>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={addNewVehicleHandler}
      >
        <Form>
          <Grid
            container
            spacing={1}
            justifyContent="space-evenly"
            alignItems="center"
            p={5}
          >
            <Grid item xs={12}>
              <SelectWarrper
                name="type"
                label="Type"
                options={{
                  Private: 'Private',
                  Motorcycle: 'Motorcycle',
                  Jeep: 'Jeep',
                  Van: 'Van',
                  Minivan: 'Minivan',
                  Sport: 'Sport',
                  Luxuary: 'Luxuary',
                  SUV: 'SUV',
                }}
              ></SelectWarrper>
            </Grid>
            <Grid item xs={12}>
              <TextFieldWarrper name="brand" label="Brand" />
            </Grid>
            <Grid item xs={12}>
              <TextFieldWarrper name="model" label="Model"></TextFieldWarrper>
            </Grid>
            <Grid item xs={12}>
              <TextFieldWarrper name="year" label="Year"></TextFieldWarrper>
            </Grid>
            <Grid item xs={12}>
              <SelectWarrper
                name="number_of_seats"
                label="Number of seats"
                options={{
                  1: '1',
                  2: '2',
                  3: '3',
                  4: '4',
                  5: '5',
                  6: '6',
                  7: '7',
                }}
              ></SelectWarrper>
            </Grid>
            <Grid item xs={12}>
              <TextFieldWarrper name="gear" label="Gear" />
            </Grid>
            <Grid item xs={12}>
              <SelectWarrper
                name="gas"
                label="Gas"
                options={{
                  Electric: 'Electric',
                  Hybrid: 'Hybrid',
                  Gas: 'Gas',
                }}
              ></SelectWarrper>
            </Grid>
            <Grid item xs={12}>
              <TextFieldWarrper name="price_per_day" label="Price/Day" />
            </Grid>
            <Grid item xs={12}>
              <TextFieldWarrper name="location" label="Location" />
            </Grid>
            <Grid item xs={12}>
              <TextFieldWarrper name="price_per_day" label="Price/Day" />
            </Grid>
            <Grid item xs={12}>
              <TextFieldWarrper
                name="description"
                label="Description"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <InputButton name="profile_picture">
                <PhotoCameraIcon />
              </InputButton>
            </Grid>
            <Grid
              container
              spacing={1}
              justifyContent="center"
              alignItems="center"
              p={5}
            >
              <SubmitButton text="Add Vehicle"></SubmitButton>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Box>
  );
};
export default ListNewVehicleForm;
