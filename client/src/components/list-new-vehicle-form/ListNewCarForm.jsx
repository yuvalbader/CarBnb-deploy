import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import TextFieldWarrper from './form/TextFieldWarrper';
import Select from './form/Select';
import SubmitButton from './form/SubmitButton';
import { addVehicle } from '../../app/actions/add-vehicle-actions';
/* import InputMap from './InputMap'; */

import { useDispatch } from 'react-redux';
import InputButton from './form/InputButton';
import SelectWarrper from './form/Select';

const ListNewVehicleForm = () => {
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
    city: Yup.string().required('required'),
  });

  function addNewVehicleHandler(values) {
    console.log(values);
    const vehicleData = {
      profile_picture: values.profile_picture,
      brand: values.brand,
      model: values.model,
      year: values.year,
      number_of_seats: values.number_of_seats,
      price_per_day: values.price_per_day,
      description: values.description,
      type: values.type,
      city: values.city,
    };

    dispatch(addVehicle(vehicleData));
  }

  return (
    <Card sx={{ maxWidth: '50%', m: '20px' }}>
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
                  Bus: 'Bus',
                  Sport: 'Sport',
                  Luxuary: 'Luxuary',
                  Mini: 'Mini',
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
              <TextFieldWarrper name="city" label="City" />
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
    </Card>
  );
};
export default ListNewVehicleForm;
