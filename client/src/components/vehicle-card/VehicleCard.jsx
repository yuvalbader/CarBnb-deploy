import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation"
import PaidIcon from "@mui/icons-material/Paid"
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra"
import ManageHistoryIcon from "@mui/icons-material/ManageHistory"
import Chip from "@mui/material/Chip"

import Box from "@mui/material/Box"
// import { Divider } from "@mui/material"

const styleBox1 = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  my: "10px",
}

const styleBox2 = {
  display: "flex",
  alignItems: "center",
  width: "100%",
}

const typographyStyle = {
  padding: "5px",
}
const chipStyle = {
  border: "none",
}

const VehicleCard = ({
  image,
  brand,
  model,
  price,
  gear,
  location,
  engine,
  seats,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={brand + " " + model}
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
              {/* <Typography
                component="div"
                marginLeft="10px"
                variant="h8"
                color="text.secondary"
              >
                {type}
              </Typography> */}
            </Typography>
          </Box>
          <Typography variant="h7" color="text.secondary">
            {model}
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
            {location}
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
              <Typography sx={styleBox2}>
                <AirlineSeatReclineExtraIcon color="primary" />
                {` ${seats} seats `}
              </Typography>
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={typographyStyle}
            >
              <Typography
                display="flex"
                flexDirection="column"
                variant="h6"
                gap="5px"
                fontWeight={"bold"}
                component="box"
              >
                <Typography sx={styleBox2}>
                  <LocalGasStationIcon color="primary" />
                  {`${engine}`}
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
                <Typography sx={styleBox2}>
                  <ManageHistoryIcon color="primary" />
                  {`${gear}`}
                </Typography>
              </Typography>
            </Typography>
          </Box>
          {/*           <Typography variant="h7" color="text.secondary" sx={typographyStyle}>
            {props.item.type}
          </Typography> */}
          <Box sx={styleBox2} justifyContent="space-between">
            <Chip
              icon={<AirlineSeatReclineExtraIcon />}
              label={` ${seats} seats `}
              variant="outlined"
              sx={chipStyle}
            />
            <Chip
              icon={<LocalGasStationIcon />}
              label={`${engine}`}
              variant="outlined"
              sx={chipStyle}
            />
            <Chip
              icon={<ManageHistoryIcon />}
              label={`${gear}`}
              variant="outlined"
              sx={chipStyle}
            />
          </Box>
          {/* <Divider sx={{ my: '10px' }}></Divider> */}
          <Box sx={styleBox2} justifyContent="flex-end">
            <PaidIcon color="primary" fontSize={"10px"} />
            <Typography sx={typographyStyle} variant="h7" fontWeight={"bold"}>
              {`${price} /day`}
            </Typography>
            {/* <Typography> {`${totalPrice} /day`}</Typography> */}
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default VehicleCard
