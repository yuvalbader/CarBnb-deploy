import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PaidIcon from '@mui/icons-material/Paid';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import Chip from '@mui/material/Chip';

import Box from '@mui/material/Box';
import { Divider } from '@mui/material';

const styleBox1 = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  my: '10px',
};

const styleBox2 = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
};

const typographyStyle = {
  padding: '5px',
};
const chipStyle = {
  border: 'none',
};

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
        alt={brand + ' ' + model}
      />
      <CardContent>
        <Box sx={styleBox1}>
          <Box sx={styleBox2}>
            <Typography variant="h6" fontWeight={'bold'} sx={typographyStyle}>
              {brand}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={typographyStyle}
            >
              {model}
            </Typography>
          </Box>
          <Box sx={styleBox2}>
            <LocationOnIcon color="primary" fontSize={'10px'} />
            <Typography sx={typographyStyle} variant="body2">
              {location}
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
            <PaidIcon color="primary" fontSize={'10px'} />
            <Typography sx={typographyStyle} variant="h7" fontWeight={'bold'}>
              {`${price} /day`}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
