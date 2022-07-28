import * as React from "react";
import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import OrdersContainer from "../OrdersContainer/OrdersContainer";
import MyCars from "../MyCars/MyCars";

const ProfileNavBar = () => {
  const [value, setValue] = useState("trips");

  const handleChange = (event, value) => {
    setValue(value);
  };

  useEffect(() => {
    console.log("value", value);
  }, [value]);

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
          value="cars"
        />
      </Tabs>
      {value === "trips" && (
        <OrdersContainer page="trips">My trips</OrdersContainer>
      )}
      {value === "reservations" && (
        <OrdersContainer page="reservations">My reservations</OrdersContainer>
      )}
      {value === "cars" && <MyCars title="cars">My cars</MyCars>}
    </div>
  );
};

export default ProfileNavBar;
