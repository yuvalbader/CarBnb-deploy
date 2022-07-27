import * as React from "react";
import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import DetailsContainer from "../DetailsContainer/DetailsContainer";

const ProfileNavBar = () => {
  const [value, setValue] = useState("0");

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
          value="0"
        />
        <Tab
          icon={<ListAltIcon />}
          iconPosition="start"
          label="My reservations"
          value="1"
        />
        <Tab
          icon={<TimeToLeaveIcon />}
          iconPosition="start"
          label="My cars"
          value="2"
        />
      </Tabs>
      {value === "0" && (
        <DetailsContainer page="trips">My trips</DetailsContainer>
      )}
      {value === "1" && (
        <DetailsContainer page="reservations">My reservations</DetailsContainer>
      )}
      {/* {value === "2" && (
        <DetailsContainer title="cars">My cars</DetailsContainer>
      )} */}
    </div>
  );
};

export default ProfileNavBar;
