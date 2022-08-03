import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaidIcon from "@mui/icons-material/Paid";
import Avatar from "@mui/material/Avatar";
import { Link } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const styleBox1 = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  my: "10px",
};

const styleBox2 = {
  display: "flex",
  justifyContent: "flex-end",
  my: "10px",
};

const MyReservationsCard = ({
  car_id,
  costumer_first_name,
  costumer_last_name,
  costumer_profile_picture,
  end_date,
  id,
  start_date,
  total_price,
  user_id,
}) => {
  let myCars = useSelector((state) => state.vehiclesSlice);
  const car = myCars[car_id];

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={car.profile_picture}
        alt={car.brand + car.model}
      />
      <CardContent>
        <Box sx={styleBox1}>
          <Box>
            <Typography
              display="flex"
              flexDirection="row"
              variant="h6"
              fontWeight={"bold"}
              component="div"
            >
              {car.brand}
              <Typography
                component="div"
                marginLeft="10px"
                variant="h8"
                color="text.secondary"
              >
                {car.model}
              </Typography>
            </Typography>
          </Box>
          <Typography variant="h7" color="text.secondary">
            {car.type}
          </Typography>
          <Typography
            variant="h8"
            fontWeight={"bold"}
            component="div"
            marginTop="10px"
            display="flex"
            flexDirection="row"
            gap="8px"
          >
            <Box display="flex" flexDirection="row">
              <Avatar alt="Remy Sharp" src={costumer_profile_picture} />
              <Box>
                <Link
                  display="flex"
                  flexDirection="row"
                  gap="8px"
                  variant="h8"
                  color="text.secondary"
                  marginLeft="20px"
                  width={"100px"}
                  marginTop="10px"
                  style={{ textDecoration: "none" }}
                  href={`https://fullstackmondayu.monday.com/boards/2949023880`} // navigate here to user profile page
                >
                  {costumer_first_name + " " + costumer_last_name}
                </Link>
              </Box>
            </Box>
            <Box marginRigth={"40px"} marginTop={"10px"} width={"140px"}>
              <LocationOnIcon color="primary" fontSize={"10px"} />
              {car.location}
            </Box>
          </Typography>
          <Box display="flex" gap="40px" marginTop="20px">
            <Typography
              display="flex"
              flexDirection="column"
              variant="h6"
              gap="5px"
              fontWeight={"bold"}
              component="box"
            >
              <Typography
                display="flex"
                flexDirection="row"
                gap="8px"
                variant="h6"
                fontWeight={"bold"}
              >
                <CalendarMonthIcon color="primary" fontSize={"10px"} />
                {"Start Date "}
              </Typography>
              <Typography> {start_date.split("T")[0]}</Typography>
            </Typography>
            <Typography
              display="flex"
              flexDirection="column"
              variant="h6"
              gap="5px"
              fontWeight={"bold"}
              component="box"
            >
              <Typography
                display="flex"
                flexDirection="row"
                gap="8px"
                variant="h6"
                fontWeight={"bold"}
              >
                <CalendarMonthIcon color="primary" fontSize={"10px"} />
                {"End Date "}
              </Typography>
              <Typography> {end_date.split("T")[0]}</Typography>
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            display="flex"
            flexDirection="column"
            variant="h6"
            gap="5px"
            fontWeight={"bold"}
            component="box"
          >
            <Typography
              display="flex"
              flexDirection="row"
              gap="8px"
              variant="h6"
              fontWeight={"bold"}
            >
              <PaidIcon color="primary" fontSize={"10px"} />
              {"Total Price"}
            </Typography>
            <Typography> {`${total_price} $`}</Typography>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MyReservationsCard;
