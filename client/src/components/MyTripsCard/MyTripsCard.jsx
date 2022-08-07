import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaidIcon from "@mui/icons-material/Paid";
import Avatar from "@mui/material/Avatar";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import { useEffect } from "react";
import CarModal from "../carDetails/CarDetails";

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

const MyTripsCard = ({
  car_picture,
  brand,
  car_id,
  model,
  type,
  end_date,
  id,
  location,
  owner_first_name,
  owner_last_name,
  owner_profile_picture,
  start_date,
  total_price,
  user_id,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={car_picture}
        alt={brand + model}
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
              {brand}
              <Typography
                component="div"
                marginLeft="10px"
                variant="h8"
                color="text.secondary"
              >
                {model}
              </Typography>
            </Typography>
            <Typography variant="h7" color="text.secondary">
              {type}
            </Typography>
          </Box>
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
              <Avatar
                alt={owner_first_name + owner_last_name}
                src={owner_profile_picture}
              />
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
                  {owner_first_name + " " + owner_last_name}
                </Link>
              </Box>
            </Box>
            <Box marginRigth={"40px"} marginTop={"10px"} width={"140px"}>
              <LocationOnIcon color="primary" fontSize={"10px"} />
              {location}
            </Box>
          </Typography>
          <Box display="flex" gap="40px" marginTop="20px">
            <Typography
              display="flex"
              flexDirection="column"
              // variant="h6"
              gap="5px"
              fontWeight={"bold"}
              variant="box"
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
              <Typography>
                {" "}
                {
                  //print only the date, not the time
                  start_date.split("T")[0]
                }
              </Typography>
            </Typography>
            <Typography
              display="flex"
              flexDirection="column"
              // variant="h6"
              gap="5px"
              fontWeight={"bold"}
              variant="box"
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
            // variant="h6"
            gap="5px"
            fontWeight={"bold"}
            variant="box"
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
      <CardActions>
        <CarModal id={car_id} text={"Open Details"} />
      </CardActions>
    </Card>
  );
};

export default MyTripsCard;
