<<<<<<< HEAD
import * as React from "react";
import { useState, useEffect } from "react";
import { Outlet, useNavigate, useRouter } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CardTravelIcon from "@mui/icons-material/CardTravel";

const ProfileNavBar = () => {
  const [value, setValue] = useState("trips");
=======
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import OrdersContainer from '../OrdersContainer/OrdersContainer';
import MyCars from '../MyCars/MyCars';

const ProfileNavBar = () => {
  const [value, setValue] = useState('trips');

>>>>>>> main
  const navigate = useNavigate();

  // useEffect(() => {
  //   return () => {
  //     window.onpopstate = () => {
  //       setValue(value);
  //     };
  //   };
  // }, [value]);
  
  const handleChange = (event, value) => {
<<<<<<< HEAD
    navigate(value);
    setValue(value);
  };

  const handleOutletChange = (value) => {
=======
    console.log('vhange');
    // navigate(`/MyProfile/${value}`);
>>>>>>> main
    setValue(value);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab
          icon={<CardTravelIcon />}
          iconPosition="start"
          label="My trips"
          value="trips"
        />
        <Tab
          icon={<ListAltIcon />}
          iconPosition="start"
          label="My reservations"
          value="reservations"
        />
        <Tab
          icon={<TimeToLeaveIcon />}
          iconPosition="start"
          label="My cars"
          value="mycars"
        />
      </Tabs>
<<<<<<< HEAD
      {/* {value === "trips" && (
=======

      {value === 'trips' && (
>>>>>>> main
        <OrdersContainer page="trips">My trips</OrdersContainer>
      )}
      {value === 'reservations' && (
        <OrdersContainer page="reservations">My reservations</OrdersContainer>
      )}
<<<<<<< HEAD
      {value === "cars" && <MyCars title="cars">My cars</MyCars>} */}
      <Outlet context={handleOutletChange}/>
=======
      {value === 'cars' && <MyCars title="cars">My cars</MyCars>}
>>>>>>> main
    </div>
  );
};

export default ProfileNavBar;
