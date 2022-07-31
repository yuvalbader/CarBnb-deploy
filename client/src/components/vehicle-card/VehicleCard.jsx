import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import PaidIcon from "@mui/icons-material/Paid";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";

import Box from "@mui/material/Box";

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

const styleBox3 = {
  component: "div",
  marginLeft: "10px",
  variant: "h8",
  fontSize: "16px",
  color: "text.secondary",
};

const VehicleCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={props.image}
        alt={props.brand + " " + props.model}
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
              {props.brand}
              <Typography
                component="div"
                marginLeft="10px"
                variant="h8"
                color="text.secondary"
              >
                {props.type}
              </Typography>
            </Typography>
          </Box>
          <Typography variant="h7" color="text.secondary">
            {props.model}
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
            <LocationOnIcon color="primary" fontSize={"10px"} />
            {props.location}
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
              <Typography sx={styleBox3}>
                <AirlineSeatReclineExtraIcon color="primary" />
                {` ${props.seats} seats `}
              </Typography>
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
                flexDirection="column"
                variant="h6"
                gap="5px"
                fontWeight={"bold"}
                component="box"
              >
                <Typography sx={styleBox3}>
                  <LocalGasStationIcon color="primary" />
                  {`${props.engine}`}
                </Typography>
              </Typography>
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
                flexDirection="column"
                variant="h6"
                gap="5px"
                fontWeight={"bold"}
                component="box"
              >
                <Typography sx={styleBox3}>
                  <ManageHistoryIcon color="primary" />
                  {`${props.gear}`}
                </Typography>
              </Typography>
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
              {"price"}
            </Typography>
            <Typography> {`${props.totalPrice} /day`}</Typography>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
