import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import TextFieldWarrper from '../ui/form/TextFieldWarrper';
import Select from '../ui/form/Select';
import SubmitButton from '../ui/form/SubmitButton';
import ListApiService from '../../services/list-api-service';
import InputMap from './InputMap';

import { useDispatch } from 'react-redux';
import InputButton from '../ui/form/InputButton';

function AddNewVehicleForm() {
  const dispatch = useDispatch();
  //let lat = 0;
  // let lng = 0;

  const INITIAL_FORM_STATE = {
    profile_piture: '',
    brand: '',
    model: '',
    year: '',
    number_of_seats: '',
    price_per_day: '',
    description: '',
  };

  const FORM_VALIDATION = Yup.object().shape({
    profile_piture: Yup.string().required('חובה'),
    brand: Yup.string().required('חובה'),
    model: Yup.string().required('חובה'),
    year: Yup.string().required('חובה'),
    number_of_seats: Yup.number().required('חובה'),
    price_per_day: Yup.number().required('חובה'),
    description: Yup.string().required('חובה'),
  });

  function addNewVehicleHandler(values) {
    const vehicleData = {
      profile_piture: '',
      brand: '',
      model: '',
      year: '',
      number_of_seats: '',
      price_per_day: '',
      description: '',
      user_id: '',
    };

    dispatch(ListApiService.addVehicle(vehicleData));
  }

  return (
    <Card sx={{ maxwidth: '100%' }}>
      {/*       <InputMap
        onClick={(latitude, longtitude) => {
          lat = latitude;
          lng = longtitude;
        }}
      ></InputMap> */}
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={addNewVehicleHandler}
      >
        <Form>
          <Grid
            container
            spacing={2}
            justifyContent="space-evenly"
            alignItems="center"
            p={5}
          >
            <Grid item xs={6}>
              <Select
                name="type"
                label="Type"
                options={{
                  1: 'Private',
                  2: 'Motocycle',
                  3: 'Jeep',
                  4: 'Van',
                  5: 'Bus',
                  6: 'Sport',
                  7: 'Luxuary',
                  8: 'Mini',
                }}
              ></Select>
            </Grid>
            <Grid item xs={6}>
              <TextFieldWarrper name="brand" label="Brand" />
            </Grid>
            <Grid item xs={6}>
              <TextFieldWarrper name="model" label="Model"></TextFieldWarrper>
            </Grid>
            <Grid item xs={6}>
              <TextFieldWarrper name="year" label="Year"></TextFieldWarrper>
            </Grid>
            <Grid item xs={6}>
              <Select
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
              ></Select>
            </Grid>
            <Grid item xs={6}>
              <TextFieldWarrper name="price" label="Price Per Day" />
            </Grid>
            <Grid item xs={6}>
              <TextFieldWarrper name="description" label="Description" />
            </Grid>
            <Divider />
            <Grid
              container
              spacing={2}
              justifyContent="flex-start"
              alignItems="center"
              p={5}
            >
              <Grid item xs={6}>
                <InputButton name="image">
                  <PhotoCameraIcon />
                </InputButton>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              p={5}
            >
              <SubmitButton text="הוסף טיול"></SubmitButton>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Card>
  );
}
export default AddNewVehicleForm;
