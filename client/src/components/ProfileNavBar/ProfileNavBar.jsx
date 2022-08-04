import * as React from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CardTravelIcon from "@mui/icons-material/CardTravel";

const ProfileNavBar = () => {
  const [value, setValue] = useState("trips");
  const navigate = useNavigate();
  
  const handleChange = (event, value) => {
    navigate(value);
    setValue(value);
  };

  return (
    <>
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
      <Outlet />
    </>
  );
};

export default ProfileNavBar;
